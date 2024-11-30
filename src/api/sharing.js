import { client } from "./api";
import axios from "axios";

// 나눔글 생성
export const postSharing = async (dto, imgList) => {
    try {
        const formData = new FormData();

        // 이미지 추가
        if (Array.isArray(imgList) && imgList.length > 0) {
            imgList.forEach((image) => {
                console.log("추가 중인 파일:", image.name);
                formData.append("imgList", image);
            });
        } else {
            console.error("imgList가 비어있습니다.");
        }
        formData.append("dto", JSON.stringify(dto));

        // 디버깅: FormData 내용 출력
        console.log("최종 전송 FormData:");
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }

        // 전송
        const tokenString = localStorage.getItem("token");
        const token = JSON.parse(tokenString);
        const accessToken = token?.accessToken;

        const response = await client.post(`/sharing`, formData, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
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

// 채팅방 조회
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

//http 규정
/*
export const getSharingList = async (postType, latitude, longitude) => {
    console.log("getSharingList 함수 호출됨!");
    console.log("파라미터:", { postType, latitude, longitude });

    try {
        // 로컬 스토리지에서 토큰 가져오기
        const tokenString = localStorage.getItem("token");
        const token = JSON.parse(tokenString);
        const accessToken = token?.accessToken?.replace("Bearer ", ""); // Bearer 제거

        console.log("토큰:", accessToken);

        // GET 요청
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/sharing`,
            {
                method: "GET", // GET 요청
                headers: {
                    "Content-Type": "application/json",
                    Authorization: accessToken, // 인증 헤더 추가
                },
                body: JSON.stringify({
                    postType: "ALL",
                    latitude: 37.5665,
                    longitude: 126.978,
                }),
            }
        );

        // 응답 처리
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("나눔글 조회 결과:", data);
        return data;
    } catch (err) {
        console.error("요청 실패:", err);
        throw err;
    }
};
*/

// 나눔글 상세 조회
export const getPostDetail = async (id) => {
    try {
        const res = await client.get(`/sharing/${id}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
