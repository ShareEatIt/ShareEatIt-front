import { useState } from "react";
import { postSharing } from "../../api/sharing";
import BackButton from "../../components/common/BackButton/backButton";
import { BottomButtonPost } from "../../components/common/BottomButton/bottomButton";
import DropDown from "../../components/common/PostInput/dropDown";
import ImageUploader from "../../components/common/PostInput/imageUploader";
import { useNavigate } from "react-router-dom";
import {
    AdditionalInput,
    PostInput,
    TradePlace,
    CalendarInput,
} from "../../components/common/PostInput/postInput";
import { S } from "./postSharePage.style";
import EnumButton from "../../components/common/PostInput/enumButton";

const PostSharePage = () => {
    const navigate = useNavigate();
    const categoryMap = {
        빵: "BAKERY",
        음료: "BEVERAGE",
        간편식: "CONVENIENCE_FOOD",
        한식: "KOREAN",
        중식: "CHINESE",
        양식: "WESTERN",
        간식: "SNACK",
        식료품: "GROCERIES",
        ETC: "ETC",
    };
    const categoryList = Object.keys(categoryMap);
    const foodState = ["식료품", "완제품"];

    const [formData, setFormData] = useState({
        imgList: [],
        title: "",
        category: "",

        foodName: "",
        expDate: "",
        purchaseDate: "",
        description: "",
        addressDetail: "",
        latitude: "",
        longitude: "",
        kakaoLocationCode: "",
        endAt: "",
    });
    const [imageUrls, setImageUrls] = useState([]);

    // 입력 변경 핸들러
    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // 이미지 업로드 핸들러
    const handleImageUpload = (uploadedFiles) => {
        console.log("handleImageUpload 호출됨:", uploadedFiles);
        setFormData((prev) => ({
            ...prev,
            imgList: uploadedFiles,
        }));
    };

    const handleSubmit = async () => {
        console.log("전송될 이미지:", imageUrls);
        try {
            const dataToSend = new FormData();

            if (formData.imgList && formData.imgList.length > 0) {
                formData.imgList.forEach((file) => {
                    dataToSend.append("imgList", file);
                });
            }

            const dto = {
                title: formData.title,
                category: formData.category,
                foodName: formData.foodName,
                expDate: formData.expDate,
                purchaseDate: formData.purchaseDate,
                description: formData.description,
                addressSt: formData.addressSt,
                addressDetail: formData.addressDetail,
                latitude: formData.latitude,
                longitude: formData.longitude,
                kakaoLocationCode: formData.kakaoLocationCode,
                endAt: formData.endAt,
                isFinished: false, // 추가 필드
                postType: "INDIVIDUAL", // 기본값
            };
            console.log("dto: ", dto);

            dataToSend.append(
                "dto",
                new Blob([JSON.stringify(dto)], { type: "application/json" })
            );
            console.log("FormData 내용:");
            for (let [key, value] of dataToSend.entries()) {
                console.log(`${key}:`, value);
            }

            console.log("전송 데이터:", dataToSend);
            await postSharing(dataToSend); // API 호출
            alert("게시글이 성공적으로 등록되었습니다!");
            navigate("/");
        } catch (error) {
            alert("게시글 등록에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <S.AllContiner>
            <BackButton text={"게시글 작성"} />

            <S.Layout>
                <PostInput
                    text={"제목"}
                    onChange={(value) => handleInputChange("title", value)}
                />
                <EnumButton
                    text={"카테고리"}
                    options={categoryList}
                    onChange={(value) =>
                        handleInputChange("category", categoryMap[value])
                    }
                />
                <EnumButton
                    text={"식료품/완제품"}
                    options={foodState}
                    onChange={(value) =>
                        handleInputChange("foodtype", categoryMap[value])
                    }
                />
                <DropDown text={"식료품/완제품"} options={foodState} />
                <PostInput
                    text={"식품명"}
                    onChange={(value) => handleInputChange("foodName", value)}
                />

                <CalendarInput
                    text={"유통기한"}
                    onChange={(value) => handleInputChange("expDate", value)}
                />

                <CalendarInput
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

                <CalendarInput
                    text={"나눔 종료일자"}
                    onChange={(value) => handleInputChange("endAt", value)}
                />
            </S.Layout>

            <S.ButtonWrapper>
                <BottomButtonPost text={"작성완료"} onClick={handleSubmit} />
            </S.ButtonWrapper>
        </S.AllContiner>
    );
};
export default PostSharePage;
