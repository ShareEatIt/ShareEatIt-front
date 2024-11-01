import React, { useState } from "react";
import BackButton from "../../components/common/BackButton/backButton";
import { ReactComponent as X } from "../../assets/my/x.svg";
import { M, S } from "./my";
import { ReactComponent as Bread } from "../../assets/my/bread.svg";
import { ReactComponent as Drink } from "../../assets/my/drink.svg";
import { ReactComponent as Ramen } from "../../assets/my/ramen.svg";
import { ReactComponent as Korea } from "../../assets/my/korea.svg";
import { ReactComponent as Chinese } from "../../assets/my/chinese.svg";
import { ReactComponent as Spaghetti } from "../../assets/my/spaghetti.svg";
import { ReactComponent as Snack } from "../../assets/my/snack.svg";
import { ReactComponent as Grocery } from "../../assets/my/grocery.svg";
import { ReactComponent as Other } from "../../assets/my/other.svg";

const ShareStatPage = () => {
  const [name, setName] = useState("이승진");
  const [count, setCount] = useState("21");
  const [bread, setBread] = useState("1");
  const [drink, setDrink] = useState("1");
  const [convenience, setConvenience] = useState("2");
  const [korean, setKorean] = useState("3");
  const [chinese, setChinese] = useState("4");
  const [western, setWestern] = useState("5");
  const [snack, setSnack] = useState("4");
  const [grocery, setGrocery] = useState("2");
  const [other, setOther] = useState("3");
  return (
    <M.Layout>
      <BackButton text="나눔통계" />
      <M.StatTitleWrapper>{name}님의 나눔통계 </M.StatTitleWrapper>
      <M.CntTextWrapper>총 나눔 횟수 {count}건</M.CntTextWrapper>
      <M.StatBackground>
        <M.StatContainer>
          <M.CountContainer>
            <M.StatImageWrapper>
              <Bread />
            </M.StatImageWrapper>
            <M.CountText>빵 {bread}건</M.CountText>
          </M.CountContainer>
          <M.CountContainer>
            <M.StatImageWrapper>
              <Drink />
            </M.StatImageWrapper>
            <M.CountText>음료 {drink}건</M.CountText>
          </M.CountContainer>
          <M.CountContainer>
            <M.StatImageWrapper>
              <Ramen />
            </M.StatImageWrapper>
            <M.CountText>간편식 {convenience}건</M.CountText>
          </M.CountContainer>
          <M.CountContainer>
            <M.StatImageWrapper>
              <Korea />
            </M.StatImageWrapper>
            <M.CountText>한식 {korean}건</M.CountText>
          </M.CountContainer>
          <M.CountContainer>
            <M.StatImageWrapper>
              <Chinese />
            </M.StatImageWrapper>
            <M.CountText>중식 {chinese}건</M.CountText>
          </M.CountContainer>
          <M.CountContainer>
            <M.StatImageWrapper>
              <Spaghetti />
            </M.StatImageWrapper>
            <M.CountText>양식 {western}건</M.CountText>
          </M.CountContainer>
          <M.CountContainer>
            <M.StatImageWrapper>
              <Snack />
            </M.StatImageWrapper>
            <M.CountText>간식 {snack}건</M.CountText>
          </M.CountContainer>
          <M.CountContainer>
            <M.StatImageWrapper>
              <Grocery />
            </M.StatImageWrapper>
            <M.CountText>식료품 {grocery}건</M.CountText>
          </M.CountContainer>
          <M.CountContainer>
            <M.StatImageWrapper>
              <Other />
            </M.StatImageWrapper>
            <M.CountText>기타 {other}건</M.CountText>
          </M.CountContainer>
        </M.StatContainer>
      </M.StatBackground>
    </M.Layout>
  );
};
export default ShareStatPage;
