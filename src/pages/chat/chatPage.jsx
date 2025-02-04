import React, { useEffect, useState, useRef } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import { useLocation, useParams } from "react-router-dom";
import { S } from "./chatPage.style";
import { getChatHistory, getOtherInfo } from "../../api/chat";
import { getMemberInfo } from "../../api/member";
import ChatBackButton from "../../components/common/BackButton/chatBackButton";
import { ReactComponent as SendIcon } from "../../assets/chat/send.svg";
import { getPostDetail } from "../../api/sharing";

const serverUrl = process.env.REACT_APP_SERVER_URL;

const ChatPage = () => {
    const { chatRoomId } = useParams();
    const location = useLocation();
    const { state } = location;
    const otherInfo = state?.otherInfo;
    const [senderId, setSenderId] = useState(null);

    const [receiverProfileImg, setReceiverProfileImg] = useState(
        otherInfo?.data.profileImg ||
            "https://shareeat-github-actions-s3-bucket.s3.ap-northeast-2.amazonaws.com/images/cdc917cf-1f1f-46ce-8b26-fa055fad9def_unnamed.jpg"
    );
    const [receiverName, setReceiverName] = useState(
        otherInfo?.data.nickname || state?.title
    );
    console.log("ChatPage에서 받은 상대방 정보:", otherInfo);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    const stompClient = useRef(null);
    const [accessToken, setAccessToken] = useState("");
    const isSubscribed = useRef(false); // 구독 상태를 useRef로 관리
    const messageContainerRef = useRef(null);

    // WebSocket 연결 설정 및 채팅 내역 로드
    useEffect(() => {
        const fetchChatHistory = async () => {
            try {
                const chatHistory = await getChatHistory(chatRoomId);
                setMessages(chatHistory);
            } catch (error) {
                console.error("채팅 내역 로드 실패:", error);
            }
        };

        const token = localStorage.getItem("token");
        if (token) setAccessToken(JSON.parse(token).accessToken);

        fetchChatHistory();

        const client = new Client({
            webSocketFactory: () => new SockJS(serverUrl),
            reconnectDelay: 5000,
            heartbeatIncoming: 10000,
            heartbeatOutgoing: 10000,
            connectHeaders: { Authorization: accessToken },
            onConnect: () => {
                setIsConnected(true);

                // 기존 구독 해제
                if (isSubscribed.current) {
                    console.log("구독 해제");
                    stompClient.current.unsubscribe(
                        `/topic/chatRoom/${chatRoomId}`
                    );
                }

                // 새 구독 설정
                console.log(`구독 실행: /topic/chatRoom/${chatRoomId}`);
                const subscription = client.subscribe(
                    `/topic/chatRoom/${chatRoomId}`,
                    (message) => {
                        try {
                            const newMessage = JSON.parse(message.body);
                            console.log(
                                "서버로부터 수신한 메시지:",
                                newMessage
                            );

                            setMessages((prevMessages) => {
                                const isDuplicate = prevMessages.some(
                                    (msg) => msg.id === newMessage.id
                                );
                                return isDuplicate
                                    ? prevMessages
                                    : [...prevMessages, newMessage];
                            });
                        } catch (error) {
                            console.error("메시지 처리 오류:", error);
                        }
                    }
                );

                // 구독 상태 업데이트
                isSubscribed.current = true;

                return () => {
                    subscription.unsubscribe();
                    isSubscribed.current = false;
                };
            },
            onDisconnect: () => {
                setIsConnected(false);
                isSubscribed.current = false;
            },
        });

        client.activate();
        stompClient.current = client;

        return () => {
            if (stompClient.current) {
                stompClient.current.deactivate();
            }
        };
    }, [chatRoomId, accessToken]);

    useEffect(() => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop =
                messageContainerRef.current.scrollHeight;
        }
    }, [messages]);

    // 메시지 전송 핸들러
    const handleSendMessage = async () => {
        if (!inputText.trim() || !stompClient.current?.connected) return;

        const chatMessage = {
            type: "TALK",
            chatRoomId,
            senderId,
            content: inputText,
        };

        stompClient.current.publish({
            destination: `/app/chat/message/${chatRoomId}`,
            body: JSON.stringify(chatMessage),
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        setInputText("");
        try {
            const updatedChatHistory = await getChatHistory(chatRoomId);
            setMessages(updatedChatHistory);
            console.log("메시지 전송 후 채팅 히스토리 업데이트 완료");
        } catch (error) {
            console.error("메시지 전송 후 채팅 히스토리 호출 실패:", error);
        }
    };

    // 메시지 전송 (Enter 키)
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <S.Layout>
            <ChatBackButton
                text={receiverName}
                profileImg={receiverProfileImg}
            />
            <S.MessageContainer ref={messageContainerRef}>
                {messages.map((msg) => (
                    <S.MessageWrapper
                        key={msg.id}
                        style={{
                            justifyContent:
                                msg.senderId === senderId
                                    ? "flex-end"
                                    : "flex-start",
                        }}
                    >
                        {msg.senderId !== senderId && (
                            <S.UserProfileImage
                                src={receiverProfileImg || "default.png"}
                                alt="User"
                            />
                        )}
                        <S.MessageContentContainer>
                            <S.MessageText
                                senderId={msg.senderId}
                                currentUserId={senderId}
                            >
                                {msg.content}
                            </S.MessageText>
                        </S.MessageContentContainer>
                    </S.MessageWrapper>
                ))}
            </S.MessageContainer>
            <S.InputContainer>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="메시지를 입력하세요..."
                />
                <button onClick={handleSendMessage}>
                    <SendIcon />{" "}
                </button>
            </S.InputContainer>
        </S.Layout>
    );
};

export default ChatPage;
