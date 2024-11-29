import { ReactComponent as Kakao } from "../../../src/assets/login/kakao.svg";
import { ReactComponent as Logo } from "../../../src/assets/common/logo.svg";
import { M, S } from "./login";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&prompt=login`;
const LoginPage = () => {
  const navigate = useNavigate();

  const handleKakaoLogin = () => {
    const token = localStorage.getItem("token"); // 또는 sessionStorage.getItem("token")
    if (token) {
      navigate("/"); // 토큰이 존재하면 홈 화면으로 이동
    } else {
      window.location.href = KAKAO_AUTH_URI; // 토큰이 없으면 카카오 로그인 페이지로 이동
    }
  };

  return (
    <M.Layout>
      <Logo />
      <button
        onClick={handleKakaoLogin}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <Kakao />
      </button>
    </M.Layout>
  );
};

export default LoginPage;
