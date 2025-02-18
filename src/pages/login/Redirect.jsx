import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../../api/api";

const OAuthRedirectPage = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const fetchAccessToken = async (code) => {
    try {
      const response = await api.post(`/oauth2/access-token`, code, {
        withCredentials: true,
      });

      console.log("Response from server:", response);

      // 헤더에서 accessToken, refreshToken 가져오기
      const accessToken = response.headers["authorization"];
      const refreshToken = response.headers["rt-token"];
      const isNewMember = response.data.data; // 본문에서 isNewMember 가져오기

      if (accessToken && refreshToken) {
        // 로컬스토리지에 토큰 저장
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        console.log("Tokens saved:", { accessToken, refreshToken });
      } else {
        console.error("Tokens are missing in the response.");
        throw new Error("Missing tokens");
      }

      // 새로운 회원이면 /my 페이지로 이동, 기존 회원이면 홈으로 이동
      if (isNewMember) {
        navigate("/my", { state: { isNewMember } }, { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("Error fetching OAuth tokens:", error);
      navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    if (code) {
      fetchAccessToken(code);
    } else {
      console.error("OAuth code is missing.");
      navigate("/login", { replace: true });
    }
  }, [code]);

  return <div>Redirecting...</div>;
};

export default OAuthRedirectPage;
