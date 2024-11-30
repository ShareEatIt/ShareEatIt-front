import styled from "styled-components";

const S = {
    Layout: styled.div`
        margin-bottom: 2rem;
    `,
    ButtonWrapper: styled.div`
        margin: 0rem 1.5rem;
        margin-top: 1.5rem;
    `,
    FieldSet: styled.fieldset`
        border: none;
        margin-bottom: 20px;
    `,
    Legend: styled.legend`
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 10px;
    `,
    ImageWrapper: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        border: 2px dashed #ddd; /* 대기 중인 이미지 업로드 표시 */
        padding: 10px;
        border-radius: 10px;
        min-height: 120px;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;

        &:hover {
            border-color: #aaa;
        }
    `,
};

export { S };
