import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/common/Navigition/navigationBar";
import Toggle from "../../components/my/toggle";
import { ReactComponent as Arrow } from "../../assets/common/right_arrow.svg";
import { ReactComponent as Profile } from "../../assets/common/profile.svg";
import emoji1 from "../../assets/my/emoji1.jpg";
import emoji2 from "../../assets/my/emoji2.jpg";
import emoji3 from "../../assets/my/emoji3.jpg";
import emoji4 from "../../assets/my/emoji4.jpg";
import emoji5 from "../../assets/my/emoji5.jpg";
import { M, S } from "./my";
import {
  getMemberInfo,
  getMemberSticker,
  patchIsKeywordAvail,
  patchIsNoticeAvail,
  deleteMember,
} from "../../api/member";
import ShareStatPage from "./shareStatPage";
import ShareStatusPage from "./shareStatusPage";
import KeywordPage from "./keywordPage";
const MyPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [smile1, setSmile1] = useState(0);
  const [smile2, setSmile2] = useState(0);
  const [smile3, setSmile3] = useState(0);
  const [smile4, setSmile4] = useState(0);
  const [smile5, setSmile5] = useState(0);
  const [isKeywordAvail, setIsKeywordAvail] = useState(true);
  const [isNoticeAvail, setIsNoticeAvail] = useState(true);
  const getMemberSticker = async () => {
    try {
      const response = await getMemberInfo();
      const { nickname, email, stickers, isNoticeAvail, isKeywordAvail } =
        response.data.data;
      setName(nickname);
      setEmail(email);
      setIsKeywordAvail(isKeywordAvail);
      setIsNoticeAvail(isNoticeAvail);
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

  const handleToggleKeyword = () => {
    setIsKeywordAvail((prev) => !prev);
  };
  const handleToggleNotice = () => {
    setIsNoticeAvail((prev) => !prev);
  };

  //키워드 사용여부 변경 API 연결
  const updateKeywordAvail = async () => {
    try {
      const response = await patchIsKeywordAvail(isKeywordAvail);
      return response;
    } catch (err) {
      console.error(err);
    }
  };

  //키워드 알람 여부 변경 API 연결
  const updateNoticeAvail = async () => {
    try {
      const response = await patchIsNoticeAvail(isNoticeAvail);
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
  }, [isKeywordAvail]);
  useEffect(() => {
    if (isNoticeAvail !== null) {
      updateNoticeAvail();
    }
  });
  useEffect(() => {
    getMemberSticker();
  }, []);
  return (
    <M.Layout>
      <NavigationBar />
      <M.InfoContainer>
        <M.ProfileWrapper>
          <Profile />
        </M.ProfileWrapper>
        <M.TextContainer>
          <M.TextWrapper>
            {name}
            <M.EditBtn onClick={() => navigate("/profile")}>정보수정</M.EditBtn>
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
        <M.Label>나의 현황</M.Label>
        <M.MyItemContainer>
          <M.Text>나눔 현황</M.Text>
          <Arrow onClick={() => navigate("/sharestatus")} />
        </M.MyItemContainer>
        <M.HLine />
        <M.MyItemContainer>
          <M.Text>나눔 통계</M.Text>
          <Arrow onClick={() => navigate("/sharestat")} />
        </M.MyItemContainer>
        <M.HLine />
        <M.MyItemContainer>
          <M.Text>참여 현황</M.Text>
          <Arrow onClick={() => navigate("/participationstatus")} />
        </M.MyItemContainer>
      </M.MyContentContainer>
      <M.MyContentContainer>
        <M.Label>알림</M.Label>
        <M.MyItemContainer>
          <M.Text>알림 수신여부</M.Text>
          <Toggle isChecked={isNoticeAvail} onChange={handleToggleNotice} />
        </M.MyItemContainer>
        <M.HLine />
        <M.MyItemContainer>
          <M.Text>키워드 알림받기</M.Text>
          <Toggle isChecked={isKeywordAvail} onChange={handleToggleKeyword} />
        </M.MyItemContainer>
        <M.HLine />
        <M.MyItemContainer>
          <M.Text>키워드 설정하기</M.Text>
          <Arrow onClick={() => navigate("/keyword")} />
        </M.MyItemContainer>
      </M.MyContentContainer>
      <M.MyContentContainer>
        <M.Label>계정</M.Label>
        <M.MyItemContainer>
          <M.Text>로그아웃</M.Text>
          <Arrow />
        </M.MyItemContainer>
        <M.HLine />
        <M.MyItemContainer>
          <M.Text>회원탈퇴</M.Text>
          <Arrow onClick={removeMember} />
        </M.MyItemContainer>
      </M.MyContentContainer>
    </M.Layout>
  );
};

export default MyPage;
