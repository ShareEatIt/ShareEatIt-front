import { useState } from "react";
import { postSharing } from "../../api/sharing";
import BackButton from "../../components/common/BackButton/backButton";
import BottomButton from "../../components/common/BottomButton/bottomButton";
import DropDown from "../../components/common/PostInput/dropDown";
import ImageUploader from "../../components/common/PostInput/imageUploader";

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

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        foodType: "",
        foodName: "",
        expDate: "",
        purchaseDate: "",
        description: "",
        address: "",
        addressDetail: "",
        latitude: "",
        longitude: "",
        kakaoLocationCode: "",
        endAt: "",
    });
    const [imageFiles, setImageFiles] = useState([]); // 이미지 파일 상태 관리

    // 입력 변경 핸들러
    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // 이미지 업로드 핸들러
    const handleImageUpload = (uploadedFiles) => {
        setImageFiles(uploadedFiles); // 이미지 파일 상태 업데이트
        console.log("업로드된 이미지 파일:", uploadedFiles);
    };

    const handleSubmit = async () => {
        try {
            const dataToSend = {
                ...formData,
                isFinished: false, // 추가 필드 기본값 설정
                postType: "INDIVIDUAL", // 기본값 설정
            };
            console.log("전송 데이터:", dataToSend);

            await postSharing(dataToSend, imageFiles); // API 호출
            alert("게시글이 성공적으로 등록되었습니다!");
        } catch (error) {
            alert("게시글 등록에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <>
            <BackButton text={"게시글 작성"} />

            <S.Layout>
                <PostInput
                    text={"제목"}
                    onChange={(value) => handleInputChange("title", value)}
                />
                <DropDown
                    text={"카테고리"}
                    options={categoryList}
                    onChange={(value) => handleInputChange("category", value)}
                />
                <DropDown
                    text={"식료품/완제품"}
                    options={foodState}
                    onChange={(value) => handleInputChange("foodType", value)}
                />
                <PostInput
                    text={"식품명"}
                    onChange={(value) => handleInputChange("foodName", value)}
                />
                <DateInput
                    text={"유통기한"}
                    onChange={(value) => handleInputChange("expDate", value)}
                />
                <DateInput
                    text={"구매일자"}
                    onChange={(value) =>
                        handleInputChange("purchaseDate", value)
                    }
                />
                <ImageUploader
                    text={"이미지(유통기한 이미지 첨부 추천)"}
                    onChange={handleImageUpload}
                />
                <AdditionalInput
                    text={"추가 설명"}
                    onChange={(value) =>
                        handleInputChange("description", value)
                    }
                />
                <TradePlace
                    text={"나눔희망 장소"}
                    onChange={(place) => {
                        handleInputChange("addressSt", place.address);
                        handleInputChange("latitude", place.latitude);
                        handleInputChange("longitude", place.longitude);
                        handleInputChange(
                            "kakaoLocationCode",
                            place.kakaoLocationCode
                        );
                    }}
                />
                <DateInput
                    text={"나눔 종료일자"}
                    onChange={(value) => handleInputChange("endAt", value)}
                />
            </S.Layout>

            <S.ButtonWrapper>
                <BottomButton text={"작성완료"} onClick={handleSubmit} />
            </S.ButtonWrapper>
        </>
    );
};
export default PostSharePage;
