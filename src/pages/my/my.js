import styled from "styled-components";

const S = {
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

const M = {
  //마이페이지
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 749px) {
      width: 100%;
    }
    @media (min-width: 750px) {
      max-width: 750px;
      margin: 0 auto;
    }
  `,
  InfoContainer: styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0px 10px 30px;
  `,
  ProfileWrapper: styled.div`
    margin-right: 10px;
  `,
  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 5px;
    gap: 8px;
  `,
  TextWrapper: styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 6px;
    font-size: 12px;
  `,
  NameWrapper: styled.div`
    font-size: 17px;
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
    @media (max-width: 749px) {
      width: 100%;
    }
    @media (min-width: 750px) {
      max-width: 750px;
      margin: 0 auto;
    }
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
    margin-bottom: 6px;
    margin-left: 5px;
    font-size: 16px;
  `,
  Textarea: styled.textarea`
    display: flex;
    justify-content: center;
    width: 700px;
    height: 23px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    margin-top: 8px;
    background-color: var(--gray-100);
    resize: none;
    font-size: 14px;
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
    height: 23px;
    padding: 10px;
    margin-top: 5px;
    border: none;
    border-radius: 8px;
    background-color: var(--gray-100);
    resize: none;
    font-size: 14px;
    &::placeholder {
      color: var(--gray);
    }
    &:focus {
      border: 2px solid var(--yellow-100);
      outline: none;
    }
    @media (max-width: 800px) {
      width: 273px;
      height: 23px;
    }
  `,
  PostcodeBtn: styled.button`
    width: 120px;
    height: 45px;
    padding: 8px;
    margin-left: 8px;
    margin-top: 5px;
    color: var(--white);
    background-color: var(--yellow-100);
    border-radius: 8px;
    font-size: 10px;
    @media (max-width: 800px) {
      width: 60px;
      height: 43px;
    }
  `,

  // 키워드 설정
  KeywordContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 85%;
    margin: 0 auto;
    gap: 19px;
    padding-top: 20px;
  `,
  KeywordWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--gray-100);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    gap: 10px;
    &:hover {
      background-color: var(--yellow-100);
    }
  `,
  //나눔통계
  Layout2: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 749px) {
      width: 100%;
    }
    @media (min-width: 750px) {
      max-width: 750px;
      margin: 0 auto;
    }
  `,
  StatBackground: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 713px;
    padding-top: 10px;
  `,
  StatContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); // 3열 배치
    gap: 20px;
    margin: 0 auto;
    border: 1px solid var(--gray-100);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
  `,

  CountContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    gap: 10px;
  `,
  HighlightContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 12px;
  `,
  HighlightBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 19px;
    border: 1px solid var(gray-100);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: var(--white);
    font-size: 15px;
    font-weight: bold;
    width: 130px;
    height: 130px;
    margin-top: 13px;
  `,
  ParticipationRate: styled.div`
    display: flex;
    width: 310px;
    margin-top: 15px;
    font-size: 15px;
    border: 1px solid var(--gray-100);
    padding: 19px;
    border-radius: 10px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  `,

  StatImageWrapper: styled.div`
    width: 50px;
    height: 50px;
  `,
  CountText: styled.div`
    font-sise: 17px;
    font-weight: 500;
  `,
  TitleContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 13px;
    width: 370px;
  `,
  TitleWrapper: styled.div`
    font-weight: 500;
    font-size: 17px;
    padding: 10px 15px 0px 15px;
  `,
  TitleWrapperY: styled.div`
    font-weight: 500;
    font-size: 17px;
    color: var(--yellow-100);
  `,
  DateContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 18px 0px 18px;
  `,
  DateWrapper: styled.div`
    display: flex;
    border: 1px solid var(--gray-100);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  `,
  Button: styled.button`
    display: flex;
    width: 40px;
    height: 40px;
    margin-left: 8px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid var(--gray-100);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  `,
  //나눔 통계
  StatTextWrapper: styled.span`
    display: flex;
    margin: 20px;
    font-size: 15px;
  `,
  StatTitleWrapper: styled.span`
    display: flex;
    margin: 15px;
    font-size: 15px;
  `,
  GraphContainer: styled.div`
    width: 90%;
    height: 290px;
    border: 1px solid var(--gray-200);
    border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 20px;
  `,
};

export { M, S };
