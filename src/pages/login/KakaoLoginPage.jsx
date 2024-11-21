import { ReactComponent as Kakao } from "../../../src/assets/login/kakao.svg";
import { ReactComponent as Logo } from "../../../src/assets/common/logo.svg";
import { M, S } from "./login";

export const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&prompt=login`;
const LoginPage = () => {
  console.log("login");
  return (
    <M.Layout>
      <Logo />
      <a href={KAKAO_AUTH_URI}>
        <Kakao />
      </a>
    </M.Layout>
  );
};

export default LoginPage;
