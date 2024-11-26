import { client } from "./api";

// 나눔글 생성
export const postSharing = async (dto, imgList) => {
    try {
        const formData = new FormData();

        if (Array.isArray(imgList) && imgList.length > 0) {
            imgList.forEach((image) => {
                formData.append("imgList", image);
            });
        }

        formData.append(
            "dto",
            new Blob([JSON.stringify(dto)], { type: "application/json" })
        );
        const tokenString = localStorage.getItem("token");
        console.log("토큰 전체:", tokenString);
        const token = JSON.parse(tokenString); // 문자열을 객체로 변환
        const accessToken = token?.accessToken;
        console.log("Sending request to server...");
        console.log("DTO (JSON):", dto);
        console.log("Images:", imgList);
        console.log("토큰:", accessToken);
        const response = await client.post(`/sharing`, formData, {
            headers: {
                Authorization: accessToken,
            },
        });

        return response;
    } catch (err) {
        console.error("Error posting sharing:", err);
        throw err;
    }
};

// 나눔글 조회
export const getSharingList = async (postType, latitude, longitude) => {
    try {
        const response = await client.get(`/sharing`, {
            params: {
                postType, // "ALL", "STORE", "INDIVIDUAL"
                latitude, // 위도
                longitude, // 경도
            },
        });

        return response.data;
    } catch (err) {
        console.error("Error fetching sharing list:", err);
        throw err;
    }
};
