import { ReactComponent as Kakao } from "../../../src/assets/login/kakao.svg";
import { ReactComponent as Naver } from "../../../src/assets/login/naver.svg";
import { ReactComponent as Google } from "../../../src/assets/login/google.svg";
import { ReactComponent as Logo } from "../../../src/assets/common/logo.svg";
import { ReactComponent as LoginBar } from "../../../src/assets/login/loginbar.svg";
import { M, S } from "./login";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export const KAKAO_AUTH_URI = `${process.env.REACT_APP_BASE_URL_LOGIN}/oauth2/authorization/kakao`;
//`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&prompt=login`;
const LoginPage = () => {
  const navigate = useNavigate();
  // 비밀번호 시각화 토글 버튼
  const [showPW, setShowPW] = useState(false);
  const togglePW = () => {
    setShowPW((prev) => !prev);
  };
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URI;
  };

  const handleGoogleLogin = () => {
    const token = localStorage.getItem("token"); // 또는 sessionStorage.getItem("token")
    if (token) {
      navigate("/"); // 토큰이 존재하면 홈 화면으로 이동
    } else {
      window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
        &redirect_uri=${process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI}&response_type=code&scope=email profile`; // 토큰이 없으면 구글 로그인 페이지로 이동
    }
  };

  return (
    <M.Layout>
      <M.LogoWrapper>
        <Logo />
      </M.LogoWrapper>
      <M.Input placeholder="아이디"></M.Input>
      <M.PWWrapper>
        <M.Input
          type={showPW ? "text" : "password"}
          placeholder="비밀번호"
        ></M.Input>
        <M.CheckBox onClick={togglePW}>
          {showPW ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
        </M.CheckBox>
      </M.PWWrapper>
      <M.LoginBtn>로그인</M.LoginBtn>
      <M.SignupText>
        아직 회원이 아니신가요?{" "}
        <M.SignupTextYellow>회원가입</M.SignupTextYellow>
      </M.SignupText>
      <LoginBar />
      <M.IconContainer>
        <Google onClick={handleGoogleLogin} />
        <Kakao
          onClick={handleKakaoLogin}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        />
        <Naver />
      </M.IconContainer>
    </M.Layout>
  );
};

export default LoginPage;
