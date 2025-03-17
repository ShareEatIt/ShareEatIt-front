import styled from "styled-components";

const S = {
    Layout: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        @media (max-width: 749px) {
            width: 100%;
        }
        @media (min-width: 750px) {
            max-width: 750px;
            margin: 0 auto;
        }
    `,
    InputContainer: styled.div`
        display: flex;
        flex-direction: column;

        width: 100%;
        box-sizing: border-box;
        margin-top: 2.5rem;
        gap: 2.5rem;
    `,
    InputWrapper: styled.div`
        padding: 0 1.5rem;
    `,
    TextWrapper: styled.div`
        display: flex;
        margin-bottom: 0.5rem;
    `,

    Input: styled.input`
        display: flex;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        height: 2rem;
        padding: 8px;
        background-color: var(--gray-100);
        color: var(--gray-200);
        border-radius: 10px;
        font-size: 14px;
        resize: none;
        border: none;
        outline: none;

        &::placeholder {
            color: var(--gray-200);
            font-size: 14px;
        }
        &:focus {
            border: 1px solid var(--yellow-100);
        }
    `,
    PWWrapper: styled.div`
        display: flex;
        width: 100%;
        box-sizing: border-box;
        position: relative;
    `,
    CheckBox: styled.button`
        position: absolute;
        top: 7px;
        right: 10px;
        border: none;
        background: none;
        cursor: pointer;
    `,
};

export { S };
