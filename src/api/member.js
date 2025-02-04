import { client } from "./api";

//멤버 수정페이지 정보조회
export const getMemberInfo = async () => {
    try {
        const response = await client.get(`/members`);
        console.log("멤버 정보: ", response);
        return response;
    } catch (err) {
        throw err;
    }
};

//멤버 설정페이지 스티커 개수 등 정보조회
export const getMemberSticker = async () => {
    try {
        const response = await client.get(`/members/stickers`);
        return response;
    } catch (err) {
        throw err;
    }
};

//회원 나눔 카테고리별 현황 조회
export const getMemberPostStatus = async () => {
    try {
        const response = await client.get(`/members/sharing/category`);
        return response;
    } catch (err) {
        throw err;
    }
};

//멤버 키워드 사용여부 설정 변경
export const patchIsKeywordAvail = async (isKeywordAvail) => {
    try {
        const response = await client.patch(`/members/avail/keyword`, null, {
            params: {
                keyword: isKeywordAvail,
            },
        });

        return response;
    } catch (err) {
        throw err;
    }
};

//멤버 키워드 사용여부 설정 변경
export const patchIsNoticeAvail = async (isNoticeAvail) => {
    try {
        const response = await client.patch(`/members/avail/notice`, null, {
            params: {
                notice: isNoticeAvail,
            },
        });
        return response;
    } catch (err) {
        throw err;
    }
};

// 유저 정보 수정
export const putMemberInfo = async (formData) => {
    try {
        // FormData 객체 생성
        const data = new FormData();

        // 이미지 파일이 존재하면 추가
        if (formData.imgFile) {
            data.append("imgFile", formData.imgFile);
        }
        console.log(formData.imgFile);
        // dto 객체 생성 및 JSON 문자열로 변환 후 추가
        const dto = {
            profileImg: formData.profileImg,
            nickname: formData.nickname,
            latitude: formData.latitude,
            longitude: formData.longitude,
            addressSt: formData.addressSt,
            addressDetail: formData.addressDetail,
            provider: formData.provider,
        };
        console.log(formData.profileImg);
        data.append(
            "dto",
            new Blob([JSON.stringify(dto)], { type: "application/json" })
        );
        console.log("dto:", dto);
        const imgFile = data.get("imgFile");
        console.log("imgFile:", imgFile);

        // API 요청
        const response = await client.put(`/members`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return response;
    } catch (err) {
        console.error("Error in putMemberInfo:", err.response?.data || err);
        throw err;
    }
};

//멤버탈퇴
export const deleteMember = async () => {
    try {
        const response = await client.delete(`/member`);
        return response;
    } catch (err) {
        throw err;
    }
};
