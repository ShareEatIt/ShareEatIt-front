import styled from "styled-components";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import { M } from "./login";
import { ReactComponent as Text1 } from "../../../src/assets/login/text1.svg";
import { ReactComponent as Text2 } from "../../../src/assets/login/text2.svg";
import { ReactComponent as Text3 } from "../../../src/assets/login/text3.svg";
import { ReactComponent as Msg1 } from "../../../src/assets/login/msg1.svg";
import { ReactComponent as Msg2 } from "../../../src/assets/login/msg2.svg";
import { ReactComponent as Msg3 } from "../../../src/assets/login/msg3.svg";
import { ReactComponent as Trashcan } from "../../../src/assets/login/trashcan.svg";
import { ReactComponent as Co2 } from "../../../src/assets/login/co2.svg";
import { ReactComponent as Arrow } from "../../../src/assets/login/arrow.svg";
import { ReactComponent as ArrowB } from "../../../src/assets/login/arrow_black.svg";
import { ReactComponent as Logo } from "../../../src/assets/common/logo.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IntroPage = () => {
  const [page, setPage] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const navigate = useNavigate();
  const handleScroll = (event) => {
    if (scrolling) return; // 연속 스크롤 방지
    setScrolling(true);

    if (event.deltaY > 0 && page < 2) {
      setPage(page + 1);
    } else if (event.deltaY < 0 && page > 0) {
      setPage(page - 1);
    }

    setTimeout(() => setScrolling(false), 600); // 부드러운 스크롤을 위한 딜레이
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [page, scrolling]);

  return (
    <M.PageWrapper>
      <M.PageContainer style={{ transform: `translateY(-${page * 100}vh)` }}>
        <IntroPage1 />
        <IntroPage2 />
        <IntroPage3 />
      </M.PageContainer>
    </M.PageWrapper>
  );
};

const IntroPage1 = () => {
  const firstanimation = useScrollFadeIn();
  return (
    <M.PageSection>
      <M.MsgTextWrapper>
        <Msg1 />
        <Text1 />
      </M.MsgTextWrapper>
      <Trashcan {...firstanimation}></Trashcan>
      <Arrow />
    </M.PageSection>
  );
};

const IntroPage2 = () => {
  const secondanimation = useScrollFadeIn();
  return (
    <M.PageSection>
      <M.MsgTextWrapper>
        <Msg2 />
        <Text2 />
      </M.MsgTextWrapper>
      <Co2 {...secondanimation} />
      <Arrow />
    </M.PageSection>
  );
};

const IntroPage3 = () => {
  const thirdanimation = useScrollFadeIn();
  const navigate = useNavigate();
  return (
    <M.PageSection2>
      <M.MsgTextWrapper>
        <Msg3 />
        <Text3 />
      </M.MsgTextWrapper>
      <Logo {...thirdanimation} />
      <M.StyledArrowB onClick={() => navigate("/")} />
    </M.PageSection2>
  );
};

export default IntroPage;
