import styled from "styled-components";

const S = {
  Layout: styled.div`
    display: flex;
    align-items: center;
  `,
};

const M = {
  //마이페이지
  Layout: styled.div`
    display: flex;
    flex-direction: column;
  `,
  InfoContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px;

    border: 1px solid var(--yellow-100);
    border-radius: 8px;
    margin: 20px 30px 0px 30px;
  `,
  ProfileWrapper: styled.div`
    margin-right: 10px;
  `,
  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `,
  TextWrapper: styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  `,
  EditBtn: styled.button`
    font-size: 10px;
  `,
  MyContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    margin: 30px;
  `,
  Label: styled.label`
    color: red;
    font-size: 13px;
  `,
  Btn: styled.button`
    font-size: 17px;
  `,
  Text: styled.div`
    font-size: 17px;
  `,
  HLine: styled.div`
    border: 1px solid var(--yellow-100);
  `,
  MyItemContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: 4px 0px 4px 0px;
  `,
  KeywordText: styled.text``,

  //프로필 편집
  Form: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  `,
  ImageContainer: styled.div`
    display: flex;
    justify-content: center;
    width: 136px;
    height: 136px;
    position: relative;
  `,
  ImageWrapper: styled.div`
    display: flex;
    justify-content: center;
    width: 136px;
    height: 136px;
    position: relative;
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
  CameraWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 31px;
    height: 31px;
    border: 1px solid black;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: var(--white);
  `,

  //우편번호 찾기
  PostCodeContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `,
  PostcodeTextarea: styled.textarea`
    display: flex;
    justify-content: center;
    width: 220px;
    height: 25px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 8px;

    resize: none;
    font-size: 18px;
    &::placeholder {
      color: var(--gray);
    }
    &:focus {
      border: 2px solid var(--yellow-100);
      outline: none;
    }
  `,
  PostcodeBtn: styled.button`
    width: 110px;
    height: 45px;
    padding: 8px;
    margin-left: 6px;
    color: var(--white);
    background-color: var(--yellow-100);
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
  `,

  //키워드 설정
  Background: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;

    height: 713px;
    padding-top: 20px;
    background-color: var(--yellow-40);
  `,
  KeywordContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  KeyItemContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    margin: 4px;
    width: 400px;
    height: 20px;
    background-color: white;
    border-radius: 8px;
  `,
  KeyContainer: styled.div`
    position: absolute;
    bottom: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    margin-bottom: 20px;
  `,
  KeyTextarea: styled.textarea`
    width: 270px;
    height: 29px;
    resize: none;
    border: 0px solid;
    border-radius: 8px;
    margin-right: 8px;
    padding-top: 13px;
    padding-left: 10px;
  `,
  KeyBtn: styled.button`
    width: 80px;
    height: 42px;
    margin: 4px;
    background-color: var(--yellow-100);
    border-radius: 8px;
  `,
  //나눔통계
  StatBackground: styled.div`
    display: flex;
    justify-content: center;

    height: 713px;
    padding-top: 20px;
    background-color: var(--yellow-40);
  `,
  StatContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    height: 100px;
    width: 350px;
  `,
  CountContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 88px;
    margin: 7px;
    background-color: var(--white);
    border-radius: 10px;
  `,
  StatImageWrapper: styled.div`
    width: 50px;
    height: 50px;
  `,
  CountText: styled.div`
    font-sise: 17px;
    font-weight: 700;
  `,
  StatTitleWrapper: styled.div`
    font-weight: 700;
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 10px;
  `,
  CntTextWrapper: styled.div`
    font-weight: 700;
    color: var(--yellow-100);
    margin-bottom: 20px;
  `,
};

export { M, S };
