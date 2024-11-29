import { client } from "./api";

//로그아웃
export const logout = async () => {
  try {
    //const code = localStorage.getItem("code");
    const response = await client.get(`/auth/logout`, {
      //params: { code: code },
    });
    console.log("logout success");
    //localStorage.removeItem("code");
    localStorage.removeItem("token");
    return response;
  } catch (err) {
    throw err;
  }
};
