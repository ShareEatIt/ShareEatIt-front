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

    const token = JSON.parse(localStorage.getItem("token"))?.accessToken; // 토큰 가져오기
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
        console.log("WebSocket 연결 시도...");

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

        fetchChatHistory();

        // SockJS와 STOMP 클라이언트 초기화
        const socket = new SockJS(serverUrl);
        const client = new Client({
            webSocketFactory: () => socket,
            reconnectDelay: 5000, // 재연결 딜레이
            connectHeaders: {
                Authorization: `Bearer ${token}`, // Authorization 헤더 추가
            },
            onConnect: () => {
                console.log("WebSocket 연결 성공");
                setIsConnected(true);

                // 특정 채팅방 구독
                client.subscribe(`/topic/chatRoom/${chatRoomId}`, (message) => {
                    console.log(
                        "서버로부터 수신한 메시지:",
                        JSON.parse(message.body)
                    );
                    const newMessage = JSON.parse(message.body);
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        newMessage,
                    ]);
                });
            },
            onDisconnect: () => {
                console.log("WebSocket 연결 종료");
                setIsConnected(false);
            },
            onStompError: (error) => {
                console.error("STOMP 오류:", error.headers["message"]);
            },
        });

        // STOMP 클라이언트 활성화
        client.activate();
        stompClient.current = client;

        // 컴포넌트 언마운트 시 WebSocket 연결 해제
        return () => {
            if (client.active) {
                client.deactivate();
            }
        };
    }, [chatRoomId, token]);

    const handleSendMessage = async () => {
        if (!inputText.trim()) return;

        try {
            const newMessage = await sendChatMessage({
                chatRoomId,
                senderId,
                content: inputText,
            });

            // 성공적으로 전송된 메시지를 추가
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setInputText(""); // 입력창 초기화
        } catch (error) {
            console.error("메시지 전송 실패:", error);
        }
    };

    // 메시지 전송 (Enter 키로도 가능)
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSendMessage();
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
                    placeholder="메시지를 입력하세요..."
                />
                <button onClick={handleSendMessage}>보내기</button>
            </S.InputContainer>
        </S.Layout>
    );
};

export default ChatPage;
