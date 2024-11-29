import { api } from "./api";

export const DOMAIN = process.env.REACT_APP_BASE_URL;
//export const REFRESH_TOKEN_URL = `${DOMAIN}/auth/refresh`;

export const refreshToken = async () => {
  try {
    const response = await api.post(`/auth/refresh`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newToken = {
      refreshToken: response.data.Token,
      isNewMember: response.data.isNewMember,
    };
    console.log(newToken);
    localStorage.setItem("token", JSON.stringify(newToken));
    console.log("새 토큰 저장 완료");
  } catch (error) {
    console.error("Failed to refresh token:", error);
  }
};
