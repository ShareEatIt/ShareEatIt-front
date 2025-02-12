import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../src/assets/login/arrow.svg";
import { ReactComponent as ArrowB } from "../../../src/assets/login/arrow_black.svg";

const S = {
  Layout: styled.div`
    dislay: flex;
    align-items: center;
  `,
};

const M = {
  //로그인 페이지지
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 100px;
  `,
  LogoWrapper: styled.div`
    display: flex;
    margin-bottom: 110px;
  `,
  TextContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    margin-bottom: 270px;
  `,
  TextWrapper: styled.span`
    font-size: 37px;
    font-weight: 700;
    margin-bottom: 20px;
    padding-top: 80px;
    line-height: 1.2;
  `,
  SubtextWrapper: styled.span`
    font-size: 17px;
    color: var(--white);
    position: relative;
    text-align: left;
    left: -32px;
    z-index: 2;
    line-height: 1.3;
  `,
  IconOverlay: styled.div`
    position: absolute;
    left: 50px;
    top: 10px;
    z-index: 1;
  `,

  Title: styled.span`
    font-size: 40px;
    color: var(--yellow-100);
  `,
  Content: styled.span`
    text-align: center;
    color: var(--red);
  `,
  MsgTextWrapper: styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 25px;
  `,
  PageWrapper: styled.div`
    height: 100vh;
    overflow: hidden;
  `,

  // 각 페이지가 화면 높이에 맞게 설정되도록 스타일 추가
  PageContainer: styled.div`
    height: 300vh; /* 100vh * 3 페이지 */
    transition: transform 0.6s ease-in-out;
    display: flex;
    flex-direction: column;
  `,

  PageSection: styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--yellow-100);
  `,
  PageSection2: styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  StyledArrow: styled(Arrow)`
    position: absolute;
    bottom: 0px;
  `,
  StyledArrowB: styled(ArrowB)`
    position: absolute;
    bottom: 20px;
  `,
};

export { M, S };
