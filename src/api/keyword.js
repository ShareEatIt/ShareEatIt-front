import { client } from "./api";

//키워드 생성
export const postKeyword = async (keyword) => {
  try {
    const response = await client.post(`/keyword`, { keyword: keyword });
    return response;
  } catch (err) {
    throw err;
  }
};

//사용중인 키워드 리스트 조회
export const getKeywordList = async () => {
  try {
    const response = await client.get(`/keyword/avail`);
    return response;
  } catch (err) {
    throw err;
  }
};

//등록 이력이 있는 키워드 리스트 조회
export const getRegisteredList = async () => {
  try {
    const response = await client.get(`/keyword/all`);
    return response;
  } catch (err) {
    throw err;
  }
};

//키워드 사용 중지
export const patchKeywordList = async (id) => {
  try {
    const response = await client.patch(`/keyword/${id}`);
    return response;
  } catch (err) {
    throw err;
  }
};

//키워드 삭제
export const deleteKeyword = async (id) => {
  try {
    const response = await client.delete(`/keyword/${id}`);
    return response;
  } catch (err) {
    throw err;
  }
};
