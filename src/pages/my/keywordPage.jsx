import React, { useState } from "react";
import BackButton from "../../components/common/BackButton/backButton";
import { ReactComponent as X } from "../../assets/my/x.svg";

import { M, S } from "./my";

const KeywordPage = () => {
  const [keyword, setKeyword] = useState("");
  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <M.Layout>
      <BackButton text="키워드 설정" />
      키워드 목록
      <M.Background>
        <M.KeyItemContainer>
          과자
          <X />
        </M.KeyItemContainer>
        <M.KeyContainer>
          <M.KeyTextarea
            placeholder="키워드를 입력해주세요"
            onChange={handleInputChange}
          ></M.KeyTextarea>
          <M.KeyBtn>등록</M.KeyBtn>
        </M.KeyContainer>
      </M.Background>
    </M.Layout>
  );
};
export default KeywordPage;
