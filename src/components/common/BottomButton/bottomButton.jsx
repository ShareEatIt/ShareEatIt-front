import { S } from "./bottomButton.style";

export const BottomButton = ({ text, onClick, type = "button" }) => {
    return (
        <S.Layout type={type} onClick={onClick}>
            <S.TextWrapper>{`${text}`}</S.TextWrapper>
        </S.Layout>
    );
};

export const BottomButtonPost = ({ text, onClick, type = "button" }) => {
    return (
        <S.ButtonContainer type={type} onClick={onClick}>
            <S.TextWrapper>{`${text}`}</S.TextWrapper>
        </S.ButtonContainer>
    );
};
