import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";

const S = {
    Layout: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
    `,
    BackButtonIcon: styled(IoMdArrowRoundBack)`
        font-size: 24px;
    `,
    TextWrapper: styled.div`
        font-size: 2rem;
    `,
    RightBox: styled.div`
        width: 1rem;
    `,
};

export { S };
