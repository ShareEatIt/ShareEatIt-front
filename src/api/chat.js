import { client } from "./api";

// 채팅방 생성
export const createParticipation = async (sharingPostId) => {
    try {
        const response = await client.post("/participations", {
            sharingPostId,
        });

        return response.data; // API 응답 데이터 반환
    } catch (error) {
        console.error("채팅방 생성 실패:", error);
        throw error; // 에러 전파
    }
};

// 채팅방 조회
export const getChatList = async () => {
    console.log("요기");
    try {
        const token = JSON.parse(localStorage.getItem("token"))?.accessToken;
        console.log("들어와");
        const response = await client.get(`/chatRoom`, {
            headers: {
                Authorization: `Bearer ${token}`, // Bearer 토큰을 Authorization 헤더에 추가
            },
        });
        console.log("전체 응답 객체:", response); // 전체 응답 객체 출력
        console.log("응답 데이터:", response.data.data.chatRoomList);

        return response.data.data.chatRoomList;
    } catch (err) {
        throw err;
    }
};

export const getChatHistory = async (chatRoomId) => {
    console.log("채팅 내역 불러오기");

    const token = JSON.parse(localStorage.getItem("token"))?.accessToken;
    console.log("토큰: ", token);
    try {
        const response = await client.get(`/chat/message/${chatRoomId}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Bearer 토큰을 Authorization 헤더에 추가
            },
        });
        console.log("채팅 내역 API 응답:", response.data);
        return response.data.data.chatList || [];
    } catch (err) {
        throw err;
    }
};

export const sendChatMessage = async ({ chatRoomId, senderId, content }) => {
    const accessToken = JSON.parse(localStorage.getItem("token"))?.accessToken;
    if (!accessToken) throw new Error("Access token is missing");
    try {
        console.log({
            type: "TALK",
            chatRoomId: chatRoomId.toString(),
            senderId: senderId.toString(),
            content,
        });

        const response = await client.post(`/app/chat/message/${chatRoomId}`, {
            type: "TALK",
            chatRoomId: chatRoomId.toString(),
            senderId: senderId.toString(),
            content,
        });
        console.log("메시지 전송 성공:", response.data);
        return response.data;
    } catch (error) {
        console.error("메시지 전송 실패:", error);
        throw error;
    }
};

// 상대방 정보 호출
export const getOtherInfo = async (memberId) => {
    console.log("상대정보 불러오기");

    const token = JSON.parse(localStorage.getItem("token"))?.accessToken;
    console.log("토큰: ", token);
    try {
        const response = await client.get(`/members/${memberId}`);
        console.log("채팅 상대 정보 API 응답:", response.data);
        return response.data || [];
    } catch (err) {
        throw err;
    }
};
