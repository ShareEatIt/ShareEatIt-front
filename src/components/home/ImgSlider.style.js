import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const S = {
    Layout: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    ImgContainer: styled.div`
        display: flex;
        overflow: hidden;
        width: 20rem;
        margin: 0 50px;
        align-items: center;
        border: 1px red solid;
        border: 2px green dotted;
        text-align: center;
        font-size: 40px;
    `,
    ImgContent: styled.div`
        width: 100%;
        height: 300px;
        flex-shrink: 0; /*이 구역안에 생기는 영역들이 공간을 분배하여 가지지 않도록 적용*/
        font-size: 40px;
        text-align: center;
    `,
    PrevArrow: styled(IoIosArrowBack)``,
    NextArrow: styled(IoIosArrowForward)``,
};

export { S };
