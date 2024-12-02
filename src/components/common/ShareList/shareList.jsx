import { useNavigate } from "react-router-dom";
import { S } from "./shareList.style";
import { isEditable } from "@testing-library/user-event/dist/utils";

const categoryMap = {
    BAKERY: "빵",
    BEVERAGE: "음료",
    CONVENIENCE_FOOD: "간편식",
    KOREAN: "한식",
    CHINESE: "중식",
    WESTERN: "양식",
    SNACK: "간식",
    GROCERIES: "식료품",
    ETC: "기타",
};

const ShareList = ({ sharingList, onClick }) => {
    const navigate = useNavigate();

    return (
        <>
            {[...sharingList].reverse().map((item) => (
                <S.Layout key={item.id} onClick={() => onClick(item.id)}>
                    <S.CardImage src={item.img} />
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
                                {categoryMap[item.category] || item.category}
                                {/* 한글 변환, 변환 실패 시 원래 값 표시 */}
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
