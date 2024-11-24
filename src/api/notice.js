import { client } from "./api";

//알림 목록 조회
export const getNotice = async () => {
  try {
    const response = await client.get("/notice");
    return response;
  } catch (err) {
    throw err;
  }
};

//알림 세부조회
export const getNoticeDetail = async (id) => {
  try {
    const response = await client.get(`/notice/${id}`);
    return response;
  } catch (err) {
    throw err;
  }
};
