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
    {
        id: 3,
        title: "제목 3",
        endDate: "2024-10-15",
        author: "정유진",
        category: "빵",
        timeAgo: "15분 전",
    },
];

const ShareList = () => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/postdetail/${id}`);
    };

    return (
        <>
            {dummyData.map((item) => (
                <S.Layout key={item.id} onClick={() => handleClick(item.id)}>
                    <S.CardImage />
                    <S.CardContent>
                        <S.CardTitleWrapper>{item.title}</S.CardTitleWrapper>
                        <S.ShareContainer>
                            종료 일자{" "}
                            <S.ShareInfoContainer>
                                {item.endDate}
                            </S.ShareInfoContainer>
                        </S.ShareContainer>
                        <S.ShareContainer>
                            작성자{" "}
                            <S.ShareInfoContainer>
                                {item.author}
                            </S.ShareInfoContainer>
                        </S.ShareContainer>
                        <S.ShareContainer>
                            카테고리{" "}
                            <S.ShareInfoContainer>
                                {item.category}
                            </S.ShareInfoContainer>
                        </S.ShareContainer>
                        <S.ShareTime>{item.timeAgo}</S.ShareTime>
                    </S.CardContent>
                </S.Layout>
            ))}
        </>
    );
};
export default ShareList;
