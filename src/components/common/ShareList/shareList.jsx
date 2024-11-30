import { useNavigate } from "react-router-dom";
import { S } from "./shareList.style";
import { isEditable } from "@testing-library/user-event/dist/utils";

const dummyData = [
    {
        id: 1,
        title: "제목 1",
        endDate: "2024-10-15",
        author: "이승진",
        category: "빵",
        timeAgo: "5분 전",
    },
    {
        id: 2,
        title: "제목 2",
        endDate: "2024-10-15",
        author: "이가은",
        category: "과자",
        timeAgo: "10분 전",
    },
];

const ShareList = ({ sharingList, onClick }) => {
    const navigate = useNavigate();

    return (
        <>
            {sharingList.map((item) => (
                <S.Layout key={item.id} onClick={() => onClick(item.id)}>
                    <S.CardImage />
                    <S.CardContent>
                        <S.CardTitleWrapper>{item.title}</S.CardTitleWrapper>
                        <S.ShareContainer>
                            종료 일자{" "}
                            <S.ShareInfoContainer>
                                {item.endAt}
                            </S.ShareInfoContainer>
                        </S.ShareContainer>
                        <S.ShareContainer>
                            작성자{" "}
                            <S.ShareInfoContainer>
                                {item.nickname}
                            </S.ShareInfoContainer>
                        </S.ShareContainer>
                        <S.ShareContainer>
                            카테고리{" "}
                            <S.ShareInfoContainer>
                                {item.category}
                            </S.ShareInfoContainer>
                        </S.ShareContainer>
                        <S.ShareTime>{item.ago}</S.ShareTime>
                    </S.CardContent>
                </S.Layout>
            ))}
        </>
    );
};
export default ShareList;
