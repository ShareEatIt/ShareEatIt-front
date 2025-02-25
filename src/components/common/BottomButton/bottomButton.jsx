import { M } from "./bottomButton.style";

export const BottomButton = ({ text, onClick, type = "button" }) => {
  return (
    <M.Layout type={type} onClick={onClick}>
      <M.TextWrapper>{`${text}`}</M.TextWrapper>
    </M.Layout>
  );
};

export const BottomButtonPost = ({ text, onClick, type = "button" }) => {
  return (
    <M.ButtonContainer type={type} onClick={onClick}>
      <M.TextWrapper>{`${text}`}</M.TextWrapper>
    </M.ButtonContainer>
  );
};
