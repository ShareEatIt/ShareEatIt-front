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
};

export { S };
