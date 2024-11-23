import { client } from "./api";

// 나눔글 생성
export const postSharing = async (dto, imglist) => {
    try {
        const formData = new FormData();

        if (imglist && imglist.length > 0) {
            imglist.forEach((image, index) => {
                formData.append("imglist", image);
            });
        }

        formData.append("dto", JSON.stringify(dto));

        const response = await client.post(`/sharing`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
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
