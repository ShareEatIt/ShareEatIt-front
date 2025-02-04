import styled from "styled-components";
const S = {
    Layout: styled.div`
        display: flex;
        min-height: 100vh; /* 최소 높이를 화면 전체로 설정 */
        box-sizing: border-box;
        overflow: hidden;
        flex-direction: column;
        justify-content: center;
        //border: solid 2px pink;
    `,
    ChatListWholeWrapper: styled.div`
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        background-color: var(--yellow-50);
    `,
    TitleWrapper: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 2.8125rem;
        margin: 1rem 0;
        background-color: var(--white);
        font-weight: bold;
    `,
    ChatListContainer: styled.div``,
};

export { S };
