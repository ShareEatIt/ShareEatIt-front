import React, { useEffect, useState, useRef } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import { useParams } from "react-router-dom";
import { S } from "./chatPage.style";
import BackButton from "../../components/common/BackButton/backButton";
import { getChatHistory } from "../../api/chat";
import { getMemberInfo } from "../../api/member";

const serverUrl = process.env.REACT_APP_SERVER_URL;

const ChatPage = () => {
    const { chatRoomId } = useParams();
    const [senderId, setSenderId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    const stompClient = useRef(null);
    const [accessToken, setAccessToken] = useState("");
    const isSubscribed = useRef(false); // 구독 상태를 useRef로 관리

    // 사용자 정보 가져오기
    useEffect(() => {
        const fetchMemberInfo = async () => {
            try {
                const response = await getMemberInfo();
                setSenderId(response.data.data.id);
            } catch (error) {
                console.error("사용자 정보 불러오기 실패:", error);
            }
        };
        fetchMemberInfo();
    }, []);

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
            <BackButton text="채팅방" />
            <S.MessageContainer>
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
                        {msg.senderId !== senderId && <S.UserProfileImage />}
                        <S.MessageContentContainer>
                            <S.MessageText>{msg.content}</S.MessageText>
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
                <button onClick={handleSendMessage}>보내기</button>
            </S.InputContainer>
        </S.Layout>
    );
};

export default ChatPage;
