import { useNavigate } from "react-router-dom";
import { S } from "./chatCard.style";

const dummyData = [
    {
        id: 1,
        username: "이가은",
        lastchat: "안녕하세요!",
    },
    {
        id: 2,
        username: "이여진",
        lastchat: "안녕하세요 반가워요!",
    },
];

const ChatCard = () => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/chat/${id}`);
    };
    return (
        <>
            {dummyData.map((item) => (
                <S.Layout key={item.id} onClick={() => handleClick(item.id)}>
                    <S.ProfileImage />
                    <S.ChatContentContainer>
                        <S.TitleWrapper>{item.username}</S.TitleWrapper>
                        <S.ContentWrapper>{item.lastchat}</S.ContentWrapper>
                    </S.ChatContentContainer>
                </S.Layout>
            ))}
        </>
    );
};

const NotiCard = () => {
    return (
        <S.Layout>
            <S.ChatContentContainer>
                <S.TitleWrapper>물건 등록 알림</S.TitleWrapper>
                <S.ContentWrapper>
                    근처에서 이승진님이 좋아하실 물건이 등록되었어요!~
                </S.ContentWrapper>
            </S.ChatContentContainer>
        </S.Layout>
    );
};

export { ChatCard, NotiCard };
