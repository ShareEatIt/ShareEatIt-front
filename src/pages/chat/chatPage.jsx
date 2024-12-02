import React, { useEffect, useState, useRef } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import { useNavigate, useParams } from "react-router-dom";
import { S } from "./chatPage.style";
import BackButton from "../../components/common/BackButton/backButton";
import { getChatHistory, sendChatMessage } from "../../api/chat";
import { getMemberInfo } from "../../api/member";

const serverUrl = process.env.REACT_APP_SERVER_URL;

const ChatPage = () => {
    const { chatRoomId } = useParams();
    const [senderId, setSenderId] = useState(null);
    const [messages, setMessages] = useState([]); // 채팅 메시지 상태
    const [inputText, setInputText] = useState(""); // 입력 메시지 상태
    const [isConnected, setIsConnected] = useState(false); // 연결 상태
    const stompClient = useRef(null); // STOMP 클라이언트 인스턴스 관리
    const [accessToken, setAccessToken] = useState();

    // const token = JSON.parse(localStorage.getItem("token"))?.accessToken; // 토큰 가져오기
    // 사용자 정보
    useEffect(() => {
        const fetchMemberInfo = async () => {
            try {
                const response = await getMemberInfo();
                const userId = response.data.data.id; // 서버에서 반환된 사용자 ID
                setSenderId(userId); // senderId 설정
                console.log("사용자 정보: ", response.data.data);
            } catch (error) {
                console.error("사용자 정보 불러오기 실패: ", error);
            }
        };

        fetchMemberInfo();
    }, []);

    // WebSocket 연결 설정
    useEffect(() => {
        // 채팅 내역 로드
        const fetchChatHistory = async () => {
            try {
                const chatHistory = await getChatHistory(chatRoomId); // API 호출
                setMessages(chatHistory);
                console.log("채팅 내역 로드: ", chatHistory);
            } catch (error) {
                console.error("채팅 내역 로드 실패:", error);
            }
        };

        const token = localStorage.getItem("token");
        if (token) setAccessToken(JSON.parse(token).accessToken);
        fetchChatHistory();
    }, [chatRoomId]);

    // a마운트 언마운트 기록
    useEffect(() => {
        console.log("ChatPage mounted");
        return () => console.log("ChatPage unmounted");
    }, []);

    useEffect(() => {
        // SockJS와 STOMP 클라이언트 초기화
        //  const socket = new SockJS(serverUrl);
        console.log("WebSocket 연결 시도...");
        const client = new Client({
            webSocketFactory: () => new SockJS(serverUrl),

            reconnectDelay: 5000, // 재연결 딜레이
            heartbeatIncoming: 10000, // 서버에서 클라이언트로 10초마다 핑
            heartbeatOutgoing: 10000,
            debug: (str) => {
                console.log("[STOMP 디버그] ", str);
                console.log("전송되는 토큰: ", accessToken);
            },
            connectHeaders: {
                Authorization: accessToken, // Authorization 헤더 추가
            },
            onConnect: () => {
                console.log("WebSocket 연결 성공");
                setIsConnected(true);

                // 특정 채팅방 구독
                client.subscribe(`/topic/chatRoom/${chatRoomId}`, (message) => {
                    try {
                        console.log(
                            "서버로부터 수신한 메시지:",
                            JSON.parse(message.body)
                        );
                        const newMessage = JSON.parse(message.body);
                        setMessages((prevMessages) => [
                            ...prevMessages,
                            newMessage,
                        ]);
                    } catch (error) {
                        console.error("구독에러: ", error);
                    }
                });
            },

            onStompError: (error) => {
                console.error("STOMP 오류:", error.headers["message"]);
            },
            onDisconnect: () => {
                console.log("WebSocket 연결 종료");
                setIsConnected(false);
            },
        });

        // STOMP 클라이언트 활성화
        client.activate();
        stompClient.current = client;

        // 컴포넌트 언마운트 시 WebSocket 연결 해제
        return () => {
            console.log("WebSocket 클라이언트 해제");
            if (stompClient.current) {
                stompClient.current.deactivate();
            }
        };
    }, [chatRoomId, accessToken]);

    const handleSendMessage = async () => {
        if (!inputText.trim()) return;

        if (
            stompClient.current &&
            stompClient.current.connected &&
            inputText?.trim()
        ) {
            const chatMessage = {
                type: "TALK",
                chatRoomId: chatRoomId,
                senderId: senderId,
                content: inputText,
            };

            console.log("액세스 토큰: ", accessToken);

            stompClient.current.publish({
                destination: `/app/chat/message/{chatRoomId}`,
                body: JSON.stringify(chatMessage),
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setInputText(""); // 입력창 초기화
        }
    };

    // 메시지 전송 (Enter 키로도 가능)
    const handleKeyDown = (e) => {
        if (e.key !== "Enter") return;

        e.preventDefault();
        if (e.shiftKey) {
            setInputText((prev) => prev + "\n"); // Shift + Enter로 줄바꿈 추가
        } else {
            handleSendMessage(); // Enter로 메시지 전송
        }
    };

    return (
        <S.Layout>
            <BackButton text={"채팅방"} />
            <S.MessageContainer>
                {messages.map((msg) => (
                    <S.MessageWrapper
                        key={msg.id}
                        style={{
                            display: "flex",
                            justifyContent:
                                msg.senderId === senderId
                                    ? "flex-end"
                                    : "flex-start",
                        }}
                    >
                        {msg.senderId !== senderId && <S.UserProfileImage />}{" "}
                        <S.MessageContentContainer
                            isOwn={msg.senderId === senderId}
                        >
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
