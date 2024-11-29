import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";

const S = {
  Layout: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    box-sizing: border-box;
  `,
  BackButtonIcon: styled(IoMdArrowRoundBack)`
    font-size: 24px;
    margin-left: 1rem;
  `,
  TextWrapper: styled.div`
    font-size: 16px;
  `,
  RightBox: styled.div`
    width: 1rem;
  `,
};

export { S };
