import React, { useState } from "react";
import { ReactComponent as X } from "../../assets/my/x.svg";

import { M, S } from "./my";

const KeywordPage = () => {
  return (
    <M.Layout>
      키워드 목록
      <M.Background>
        <M.KeyItemContainer>
          과자
          <X />
        </M.KeyItemContainer>
      </M.Background>
    </M.Layout>
  );
};
export default KeywordPage;
