import styled from "styled-components";
import { ReactComponent as Logo } from "../../../assets/common/s_logo.svg.svg";

const S = {
    Layout: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 2rem 0rem;
        border: 2px solid red;
    `,
    FooterContainter: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    `,
    LogoImage: styled(Logo)`
        width: auto;
        height: 30px;
        margin-left: 2rem;
    `,
    FooterInfoContainter: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 2rem;
        border: 2px solid blue;
    `,
    TextWrapper: styled.div`
        text-align: start;
    `,
};

export { S };
