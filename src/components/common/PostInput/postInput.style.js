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
        border-radius: 5px;
        width: 100%;
        border: solid 2px black;
        &::placeholder {
        }
    `,
};

export { S };
