import { client } from "./api";
import axios from "axios";

// 나눔글 생성
export const postSharing = async (dto, imgList) => {
    try {
        const formData = new FormData();

        if (Array.isArray(imgList) && imgList.length > 0) {
            imgList.forEach((image) => {
                formData.append("imgList", image); // 동일한 "imgList" 키로 여러 개 추가
            });
        } else {
            console.error("imgList가 비어있거나 배열이 아닙니다.");
        }

        formData.append(
            "dto",
            new Blob([JSON.stringify(dto)], { type: "application/json" }) // JSON을 Blob 형태로 추가
        );
        //formData.append("dto", JSON.stringify(dto));

        // 디버깅: FormData 내용 출력
        console.log("최종 전송 FormData:");
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }

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
        console.log(response);
        return response;
    } catch (err) {
        throw err;
    }
};
