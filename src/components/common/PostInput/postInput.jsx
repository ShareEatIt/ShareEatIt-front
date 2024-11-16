import { S } from "./postInput.style";

const PostInput = ({ text }) => {
    return (
        <S.Layout>
            <S.TitleWrapper>{`${text}`}</S.TitleWrapper>
            <S.InputWrapper />
        </S.Layout>
    );
};
export default PostInput;
