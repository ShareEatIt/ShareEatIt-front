import styled from "styled-components";

const M = {
  //신고글 작성
  Layout: styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  `,

  ImageWrapper: styled.div`
    width: 700px;
    height: 335px;
    border: 1px solid black;
    border-radius: 8px;
    padding: 10px;
    @media (max-width: 800px) {
      width: 340px;
    }
  `,
  ImagePreview: styled.div`
    width: 335px;
    height: 335px;
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
    width: 700px;
    height: 23px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 8px;
    margin-top: 8px;

    resize: none;
    font-size: 18px;
    &::placeholder {
      color: var(--gray);
    }
    &:focus {
      border: 2px solid var(--yellow-100);
      outline: none;
    }
    @media (max-width: 800px) {
      width: 340px;
    }
  `,
};

const S = {};

export { M, S };
