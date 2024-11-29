import { useEffect, useState } from "react";
import { Stomp } from "@stomp/stompjs";

const useChatWebSocket = (roomId, accessToken) => {
    const [stompClient, setStompClient] = useState(null); // STOMP 클라이언트 상태
    const [chatHistory, setChatHistory] = useState([]); // 채팅 메시지 기록

    useEffect(() => {
        const client = new Stomp.client({
            brokerURL: "ws://localhost:8080/ws", // WebSocket 서버 URL
            connectHeaders: {
                Authorization: `Bearer ${accessToken}`, // 인증 헤더
            },
            debug: (str) => console.log("STOMP Debug:", str), // 디버깅 로그
            reconnectDelay: 5000, // 연결 실패 시 5초 간격으로 재시도
        });

        client.onConnect = () => {
            console.log("WebSocket 연결");

            // 특정 채팅방 구독
            client.subscribe(`/topic/chatRoom/${chatRoomId}`, (message) => {
                try {
                    const newChat = JSON.parse(message.body); // 메시지 파싱
                    console.log("수신한 메시지:", newChat);
                    setChatHistory((prev) => [...prev, newChat]); // 채팅 기록 업데이트
                } catch (error) {
                    console.error("구독 에러:", error);
                }
            });
            console.log(`구독 완료: /topic/chatRoom/${chatRoomId}`);
        };

        client.onStompError = (frame) => {
            console.error("STOMP 오류:", frame.headers["message"]); // STOMP 프로토콜 오류 처리
        };

        client.activate(); // WebSocket 연결 활성화
        setStompClient(client);

        // 컴포넌트 언마운트 시 WebSocket 연결 해제
        return () => {
            client.deactivate(); // WebSocket 연결 비활성화
            console.log("WebSocket 연결 해제");
        };
    }, [accessToken, roomId]); // roomId와 accessToken이 변경될 때마다 WebSocket 재연결

    return { stompClient, chatHistory };
};

export default useChatWebSocket;
