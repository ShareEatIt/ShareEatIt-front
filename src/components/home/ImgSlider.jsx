import { useEffect, useState } from "react";
import { S } from "./ImgSlider.style";

const ImgSlider = () => {
    const ImgContents = [
        {
            id: 0,
            img: "https://www.google.com/imgres?q=%EA%B5%AC%EA%B8%80%20%EC%9D%B4%EB%AF%B8%EC%A7%80&imgurl=http%3A%2F%2Fi.namu.wiki%2Fi%2Ffq05bkrHAGtpfu94yfLyK-MCC2vNlhQJrXI_o4PpWQnZPzvjkA7Lgw_q2zQudNF9DCDG1uH9byc2lbS0Kgte1w.svg&imgrefurl=https%3A%2F%2Fnamu.wiki%2Fw%2F%25EA%25B5%25AC%25EA%25B8%2580&docid=36wvfu8dU_hNNM&tbnid=bg36Vx5yWB_TNM&vet=12ahUKEwi33LiUh_SIAxXD1TQHHV9rJIoQM3oECBcQAA..i&w=800&h=263&hcb=2&ved=2ahUKEwi33LiUh_SIAxXD1TQHHV9rJIoQM3oECBcQAA",
        },
        {
            id: 1,
            img: "https://www.google.com/imgres?q=%EA%B5%AC%EA%B8%80%20%EC%9D%B4%EB%AF%B8%EC%A7%80&imgurl=https%3A%2F%2Fi.namu.wiki%2Fi%2FjCbiz6JK32E8JJXI5yRp0FeiWNZQ4pb11NmqdhGyxTgTSMZinZuydKhgiSSghasnaNIEuOj3QCORAl1kJGreXw.webp&imgrefurl=https%3A%2F%2Fnamu.wiki%2Fw%2F%25EA%25B5%25AC%25EA%25B8%2580&docid=36wvfu8dU_hNNM&tbnid=uF4tCcKKHjdI6M&vet=12ahUKEwi33LiUh_SIAxXD1TQHHV9rJIoQM3oECGMQAA..i&w=1000&h=378&hcb=2&ved=2ahUKEwi33LiUh_SIAxXD1TQHHV9rJIoQM3oECGMQAA",
        },
        {
            id: 2,
            img: "https://www.google.com/imgres?q=%EA%B5%AC%EA%B8%80%20%EC%9D%B4%EB%AF%B8%EC%A7%80&imgurl=http%3A%2F%2Fi.namu.wiki%2Fi%2Ffq05bkrHAGtpfu94yfLyK-MCC2vNlhQJrXI_o4PpWQnZPzvjkA7Lgw_q2zQudNF9DCDG1uH9byc2lbS0Kgte1w.svg&imgrefurl=https%3A%2F%2Fnamu.wiki%2Fw%2F%25EA%25B5%25AC%25EA%25B8%2580&docid=36wvfu8dU_hNNM&tbnid=bg36Vx5yWB_TNM&vet=12ahUKEwi33LiUh_SIAxXD1TQHHV9rJIoQM3oECBcQAA..i&w=800&h=263&hcb=2&ved=2ahUKEwi33LiUh_SIAxXD1TQHHV9rJIoQM3oECBcQAA",
        },
        {
            id: 3,
            img: "https://www.google.com/imgres?q=%EA%B5%AC%EA%B8%80%20%EC%9D%B4%EB%AF%B8%EC%A7%80&imgurl=https%3A%2F%2Fi.namu.wiki%2Fi%2FjCbiz6JK32E8JJXI5yRp0FeiWNZQ4pb11NmqdhGyxTgTSMZinZuydKhgiSSghasnaNIEuOj3QCORAl1kJGreXw.webp&imgrefurl=https%3A%2F%2Fnamu.wiki%2Fw%2F%25EA%25B5%25AC%25EA%25B8%2580&docid=36wvfu8dU_hNNM&tbnid=uF4tCcKKHjdI6M&vet=12ahUKEwi33LiUh_SIAxXD1TQHHV9rJIoQM3oECGMQAA..i&w=1000&h=378&hcb=2&ved=2ahUKEwi33LiUh_SIAxXD1TQHHV9rJIoQM3oECGMQAA",
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
