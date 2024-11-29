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

    padding: 15px;

    border: 1px solid var(--yellow-100);
    border-radius: 8px;
    margin: 20px 30px 0px 30px;
  `,
  ProfileWrapper: styled.div`
    margin-left: 5px;
    margin-right: 10px;
  `,
  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 10px;
    gap: 4px;
  `,
  TextWrapper: styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 3px;
  `,
  NameWrapper: styled.div`
    font-size: 22px;
    font-weight: 700;
  `,
  EditBtn: styled.button`
    padding: 3px;
    border-radius: 5px;
    font-size: 10px;
    background-color: var(--yellow-50);
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
  ProfileLayout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
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
    width: 585px;
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
    @media (max-width: 800px) {
      width: 220px;
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

  // 키워드 설정
  Background: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin-top: 20px;
    height: 713px;
    padding-top: 20px;
    background-color: var(--yellow-40);
    width: 100%; /* 화면 전체 너비 */
  `,

  KeywordContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    padding: 0 20px;

    /* 반응형 조정 */
    @media (max-width: 768px) {
      max-width: 90%; /* 모바일에서는 화면의 90% 너비 */
    }
  `,

  KeyItemContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    margin: 4px;
    width: 100%;
    max-width: 650px;
    height: 20px;
    background-color: white;
    border-radius: 8px;

    /* 반응형 조정 */
    @media (max-width: 768px) {
      max-width: 90%; /* 화면이 좁아질수록 너비 축소 */
    }
  `,

  KeyContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    align-items: center;
    width: 90%;
    max-width: 700px;
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50.5%); /* 가운데로 정확히 위치시키기 위해서 */

    /* 반응형 조정 */
    @media (max-width: 768px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(5, 1fr);
    }
  `,

  KeyBtn: styled.button`
    width: 100%; /* 버튼의 너비가 부모에 맞춰 100%로 확장 */
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    margin: 4px;
    background-color: var(--yellow-100);
    border-radius: 8px;

    &:hover {
      background-color: var(--white); /* 호버 시 색상 변화 */
    }
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
