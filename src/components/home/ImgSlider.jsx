import { useEffect, useState } from "react";
import { S } from "./ImgSlider.style";
import IMG3 from "../../assets/common/img3.png";
import Share from "../../assets/common/share (2).png";
import Eat from "../../assets/common/eat.png";

const ImgSlider = () => {
    const ImgContents = [
        {
            id: 0,
            img: IMG3,
        },
        {
            id: 1,
            img: Share,
        },
        {
            id: 2,
            img: IMG3,
        },
        {
            id: 3,
            img: Eat,
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const slideWidth = 100;

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + ImgContents.length) % ImgContents.length
        );
    };
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % ImgContents.length);
    };

    return (
        <S.Layout>
            <S.PrevArrow onClick={prevSlide}></S.PrevArrow>
            <S.ImgContainer>
                {ImgContents.map((image, index) => (
                    <S.ImgContent
                        key={index}
                        src={image.img}
                        alt={`slide ${index}`}
                        active={index === currentIndex}
                        style={{
                            transform: `translateX(-${
                                currentIndex * slideWidth
                            }%)`,
                            transition: isTransitioning
                                ? "all 0.4s ease-in-out"
                                : "none",
                        }}
                    />
                ))}
            </S.ImgContainer>
            <S.NextArrow onClick={nextSlide}></S.NextArrow>
        </S.Layout>
    );
};

export default ImgSlider;
