import { client } from "./api";

//신고 생성
export default postReport = async () => {
  try {
    const response = await client.post(`/report`);
  } catch (err) {
    console.error(err);
  }
};
