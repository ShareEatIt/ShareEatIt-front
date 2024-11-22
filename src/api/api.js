import axios from "axios";
import { refreshToken } from "./refresh";

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

const token = JSON.parse(localStorage.getItem("token"));
const accessToken = token?.accessToken || null;
const auth = accessToken ? `${token.accessToken}` : null;

console.log("Auth value in fetchToken:", auth);
console.log("token", token);
console.log("accessToken", accessToken);

// Axios 인스턴스 생성
const client = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`, // API 기본 URL
  headers: {
    Authorization: auth,
    "Content-Type": "application/json",
  },
  withCredentials: true, // 쿠키 사용을 위한 설정
});

// 요청 인터셉터
client.interceptors.request.use(
  (response) => {
    console.log("Auth value in fetchToken:", auth);
    if (token && token.accessToken) {
      response.headers.Authorization = `${token.accessToken}`;
    }
    return response;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
client.interceptors.response.use(
  (response) => response, // 정상 응답 처리
  async (error) => {
    const originalRequest = error.config;
    const { status, data } = error.response || {};

    // 토큰 만료 오류 처리
    if (
      status === 401 &&
      data.error === "Token Expired" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // 무한 반복 방지 플래그
      try {
        // 로컬 스토리지에서 리프레시 토큰 가져오기
        await refreshToken();
        const token = JSON.parse(localStorage.getItem("token"));
        if (token && token.refreshToken) {
          const response = await axios.post(
            `/auth/refresh`,
            { refreshToken: token.refreshToken },
            {
              headers: {
                Authorization: auth,
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );

          // 새 토큰 저장
          const newToken = response.data;
          localStorage.setItem("token", JSON.stringify(newToken));

          // 갱신된 토큰으로 요청 헤더 설정
          client.defaults.headers.Authorization = `${newToken.accessToken}`;
          originalRequest.headers.Authorization = `${newToken.accessToken}`;

          // 원래 요청 재시도
          return client(originalRequest);
        } else {
          throw new Error("Refresh token not found");
        }
      } catch (refreshError) {
        // 리프레시 실패 시 로그인 페이지로 리디렉션
        localStorage.removeItem("token");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
export { client };
