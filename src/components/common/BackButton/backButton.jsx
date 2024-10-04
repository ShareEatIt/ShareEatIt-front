//화면 상단에 있는 뒤로가기 버튼과 상단에 글자 있을 경우 그것까지 만들기
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { S } from "./backButton.style";

const BackButton = ({ text }) => {
    const navigate = useNavigate();
    return (
        <S.Layout>
            <S.BackButtonIcon onClick={() => navigate(-1)} />
            <S.TextWrapper>{`${text}`}</S.TextWrapper>
            <S.RightBox />
        </S.Layout>
    );
};

export default BackButton;
