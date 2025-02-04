import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostDetail } from "../../../api/sharing";

import { S } from "./imageContainer .style";

const ImageContainer = () => {
    const { id } = useParams();
    const [images, setImages] = useState([]); // 이미지를 저장할 상태
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await getPostDetail(id); // ID로 나눔글 상세 조회
                console.log("불러온 데이터2:", response);

                // 이미지 리스트 설정
                if (response?.data?.data?.imgList) {
                    setImages(response.data.data.imgList);
                }
            } catch (error) {
                console.error("이미지를 불러오지 못했습니다:", error);
            }
        };

        fetchImages();
    }, [id]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <S.Layout>
            <S.SliderButton className="left" onClick={handlePrev}>
                ◀
            </S.SliderButton>
            <S.Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
            />
            <S.SliderButton className="right" onClick={handleNext}>
                ▶
            </S.SliderButton>
        </S.Layout>
    );
};

export default ImageContainer;
