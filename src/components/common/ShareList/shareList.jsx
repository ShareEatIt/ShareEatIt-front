import { S } from "./shareList.style";

const ShareList = () => {
    return (
        <S.Layout>
            <S.CardImage />
            <S.CardContent>
                <S.CardTitleWrapper>제목</S.CardTitleWrapper>
                <S.ShareContainer>
                    종료 일자{" "}
                    <S.ShareInfoContainer>2024-08-09</S.ShareInfoContainer>
                </S.ShareContainer>
                <S.ShareContainer>
                    작성자 <S.ShareInfoContainer>이승진</S.ShareInfoContainer>
                </S.ShareContainer>
                <S.ShareContainer>
                    카테고리 <S.ShareInfoContainer>빵</S.ShareInfoContainer>
                </S.ShareContainer>
                <S.ShareTime>5분전</S.ShareTime>
            </S.CardContent>
        </S.Layout>
    );
};
export default ShareList;
