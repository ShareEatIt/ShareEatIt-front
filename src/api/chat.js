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
    try {
        const response = await client.get(`/chatRoom`);
        return response;
    } catch (err) {
        throw err;
    }
};
