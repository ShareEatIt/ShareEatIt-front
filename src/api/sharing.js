import { client } from "./api";

// 나눔글 생성
export const postSharing = async (dto, imglist, accessToken) => {
    try {
        const formData = new FormData();

        if (Array.isArray(imglist) && imglist.length > 0) {
            imglist.forEach((image) => {
                formData.append("imglist", image);
            });
        }

        formData.append(
            "dto",
            new Blob([JSON.stringify(dto)], { type: "application/json" })
        );
        const accessToken = localStorage.getItem("token");
        console.log("Sending request to server...");
        console.log("DTO (JSON):", dto);
        console.log("Images:", imglist);
        console.log("토큰:", accessToken);
        const response = await client.post(`/sharing`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
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
        const response = await client.get(`/sharing/list`, {
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
