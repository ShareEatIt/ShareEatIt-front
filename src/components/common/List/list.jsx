import { useState } from "react";
import { S } from "./list.style";
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
          <ShareList />
        </S.SectionWrapper>
      </S.ContentContainer>
    </S.Layout>
  );
};
export default HomePage;
