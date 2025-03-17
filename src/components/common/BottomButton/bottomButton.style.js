import styled from "styled-components";
const M = {
    Layout: styled.button`
        display: flex;
        flex-direction: row;
        justify-content: center;
        box-sizing: border-box;
        align-items: center;
        padding: 0.5rem 0rem;
        border-radius: 0.5rem;
        background-color: var(--yellow-100);
        position: fixed;
        width: calc(100% - 4px);
        bottom: 0;
        margin-bottom: 10px;

        @media (max-width: 749px) {
            width: 100%;
        }
        @media (min-width: 750px) {
            max-width: 750px;
            margin: 0 auto;
        }
    `,

    TextWrapper: styled.div`
        font-weight: bold;
        color: var(--white);
    `,

    ButtonContainer: styled.button`
        display: flex;
        flex-direction: row;
        justify-content: center;
        box-sizing: border-box;
        width: 100%;

        padding: 0.5rem 0rem;
        border-radius: 0.5rem;
        background-color: var(--yellow-100);
        bottom: 0;
    `,
};

export { M };
