import { useNavigate } from "react-router-dom";
import { S } from "./chatCard.style";
import { getNoticeDetail } from "../../api/notice";

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

const NotiCard = ({ data }) => {
  const { title, message } = data;
  return (
    <S.Layout>
      <S.ChatContentContainer>
        <S.TitleWrapper>{title}</S.TitleWrapper>
        <S.ContentWrapper>{message}</S.ContentWrapper>
      </S.ChatContentContainer>
    </S.Layout>
  );
};

export { ChatCard, NotiCard };
