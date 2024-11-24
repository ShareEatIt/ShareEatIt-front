import { client } from "./api";

//신고 생성
export const postReport = async (imgFile, dto) => {
  try {
    const formData = new FormData();
    //이미지 파일 추가
    formData.append("imgFile", imgFile);
    //API 요청
    formData.append(
      "dto",
      new Blob([JSON.stringify(dto)], { type: "application/json" })
    );
    const response = await client.post(`/report`, formData, {
      headers: { "Content=type": "multipart/form-data" },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
