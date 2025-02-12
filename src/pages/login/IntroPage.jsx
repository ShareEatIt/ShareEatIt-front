import styled from "styled-components";
import { M, S } from "./login";
import { ReactComponent as Trashcan } from "../../../src/assets/login/trashcan.svg";
import { ReactComponent as Co2 } from "../../../src/assets/login/co2.svg";
import { ReactComponent as Arrow } from "../../../src/assets/login/arrow.svg";
import { ReactComponent as ArrowB } from "../../../src/assets/login/arrow_black.svg";
import { ReactComponent as Logo } from "../../../src/assets/common/logo_img.svg";
import { useState, useEffect } from "react";

// 특정 컴포넌트에서만 사용할 글씨체 스타일
const FontWrapper = styled.div`
  @font-face {
    font-family: "Hakgyoansim Dunggeunmiso";
    src: url("/fonts/Hakgyoansim Dunggeunmiso OTF-B.otf") format("opentype");
  }

  font-family: "Hakgyoansim Dunggeunmiso", sans-serif;
`;

const IntroPage = () => {
  const [page, setPage] = useState(1);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = (event) => {
    if (scrolling) return;
    setScrolling(true);

    if (event.deltaY > 0 && page === 1) {
      setPage(2);
    } else if (event.deltaY < 0 && page === 2) {
      setPage(1);
    }

    setTimeout(() => setScrolling(false), 600); // 부드러운 스크롤링을 위한 딜레이 적용
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [page, scrolling]);

  return (
    <FontWrapper>
      <div
        style={{
          transition: "transform 0.3s ease-in-out",
          transform: `translateY(-${(page - 1) * 100}vh)`,
        }}
      >
        <IntroPage1 />
        <IntroPage2 />
        <IntroPage3 />
      </div>
    </FontWrapper>
  );
};

const IntroPage1 = () => {
  return (
    <M.IntroLayout>
      <M.TextWrapper>
        음식물 쓰레기
        <br /> 배출량의 심각성
      </M.TextWrapper>
      <M.TextContainer>
        <M.SubtextWrapper>
          2022년 기준으로
          <br />
          서울에서만 하루평균
          <br />
          2,497.7톤의
          <br />
          음식물 쓰레기가 발생하며,
          <br />
          이는 전체 생활폐기물의 <br />
          26.3%를 차지
        </M.SubtextWrapper>
        <M.IconOverlay>
          <Trashcan />
        </M.IconOverlay>
      </M.TextContainer>
      <Arrow />
      스크롤
    </M.IntroLayout>
  );
};

const IntroPage2 = () => {
  return (
    <M.IntroLayout>
      <M.TextWrapper>
        쉐어릿의
        <br /> 시작과 탄생
      </M.TextWrapper>
      <M.TextContainer>
        <M.SubtextWrapper>
          음식물 쓰레기
          <br />
          처리 과정에서서
          <br />
          배출되는 온실가스를
          <br />
          줄이기 위한한
          <br />
          의도로 시작
        </M.SubtextWrapper>
        <M.IconOverlay>
          <Co2 />
        </M.IconOverlay>
      </M.TextContainer>
      <Arrow />
      스크롤
    </M.IntroLayout>
  );
};

const IntroPage3 = () => {
  return (
    <M.IntroLayout2>
      <M.Title>쉐어릿이란?</M.Title>
      <Logo />
      <M.Content>
        잉여식량 나눔을 실천하고자 하는 사람들과
        <br />
        나눔을 필요로하는 사람들을 연결하여
        <br />
        지역사회 네트워크를 형성하고,
        <br />
        '잉여식량 나눔 서비스를 통한 환경보호'
        <br />
        라는 목표를 달성하는
        <br />
        잉여식량 매칭 플랫폼
      </M.Content>
      <ArrowB />
      스크롤
    </M.IntroLayout2>
  );
};

export default IntroPage;
