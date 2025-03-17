import { client } from "./api";

//로그아웃
export const logout = async () => {
  try {
    //const code = localStorage.getItem("code");
    const response = await client.get(`/logout`);
    console.log("logout success");
    localStorage.removeItem("token");
    return response;
  } catch (err) {
    throw err;
  }
};
