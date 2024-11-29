import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../../api/api";

const OAuthRedirectPage = () => {
  console.log("Oauth");
  const code = new URL(window.location.href).searchParams.get("code");
  localStorage.setItem("code", code);
  const navigate = useNavigate();
  //const url = process.env.REACT_APP_BASE_URL;
  const readAccessTokenKakao = async () => {
    try {
      console.log("Received OAuth code:", code);

      const fetchToken = async (code) => {
        try {
          const response = await api.get(`/oauth2/authorize`, {
            params: { code },
          });
          console.log("Response from server:", response);

          const token = {
            accessToken: response.data.data.accessToken,
            refreshToken: response.data.data.refreshToken,
            isNewMember: response.data.data.isNewMember,
          };

          // 로컬스토리지에 토큰 저장
          localStorage.setItem("token", JSON.stringify(token));
          console.log("Token saved:", token);

          return token;
        } catch (error) {
          localStorage.removeItem("token");
          console.error("Failed to fetch token:", error);
          throw error;
        }
      };

      const token = await fetchToken(code);
      if (token.isNewMember) {
        navigate(
          "/my",
          { state: { isNewMember: token.isNewMember } },
          { replace: true }
        );
      } else {
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("Error in readAccessTokenKakao:", error);
      navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    readAccessTokenKakao();
  }, []);

  return <div>Redirecting...</div>;
};

export default OAuthRedirectPage;
