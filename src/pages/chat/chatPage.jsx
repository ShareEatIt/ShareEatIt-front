import React, { useEffect, useState, useRef } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import { useNavigate, useParams } from "react-router-dom";
import { S } from "./chatPage.style";
import BackButton from "../../components/common/BackButton/backButton";

const dummyMessages = [
    { id: 1, user: "이승진", text: "안녕하세요!", time: "10:30" },
    { id: 2, user: "이가은", text: "반갑습니다!", time: "10:32" },
    {
        id: 3,
        user: "이가은",
        text: "글자가 많이 들어가는 경우에는 어떻게 되어야 합니까!",
        time: "10:32",
    },
];

const ChatPage = () => {
    const [messages, setMessages] = useState([]); // 채팅 메시지 상태
    const [inputText, setInputText] = useState(""); // 입력 메시지 상태
    const [isConnected, setIsConnected] = useState(false); // 연결 상태
    const stompClient = useRef(null); // STOMP 클라이언트 인스턴스 관리
    const serverUrl = "http://54.180.228.54:8080/ws"; // WebSocket 서버 URL
    const token = JSON.parse(localStorage.getItem("token"))?.accessToken; // 토큰 가져오기

    // WebSocket 연결 설정
    useEffect(() => {
        console.log("WebSocket 연결 시도...");

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
                client.subscribe(`/topic/chatRoom/3`, (message) => {
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
    }, [serverUrl, token]);

    const sendMessage = () => {
        if (
            stompClient.current &&
            stompClient.current.connected &&
            inputText.trim()
        ) {
            const chatMessage = {
                chatRoomId: 3, // 채팅방 ID
                user: "나", // 사용자 정보
                text: inputText, // 입력한 메시지
                time: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
            };

            console.log("보내는 메시지:", chatMessage);

            stompClient.current.publish({
                destination: "/app/chat/message", // 메시지 전송 경로
                body: JSON.stringify(chatMessage),
            });

            setInputText("");
        }
    };

    return (
        <span>웹소켓 연결 테스트 페이지</span>
        /*<S.Layout>
            <BackButton text={"이가은"} />
            <S.MessageContainer>
                {messages.map((msg) => (
                    <S.MessageWrapper>
                        <S.UserProfileImage />
                        <S.MessageContentContainer
                            key={msg.id}
                            isOwn={msg.user === "나"}
                        >
                            <S.MessageText>{msg.text}</S.MessageText>
                        </S.MessageContentContainer>
                    </S.MessageWrapper>
                ))}
            </S.MessageContainer>
        </S.Layout>*/
    );
};

export default ChatPage;
