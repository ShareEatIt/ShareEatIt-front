import styled from "styled-components";

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
  //인트로 페이지
  IntroLayout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: var(--yellow-100);
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
  IntroLayout2: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `,
  Title: styled.span`
    font-size: 40px;
    color: var(--yellow-100);
  `,
  Content: styled.span`
    text-align: center;
    color: var(--red);
  `,
};

export { M, S };
