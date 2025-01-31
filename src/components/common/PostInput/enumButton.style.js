import styled from "styled-components";
const S = {
    Layout: styled.div`
        display: flex;
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
        justify-content: space-around;
    `,
    ButtonWrapper: styled.button`
        padding: 0.2rem 0.5rem;
        background-color: ${({ isSelected }) =>
            isSelected ? "var(--yellow-100)" : "var(--yellow-70)"};
        color: white;
        border-radius: 10px;
        &:hover {
            background-color: var(--yellow-100);
        }
    `,
};

export { S };
