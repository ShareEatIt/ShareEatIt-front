import React, { useState, useEffect } from "react";
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
import { getMemberPostStatus } from "../../api/member";

const ShareStatPage = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [bakery, setBakery] = useState("");
  const [beverage, setBeverage] = useState("");
  const [conveniencefood, setConveniencefood] = useState("");
  const [korean, setKorean] = useState("");
  const [chinese, setChinese] = useState("");
  const [western, setWestern] = useState("");
  const [snack, setSnack] = useState("");
  const [groceries, setGroceries] = useState("");
  const [etc, setEtc] = useState("");

  const readMemberPostStatus = async () => {
    try {
      const response = await getMemberPostStatus();
      const {
        bakery,
        conveniencefood,
        snack,
        western,
        beverage,
        etc,
        groceries,
        korean,
        chinese,
      } = response.data.data.statusByCategory;
      setBakery(bakery);
      setConveniencefood(conveniencefood);
      setSnack(snack);
      setWestern(western);
      setBeverage(beverage);
      setEtc(etc);
      setGroceries(groceries);
      setKorean(korean);
      setChinese(chinese);
      const { nickname, sharingTotal } = response.data.data.writer;
      setName(nickname);
      setCount(sharingTotal);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    readMemberPostStatus();
  }, []);
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
            <M.CountText>빵 {bakery}건</M.CountText>
          </M.CountContainer>
          <M.CountContainer>
            <M.StatImageWrapper>
              <Drink />
            </M.StatImageWrapper>
            <M.CountText>음료 {beverage}건</M.CountText>
          </M.CountContainer>
          <M.CountContainer>
            <M.StatImageWrapper>
              <Ramen />
            </M.StatImageWrapper>
            <M.CountText>간편식 {conveniencefood}건</M.CountText>
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
            <M.CountText>식료품 {groceries}건</M.CountText>
          </M.CountContainer>
          <M.CountContainer>
            <M.StatImageWrapper>
              <Other />
            </M.StatImageWrapper>
            <M.CountText>기타 {etc}건</M.CountText>
          </M.CountContainer>
        </M.StatContainer>
      </M.StatBackground>
    </M.Layout>
  );
};
export default ShareStatPage;
