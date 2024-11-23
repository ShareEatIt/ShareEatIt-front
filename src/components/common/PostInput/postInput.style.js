import styled from "styled-components";

const S = {
    Layout: styled.div`
        margin: 0rem 1.5rem;
        margin-top: 1.5rem;
    `,

    TitleWrapper: styled.div`
        font-size: 1rem;
        margin-bottom: 0.5rem;
    `,

    InputWrapper: styled.input`
        display: flex;
        align-items: center;

        width: 100%;
        height: 1.5rem;
        border-radius: 5px;
        border: solid 1.5px
            ${({ isFocused }) => (isFocused ? "#ffb849" : "black")};
        &::placeholder {
        }
    `,
    MenuWrapper: styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 1.5rem;
        border-radius: 5px;
        border: solid 1.5px
            ${({ isFocused }) => (isFocused ? "#ffb849" : "black")};
        background-color: white;
        cursor: pointer;
        z-index: 10;
    `,

    MenuItem: styled.div`
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 0.9rem;
        color: #333;
        &:hover {
            background-color: #f1f1f1;
        }
    `,
};

export { S };
