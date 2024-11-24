import { client } from "./api";

export const logout = async (code) => {
  try {
    const response = await client.get(`/oauth2/authorize`, {
      params: { code: code },
    });
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
