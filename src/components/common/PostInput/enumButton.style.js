import styled from "styled-components";
const S = {
    Layout: styled.div`
        display: flex;
        width: 100%;
        flex-direction: column;
        box-sizing: border-box;
        margin: 0rem 1.5rem;
        margin-top: 1.5rem;
    `,
    TitleWrapper: styled.div`
        font-size: 1rem;
        margin-bottom: 0.5rem;
    `,

    ButtonContainer: styled.div`
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        gap: 2rem;
    `,
    ButtonWrapper: styled.button`
        padding: 0.5rem 0.5rem;
        background-color: ${({ isSelected }) =>
            isSelected ? "var(--yellow-100)" : "none"};
        color: black;
        border-radius: 10px;
        border: ${({ isSelected }) =>
            isSelected ? "none" : "solid 1px #C8C8C8"};
        &:hover {
            background-color: var(--yellow-100);
        }
    `,
};

export { S };
