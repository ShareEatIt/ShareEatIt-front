import styled from "styled-components";

const M = {
  //신고글 작성
  Layout: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  `,

  ImageWrapper: styled.div`
    width: 118px;
    height: 118px;
    border: 1px solid black;
    border-radius: 8px;
  `,
  ImagePreview: styled.div`
    width: 118px;
    height: 118px;
    border: 1px solid black;
    border-radius: 8px;
  `,
  FieldSet: styled.fieldset`
    margin-top: 15px;
    margin-bottom: 15px;
  `,
  Legend: styled.legend`
    margin-bottom: 10px;
    font-size: 18px;
  `,
  Textarea: styled.textarea`
    display: flex;
    justify-content: center;
    width: 335px;
    height: 23px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 8px;
    margin-top: 8px;

    resize: none;
    font-size: 18px;
    &::placeholder {
      color: var(--black);
    }
    &:focus {
      border: 2px solid var(--yellow-100);
      outline: none;
    }
  `,
};

const S = {};

export { M, S };
