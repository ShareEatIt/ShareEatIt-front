import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const S = {
    Layout: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0.5rem;
        margin-top: 1rem;
    `,
    ImgContainer: styled.div`
        display: flex;
        overflow: hidden;
        width: 85%;
        margin: 0 0.88rem;
        align-items: center;
        border: 1px red solid;
        border: 2px green dotted;
        text-align: center;
        font-size: 40px;
    `,
    ImgContent: styled.img`
        width: 100%;
        height: 300px;
        flex-shrink: 0;
        font-size: 40px;
        text-align: center;
        object-fit: cover;
        background: lightgray 50%;
    `,
    PrevArrow: styled(IoIosArrowBack)`
        font-size: 1.5rem;
    `,
    NextArrow: styled(IoIosArrowForward)`
        font-size: 1.5rem;
    `,
};

export { S };
