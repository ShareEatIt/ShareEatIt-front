import { client } from "./api";

//멤버 수정페이지 정보조회
export const getMemberInfo = async () => {
  try {
    const response = await client.get(`/members`);
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
    const response = await client.patch(`/members/avail/keyword`, {
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
    const response = await client.patch(`/members/avail/notice`, {
      params: {
        notice: isNoticeAvail,
      },
    });
    return response;
  } catch (err) {
    throw err;
  }
};

//멤버 정보수정
export const putMemberInfo = async () => {
  try {
    const response = await client.put(`/members`);
    return response;
  } catch (err) {
    throw err;
  }
};
// 유저 정보 수정
export const patchUserInfo = async (userData) => {
  try {
    const response = await client.patch(`/users`, userData, {
      headers: { "Content-type": "multipart/form-data" },
    });
    return response;
  } catch (err) {
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
