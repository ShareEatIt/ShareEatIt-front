import styled from "styled-components";

const S = {
    Layout: styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
    `,
    MessageContainer: styled.div`
        flex-direction: column;
        display: flex;
        width: 100%;
        flex-grow: 1;
        box-sizing: border-box;
        border: solid 2px;
    `,
    MessageWrapper: styled.div`
        display: flex;
        flex-direction: row;

        margin: 0 1.13rem;
        margin-bottom: 1rem;
        border: solid 2px pink;
        border-radius: 0.625rem;
        gap: 1rem;
        box-sizing: border-box;
    `,
    UserProfileImage: styled.img`
        width: 2.3rem;
        height: 2.3rem;
        border-radius: 50%;
        object-fit: contain;
        background: lightgray 50%;
    `,
    MessageContentContainer: styled.div``,
    MessageUser: styled.div``,
    MessageText: styled.div`
        max-width: 14.1875rem;
        padding: 0.1rem 0.2rem;
        background-color: var(--yellow-40);
        border-radius: 5px;
    `,
    MessageTime: styled.div``,
    InputContainer: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border-top: 1px solid #ddd; /* 위쪽에 경계선 추가 */
        background-color: #f9f9f9; /* 배경 색상 */
        position: fixed;
        bottom: 0;
        width: 100%; /* 화면 전체 너비 */
        box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* 상단 그림자 효과 */
    `,
};

export { S };
