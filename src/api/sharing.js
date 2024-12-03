import { client } from "./api";
import axios from "axios";

// 나눔글 생성
export const postSharing = async (formData) => {
    try {
        // 전송
        const tokenString = localStorage.getItem("token");
        const token = JSON.parse(tokenString);
        const accessToken = token?.accessToken;
        console.log("토큰 ", accessToken);
        const response = await client.post(`/sharing`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: accessToken,
            },
        });

        console.log("응답 데이터:", response.data);
        return response;
    } catch (err) {
        console.error("Error posting sharing:", err);
        throw err;
    }
};

// 나눔글 조회
/*export const getSharingList = async (postType, latitude, longitude) => {
    console.log("getSharingList 함수 호출됨!!");
    console.log("파라미터:", { postType, latitude, longitude });
    try {
        const response = await client.get(`/sharing`, {
            postType: "ALL",
            latitude: 37.5665,
            longitude: 86.978,
        });
        console.log("API 응답:", response);
        return response;
    } catch (err) {
        throw err;
    }
};*/

//403
/*
export const getSharingList = async (postType, latitude, longitude) => {
    console.log("getSharingList 함수 호출됨!");
    console.log("파라미터:", { postType, latitude, longitude });
    try {
        const tokenString = localStorage.getItem("token");
        console.log("토큰 전체:", tokenString);
        const token = JSON.parse(tokenString); // 문자열을 객체로 변환
        const accessToken = token.accessToken.replace("Bearer ", "");

        console.log("토큰" + accessToken);
        console.log(longitude);
        const response = await client.get(`/sharing/list`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: accessToken,
            },
            params: {
                postType: "ALL",
                latitude: 37.5665,
                longitude: 86.978,
            },
        });

        console.log("나눔글 조회 결과!:", response);
        return response;
    } catch (err) {
        console.error("요청 실패:", err);
    }
};*/

export const getSharingList = async (postType, latitude, longitude) => {
    console.log("요기서 받아오기 시작");
    try {
        const token = JSON.parse(localStorage.getItem("token"))?.accessToken;
        console.log("받아오기 try 들어와");
        console.log("토큰이요1: ", token);
        const response = await client.get(`/sharing/list`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            params: {
                postType: postType,
                latitude: latitude,
                longitude: longitude,
            },
        });
        console.log("토큰이요: ", token);
        console.log("전체 응답 객체:", response); // 전체 응답 객체 출력
        return response;
    } catch (err) {
        throw err;
    }
};

// 나눔글 상세 조회
export const getPostDetail = async (id) => {
    try {
        const response = await client.get(`/sharing/${id}`);
        console.log("위치 값을 확인해 봐");
        console.log(response);
        return response;
    } catch (err) {
        throw err;
    }
};
