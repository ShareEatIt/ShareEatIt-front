import { Stomp } from "@stomp/stompjs";

let stompClient = null;

export const connectWebSocket = (chatRoomId, token, onMessageReceived) => {
    const socketUrl = "ws://localhost:8080/ws"; // WebSocket 서버 URL

    stompClient = Stomp.client(socketUrl); // STOMP 클라이언트 생성
    stompClient.reconnectDelay = 5000; // 연결 실패 시 재연결 간격 (5초)

    stompClient.connect(
        { Authorization: `Bearer ${token}` }, // 인증 헤더 포함
        () => {
            console.log(`WebSocket 연결 성공: 채팅방 ID ${chatRoomId}`);

            // 특정 채팅방 구독
            stompClient.subscribe(`/sub/chatRoom/${chatRoomId}`, (message) => {
                const parsedMessage = JSON.parse(message.body);
                console.log("메시지 수신:", parsedMessage);

                // 메시지 수신 시 콜백 함수 호출
                if (onMessageReceived) {
                    onMessageReceived(parsedMessage);
                }
            });

            console.log(`구독 완료: /sub/chatRoom/${chatRoomId}`);
        },
        (error) => {
            console.error("WebSocket 연결 실패:", error);
        }
    );

    return stompClient;
};

export const sendMessage = (chatRoomId, message, sender) => {
    if (!stompClient || !stompClient.connected) {
        console.error("WebSocket 연결이 활성화되지 않았습니다.");
        return;
    }

    // 메시지 전송
    stompClient.send(
        `/app/chat/message/${chatRoomId}`, // 메시지 전송 경로
        {}, // 헤더
        JSON.stringify({
            type: "TALK", // 메시지 유형
            chatRoomId: chatRoomId,
            sender: sender, // 발신자
            message: message, // 메시지 내용
        })
    );

    console.log(`메시지 전송: ${message} (채팅방 ID: ${chatRoomId})`);
};
