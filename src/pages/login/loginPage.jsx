import { ReactComponent as Kakao } from "../../../src/assets/login/kakao.svg";
import { ReactComponent as Logo } from "../../../src/assets/common/logo.svg";
import { M, S } from "./login";

const LoginPage = () => {
  return (
    <M.Layout>
      <Logo />
      <Kakao />
    </M.Layout>
  );
};

export default LoginPage;
