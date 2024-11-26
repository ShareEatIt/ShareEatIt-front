import { S } from "./bottomButton.style";

const BottomButton = ({ text, onClick, type = "button" }) => {
    return (
        <S.Layout type={type} onClick={onClick}>
            <S.TextWrapper>{`${text}`}</S.TextWrapper>
        </S.Layout>
    );
};

export default BottomButton;
