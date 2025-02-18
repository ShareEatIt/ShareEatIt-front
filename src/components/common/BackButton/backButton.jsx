//화면 상단에 있는 뒤로가기 버튼과 상단에 글자 있을 경우 그것까지 만들기
import { useNavigate } from "react-router-dom";
import { S } from "./backButton.style";
import { ReactComponent as Arrow } from "../../../assets/common/backarrow.svg";

const BackButton = ({ text }) => {
  const navigate = useNavigate();
  return (
    <S.Layout>
      <Arrow onClick={() => navigate(-1)} />
      <S.TextWrapper>{`${text}`}</S.TextWrapper>
      <S.RightBox />
    </S.Layout>
  );
};

export default BackButton;
