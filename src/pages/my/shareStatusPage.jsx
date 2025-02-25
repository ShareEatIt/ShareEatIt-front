import React, { useState, useEffect } from "react";
import BackButton from "../../components/common/BackButton/backButton";
import { ReactComponent as X } from "../../assets/my/x.svg";
import { M, S } from "./my";
import { ReactComponent as Bread } from "../../assets/common/bread.svg";
import { ReactComponent as Drink } from "../../assets/common/drink.svg";
import { ReactComponent as Convenience } from "../../assets/common/convenience.svg";
import { ReactComponent as Korean } from "../../assets/common/korean.svg";
import { ReactComponent as Chinese } from "../../assets/common/chinese.svg";
import { ReactComponent as Western } from "../../assets/common/western.svg";
import { ReactComponent as Snack } from "../../assets/common/snack.svg";
import { ReactComponent as Grocery } from "../../assets/common/grocery.svg";
import { ReactComponent as Etc } from "../../assets/common/etc.svg";
import { getMemberPostStatus } from "../../api/member";

const ShareStatusPage = () => {
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
      <BackButton text="나눔 현황" />
      <M.TitleContainer>
        <M.TitleWrapper>
          <M.TitleWrapperY>{name}</M.TitleWrapperY>님의 나눔 현황
        </M.TitleWrapper>
        <M.TitleWrapper>총 횟수 {count}건</M.TitleWrapper>
      </M.TitleContainer>
      <M.StatBackground>
        <M.StatContainer>
          <M.CountContainer>
            <Bread />
            <M.CountText>빵 {bakery}건</M.CountText>
          </M.CountContainer>
          <M.CountContainer>
            <Drink />
            <M.CountText>음료 {beverage}건</M.CountText>
          </M.CountContainer>
          <M.CountContainer>
            <Convenience />
            <M.CountText>간편식 {conveniencefood}건</M.CountText>
          </M.CountContainer>
          <M.CountContainer>
            <Korean />
            <M.CountText>한식 {korean}건</M.CountText>
          </M.CountContainer>
          <M.CountContainer>
            <Chinese />
            <M.CountText>중식 {chinese}건</M.CountText>
          </M.CountContainer>
          <M.CountContainer>
            <Western />
            <M.CountText>양식 {western}건</M.CountText>
          </M.CountContainer>
          <M.CountContainer>
            <Snack />
            <M.CountText>간식 {snack}건</M.CountText>
          </M.CountContainer>
          <M.CountContainer>
            <Grocery />
            <M.CountText>식료품 {groceries}건</M.CountText>
          </M.CountContainer>
          <M.CountContainer>
            <Etc />
            <M.CountText>기타 {etc}건</M.CountText>
          </M.CountContainer>
        </M.StatContainer>
      </M.StatBackground>
    </M.Layout>
  );
};
export default ShareStatusPage;
