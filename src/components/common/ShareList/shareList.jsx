import { useNavigate } from "react-router-dom";
import { S } from "./shareList.style";
import { isEditable } from "@testing-library/user-event/dist/utils";

const ShareList = ({ sharingList }) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/postdetail/${id}`);
    };

    return (
        <>
            {sharingList.map((item) => (
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
