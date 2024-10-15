import { S } from "./chatCard.style";

const ChatCard = () => {
    return (
        <S.Layout>
            <S.ProfileImage />
            <S.ChatContentContainer>
                <S.UserNameWrapper>이가은</S.UserNameWrapper>
                <S.ChatWrapper>어쩌구~</S.ChatWrapper>
            </S.ChatContentContainer>
        </S.Layout>
    );
};

export default ChatCard;
