import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/common/right_arrow.svg";
import { ReactComponent as Profile } from "../../assets/common/profile.svg";
import { M, S } from "./my";
const MyPage = () => {
  const [name, setName] = useState("이승진");
  const [email, setEmail] = useState("seungjinlee09@naver.com");
  return (
    <M.Layout>
      <M.InfoContainer>
        <M.ProfileWrapper>
          <Profile />
        </M.ProfileWrapper>
        <M.TextContainer>
          <M.TextWrapper>{name}</M.TextWrapper>
          <M.TextWrapper>{email}</M.TextWrapper>
        </M.TextContainer>
      </M.InfoContainer>
      <M.MyContentContainer>
        <M.Label>나의 현황</M.Label>
        <M.MyItemContainer>
          <M.Text>나눔 현황</M.Text>
          <Arrow />
        </M.MyItemContainer>
        <M.HLine />
        <M.MyItemContainer>
          <M.Text>나눔 통계</M.Text>
          <Arrow />
        </M.MyItemContainer>
        <M.HLine />
        <M.MyItemContainer>
          <M.Text>참여 현황</M.Text>
          <Arrow />
        </M.MyItemContainer>
      </M.MyContentContainer>
      <M.MyContentContainer>
        <M.Label>사업자</M.Label>
        <M.MyItemContainer>
          <M.Text>사업자 등록</M.Text>
          <Arrow />
        </M.MyItemContainer>
        <M.HLine />
        <M.MyItemContainer>
          <M.Text>사업자 조회</M.Text>
          <Arrow />
        </M.MyItemContainer>
        <M.HLine />
        <M.MyItemContainer>
          <M.Text>사업자 삭제</M.Text>
          <Arrow />
        </M.MyItemContainer>
      </M.MyContentContainer>
      <M.MyContentContainer>
        <M.Label>알림</M.Label>
        <M.MyItemContainer>
          <M.Text>알림 수신여부</M.Text>
          <Arrow />
        </M.MyItemContainer>
        <M.HLine />
        <M.MyItemContainer>
          <M.Text>키워드 알림받기</M.Text>
          <Arrow />
        </M.MyItemContainer>
        <M.HLine />
        <M.MyItemContainer>
          <M.Text>키워드 설정하기</M.Text>
          <Arrow />
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
          <Arrow />
        </M.MyItemContainer>
      </M.MyContentContainer>
    </M.Layout>
  );
};

export default MyPage;
