import BackButton from "../../components/common/BackButton/backButton";
import BottomButton from "../../components/common/BottomButton/bottomButton";
import DropDown from "../../components/common/PostInput/dropDown";
import {
    AdditionalInput,
    PostInput,
    DateInput,
    TradePlace,
} from "../../components/common/PostInput/postInput";
import { S } from "./postSharePage.style";

const PostSharePage = () => {
    const categoryList = [
        "빵",
        "음료",
        "간편식",
        "한식",
        "중식",
        "양식",
        "간식",
        "식료품",
        "기타",
    ];

    const foodState = ["식료품", "완제품"];

    return (
        <>
            <BackButton text={"게시글 작성"} />
            <form>
                <S.Layout>
                    <PostInput text={"제목"} />
                    <DropDown text={"카테고리"} options={categoryList} />
                    <DropDown text={"식료품/완제품"} options={foodState} />
                    <PostInput text={"식품명"} />
                    <DateInput text={"유통기한"} />
                    <DateInput text={"구매일자"} />
                    <AdditionalInput text={"추가 설명"} />
                    <TradePlace text={"나눔희망 장소"} />
                    <DateInput text={"나눔 종료일자"} />
                </S.Layout>
            </form>
            <S.ButtonWrapper>
                <BottomButton text={"작성완료"} />
            </S.ButtonWrapper>
        </>
    );
};
export default PostSharePage;
