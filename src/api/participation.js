import { client } from "./api";

export const getParticipationList = async () => {
    console.log("요기서 받아오기 시작");
    try {
        const token = JSON.parse(localStorage.getItem("token"))?.accessToken;
        console.log("받아오기 try 들어와");
        console.log("토큰이요1: ", token);
        const response = await client.get(`/participations`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        });
        console.log("토큰이요: ", token);
        console.log("전체 응답 객체-참여:", response.data); // 전체 응답 객체 출력
        return response.data;
    } catch (err) {
        throw err;
    }
};
