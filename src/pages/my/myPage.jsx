import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/common/Navigition/navigationBar";
import Toggle from "../../components/my/toggle";
import { ReactComponent as Arrow } from "../../assets/common/right_arrow.svg";
import { ReactComponent as Profile } from "../../assets/common/profile.svg";
import { ReactComponent as ShareStatus } from "../../assets/my/sharestatus.svg";
import { ReactComponent as ShareStat } from "../../assets/my/sharestat.svg";
import { ReactComponent as ParticipationStatus } from "../../assets/my/participationstatus.svg";
import { ReactComponent as Edit } from "../../assets/my/edit.svg";

import emoji1 from "../../assets/my/heart.svg";
import emoji2 from "../../assets/my/good.svg";
import emoji3 from "../../assets/my/smile.svg";
import emoji4 from "../../assets/my/star.svg";
import emoji5 from "../../assets/my/king.svg";
import { M, S } from "./my";
import {
  getMemberInfo,
  getMemberSticker,
  patchIsKeywordAvail,
  patchIsNoticeAvail,
  deleteMember,
} from "../../api/member";
import { logout } from "../../api/login";
import ShareStatPage from "./shareStatusPage";
import ShareStatusPage from "./shareStatPage";
import KeywordPage from "./keywordPage";
import { TbWashDryP } from "react-icons/tb";
const MyPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [smile1, setSmile1] = useState(0);
  const [smile2, setSmile2] = useState(0);
  const [smile3, setSmile3] = useState(0);
  const [smile4, setSmile4] = useState(0);
  const [smile5, setSmile5] = useState(0);
  const [isKeyword, setIsKeyword] = useState(false);
  const [isNotice, setIsNotice] = useState(false);
  const [isNotice1, setIsNotice1] = useState(false);
  const readMemberInfo = async () => {
    try {
      const response = await getMemberInfo();
      const { nickname, email, profileImg } = response.data.data;
      setName(nickname);
      setEmail(email);
      setProfile(profileImg);
    } catch (err) {
      console.error(err);
    }
  };
  const readMemberSticker = async () => {
    try {
      const response = await getMemberSticker();
      const { stickers, isNoticeAvail, isKeywordAvail } = response.data.data;
      console.log(response);
      setIsKeyword(isKeywordAvail ?? false);
      setIsNotice(isNoticeAvail ?? false);
      console.log(isKeyword);

      Object.keys(stickers).forEach((key) => {
        const value = stickers[key] ?? 0; // null 방지용 기본값 0
        if (key === "smile1") setSmile1(value);
        if (key === "smile2") setSmile2(value);
        if (key === "smile3") setSmile3(value);
        if (key === "smile4") setSmile4(value);
        if (key === "smile5") setSmile5(value);
      });
    } catch (err) {
      console.error(err);
    }
  };

  const readLogout = async () => {
    try {
      const response = await logout();
      console.log("logout success");
      console.log(response.data);

      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };
  const handleToggleKeyword = () => {
    setIsNotice1((prev) => !prev);
  };
  const handleToggleNotice = () => {
    setIsNotice((prev) => !prev);
  };

  //키워드 사용여부 변경 API 연결
  const updateKeywordAvail = async () => {
    try {
      const response = await patchIsKeywordAvail(isKeyword);
      return response;
    } catch (err) {
      console.error(err);
    }
  };

  //키워드 알람 여부 변경 API 연결
  const updateNoticeAvail = async () => {
    try {
      const response = await patchIsNoticeAvail(isNotice);
      return response;
    } catch (err) {
      console.error(err);
    }
  };

  //멤버 탈퇴
  const removeMember = async () => {
    try {
      const response = await deleteMember();
      return response;
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    updateKeywordAvail();
  }, [isKeyword]);
  useEffect(() => {
    if (isNotice !== null) {
      updateNoticeAvail();
    }
  });
  useEffect(() => {
    readMemberSticker();
    readMemberInfo();
  }, []);
  return (
    <M.Layout>
      <NavigationBar />
      <M.InfoContainer>
        <M.ProfileWrapper>
          {profile ? (
            <img
              src={profile}
              alt="Profile"
              style={{
                width: "76px",
                height: "76px",
                borderRadius: "50%",
              }}
            />
          ) : (
            <Profile />
          )}
        </M.ProfileWrapper>
        <M.TextContainer>
          <M.TextWrapper>
            <M.NameWrapper>{name}</M.NameWrapper>
            <Edit onClick={() => navigate("/profile")} />
          </M.TextWrapper>
          <M.TextWrapper>{email}</M.TextWrapper>
          <M.TextWrapper>
            <img src={emoji1} />
            {smile1 ?? 0}
            <img src={emoji2} />
            {smile2 ?? 0}
            <img src={emoji3} />
            {smile3 ?? 0}
            <img src={emoji4} />
            {smile4 ?? 0}
            <img src={emoji5} />
            {smile5 ?? 0}
          </M.TextWrapper>
        </M.TextContainer>
      </M.InfoContainer>
      <M.MyContentContainer>
        <M.ItemContainer>
          <M.ItemContentWrapper>
            <M.ItemTitle>
              <M.ItemTitleYellow>알림 </M.ItemTitleYellow>수신여부
              <br />
              <M.ItemText>
                관심있는 나눔글에 대한 알림 수신 여부 on/off
              </M.ItemText>
            </M.ItemTitle>
            <Toggle checked={isNotice} onChange={handleToggleNotice} />
          </M.ItemContentWrapper>
        </M.ItemContainer>
        <M.ItemContainer>
          <M.ItemContentWrapper>
            <M.ItemTitle>
              <M.ItemTitleYellow>키워드 </M.ItemTitleYellow>알림받기
              <br />
              <M.ItemText>
                관심있는 나눔글에 대한 알림 수신 여부 on/off
              </M.ItemText>
            </M.ItemTitle>
            <Toggle checked={isNotice1} onChange={handleToggleKeyword} />
          </M.ItemContentWrapper>
        </M.ItemContainer>
        <M.ItemContainer>
          <M.ItemContentWrapper onClick={() => navigate("/keyword")}>
            <M.ItemTitle>
              <M.ItemTitleYellow>키워드</M.ItemTitleYellow>설정하기
              <br />
              <M.ItemText>관심있는 식품 키워드 설정하기</M.ItemText>
            </M.ItemTitle>
            <Arrow />
          </M.ItemContentWrapper>
        </M.ItemContainer>
      </M.MyContentContainer>
      <M.MyContentContainerRow>
        <M.ItemContainer2 onClick={() => navigate("/sharestatus")}>
          <ShareStatus />
          <M.ItemTitle>나눔 현황</M.ItemTitle>
        </M.ItemContainer2>
        <M.ItemContainer2 onClick={() => navigate("/sharestat")}>
          <ShareStat />
          <M.ItemTitle>나눔 통계</M.ItemTitle>
        </M.ItemContainer2>
        <M.ItemContainer2 onClick={() => navigate("/participationstatus")}>
          <ParticipationStatus />
          <M.ItemTitle>참여 현황</M.ItemTitle>
        </M.ItemContainer2>
      </M.MyContentContainerRow>
      <M.MyContentContainer>
        <M.Text onClick={readLogout}>로그아웃</M.Text>
        <M.Text onClick={removeMember}>회원탈퇴</M.Text>
      </M.MyContentContainer>
    </M.Layout>
  );
};

export default MyPage;
