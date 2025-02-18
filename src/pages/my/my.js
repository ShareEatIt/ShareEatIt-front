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
    margin: 20px 0px 0px 30px;
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
    margin: 10px 20px 0px 20px;
    gap: 10px;
  `,

  Text: styled.div`
    font-size: 14px;
  `,
  MyItemContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: 4px 0px 4px 0px;
  `,
  KeywordText: styled.text``,

  ItemTitle: styled.span`
    font-size: 15px;
  `,
  ItemTitleYellow: styled.span`
    font-size: 15px;
    color: var(--yellow-100);
  `,
  ItemContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 8px;
    border: 0.5px solid var(--gray-200);
    padding: 14px;
    gap: 8px;
  `,
  ItemContainer2: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 0.5px solid var(--gray-200);
    padding: 14px;
    gap: 8px;
    cursor: pointer;
  `,
  MyContentContainerRow: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 10px 20px 20px 20px;
    gap: 10px;
  `,

  ItemContentWrapper: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    cursor: pointer;
  `,

  ItemText: styled.span`
    font-size: 11px;
    flex-grow: 1;
  `,

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
    width: 575px;
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
      width: 251px;
      height: 50px;
    }
  `,
  PostcodeBtn: styled.button`
    width: 120px;
    height: 45px;
    padding: 8px;
    margin-left: 8px;
    color: var(--white);
    background-color: var(--yellow-100);
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
    @media (max-width: 800px) {
      width: 80px;
      height: 70px;
    }
  `,

  // 키워드 설정
  KeywordContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 10px;
    padding-top: 20px;
  `,
  KeywordWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--yellow-100);
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    gap: 10px;
    &:hover {
      background-color: var(--yellow-100);
    }
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
