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
import { getMemberPostStatus, getMemberInfo } from "../../api/member";

const ShareStatusPage = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [popularCategory, setPopularCategory] = useState("");
  const [participationRate, setParticipationRate] = useState("");
  const [userRank10km, setUserRank10km] = useState("");
  const [bakery, setBakery] = useState("");
  const [beverage, setBeverage] = useState("");
  const [conveniencefood, setConveniencefood] = useState("");
  const [korean, setKorean] = useState("");
  const [chinese, setChinese] = useState("");
  const [western, setWestern] = useState("");
  const [snack, setSnack] = useState("");
  const [groceries, setGroceries] = useState("");
  const [etc, setEtc] = useState("");
  const readMemberInfo = async () => {
    try {
      const response = await getMemberInfo();
      setName(response.data.data.nickname);
    } catch (err) {
      console.error(err);
    }
  };
  const readMemberPostStatus = async () => {
    try {
      const response = await getMemberPostStatus();

      setPopularCategory(response.data.popularCategory);
      setCount(response.data.totalSharedCount);
      setParticipationRate(response.data.participationRate);
      setUserRank10km(response.data.userRankIn10km);

      const categoryList = response.data.data.categoryCountList;

      // 기본값이 0인 객체를 생성해 한 번의 reduce로 count 값을 설정
      const categoryCounts = categoryList.reduce(
        (acc, { category, count }) => {
          acc[category] = count;
          return acc;
        },
        {
          BAKERY: 0,
          CONVENIENCEFOOD: 0,
          SNACK: 0,
          WESTERN: 0,
          BEVERAGE: 0,
          ETC: 0,
          GROCERY: 0,
          KOREAN: 0,
          CHINESE: 0,
        }
      );

      // 상태 업데이트
      setBakery(categoryCounts.BAKERY);
      setConveniencefood(categoryCounts.CONVENIENCEFOOD);
      setSnack(categoryCounts.SNACK);
      setWestern(categoryCounts.WESTERN);
      setBeverage(categoryCounts.BEVERAGE);
      setEtc(categoryCounts.ETC);
      setGroceries(categoryCounts.GROCERY);
      setKorean(categoryCounts.KOREAN);
      setChinese(categoryCounts.CHINESE);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    readMemberInfo();
    readMemberPostStatus();
  }, []);
  return (
    <M.Layout>
      <BackButton text="나눔 현황" />
      <M.TitleContainer>
        <M.TitleWrapper>
          <M.TitleWrapperY>
            {name}
            <span>님의 나눔현황</span>
          </M.TitleWrapperY>
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
        <M.HighlightContainer>
          <M.HighlightBox>
            <M.CountText>가장 많이 나눔한 음식</M.CountText>
            <M.StatImageWrapper>{popularCategory}</M.StatImageWrapper>
            <M.CountText>{popularCategory}</M.CountText>
          </M.HighlightBox>
          <M.HighlightBox>
            <M.CountText>10km 이내 나눔 순위</M.CountText>
            <M.CountText>{userRank10km}위</M.CountText>
          </M.HighlightBox>
        </M.HighlightContainer>
        <M.ParticipationRate>
          나눔 성사 비율 {participationRate}%
        </M.ParticipationRate>
      </M.StatBackground>
    </M.Layout>
  );
};
export default ShareStatusPage;
