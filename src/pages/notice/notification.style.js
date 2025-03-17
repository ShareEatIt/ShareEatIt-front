import styled from "styled-components";

const M = {
  Layout: styled.div`
    display: flex;
    min-height: 100vh; /* 최소 높이를 화면 전체로 설정 */
    box-sizing: border-box;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 749px) {
      width: 100%;
    }
    @media (min-width: 750px) {
      max-width: 750px;
      margin: 0 auto;
    }
  `,
  NotiContainer: styled.div`
    background-color: var(--white);
    border-radius: 10px;
    padding: 16px;
    margin: 5px 10px 5px 10px;
  `,
  NotiTitle: styled.div`
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 8px;
  `,
  NotiContent: styled.div`
    font-size: 12px;
    color: var(--gray-800);
  `,
  HighlightedText: styled.span`
    font-weight: bold;
    color: var(--yellow-100);
  `,
  ChatListWholeWrapper: styled.div`
    display: flex;
    flex-grow: 1;
    padding-top: 8px;
    flex-direction: column;
    background-color: var(--gray-100);
  `,
};

export { M };
