import { client } from "./api";

// 채팅방 생성
export const postChatRoom = async () => {
    try {
        const response = await client.post(`/chatRoom`);
        return response;
    } catch (err) {
        throw err;
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
