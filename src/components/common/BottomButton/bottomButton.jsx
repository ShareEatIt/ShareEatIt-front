import { S } from "./bottomButton.style";

const BottomButton = ({ text }) => {
    return (
        <S.Layout>
            <S.TextWrapper>{`${text}`}</S.TextWrapper>
        </S.Layout>
    );
};

export default BottomButton;
