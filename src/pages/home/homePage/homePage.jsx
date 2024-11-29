import { useState } from "react";
import BackButton from "../../../components/common/BackButton/backButton";
import BottomButton from "../../../components/common/BottomButton/bottomButton";
import NavigationBar from "../../../components/common/Navigition/navigationBar";
import ImgSlider from "../../../components/home/ImgSlider";
import { S } from "./homePage.style";
import ShareList from "../../../components/common/ShareList/shareList";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const menuList = ["전체", "가게", "개인"];
  const colorList = [
    "var(--yellow-90)",
    "var(--yellow-75)",
    "var(--yellow-50)",
  ];
  const [clicked, setClicked] = useState(menuList[0]);

  const handleClick = (item) => {
    setClicked(item);
  };

  const navigate = useNavigate();

  const handlePosetClick = (id) => {
    navigate(`/postdetail/${id}`);
  };

  const dummyList = [
    { id: 1, title: "게시물 1" },
    { id: 2, title: "게시물 2" },
    { id: 3, title: "게시물 3" },
  ];

  return (
    <S.Layout>
      <NavigationBar />
      <ImgSlider />
      <S.ContentContainer>
        <S.SectionContainer>
          {menuList.map((item, index) => (
            <S.SectionClassificationButton
              key={index}
              onClick={() => handleClick(item)}
              $isActive={clicked === item}
              style={{ backgroundColor: colorList[index] }}
            >
              {item}
            </S.SectionClassificationButton>
          ))}
        </S.SectionContainer>
        <S.SectionWrapper>
          <S.SectionContentContainer>
            <S.SearchBarContainer>
              <S.SerchBarIcon />
              <S.SerchInput placeholder="검색하세요" />
            </S.SearchBarContainer>
          </S.SectionContentContainer>
          <ShareList />
        </S.SectionWrapper>
      </S.ContentContainer>
    </S.Layout>
  );
};
export default HomePage;
