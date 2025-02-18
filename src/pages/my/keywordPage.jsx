import React, { useState, useEffect } from "react";
import BackButton from "../../components/common/BackButton/backButton";
import { ReactComponent as X } from "../../assets/my/x.svg";
import { ReactComponent as Bread } from "../../assets/common/bread.svg";
import { ReactComponent as Drink } from "../../assets/common/drink.svg";
import { ReactComponent as Convenience } from "../../assets/common/convenience.svg";
import { ReactComponent as Korean } from "../../assets/common/korean.svg";
import { ReactComponent as Chinese } from "../../assets/common/chinese.svg";
import { ReactComponent as Western } from "../../assets/common/western.svg";
import { ReactComponent as Snack } from "../../assets/common/snack.svg";
import { ReactComponent as Grocery } from "../../assets/common/grocery.svg";
import { ReactComponent as Etc } from "../../assets/common/etc.svg";
import { BottomButton } from "../../components/common/BottomButton/bottomButton";

import { M, S } from "./my";
import {
  postKeyword,
  getKeywordList,
  getRegisteredList,
  patchKeywordList,
  deleteKeyword,
} from "../../api/keyword";

const KeywordPage = () => {
  const [keyword, setKeyword] = useState("");
  const [keywordList, setKeywordList] = useState([]);

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  //키워드 생성 API 연결
  const createKeyword = async (keyword) => {
    try {
      await postKeyword(keyword);
      readKeywordList();
    } catch (err) {
      console.error(err);
    }
  };

  //사용중인 키워드 리스트 조회 API 연결
  const readKeywordList = async () => {
    try {
      const response = await getKeywordList();
      setKeywordList(response.data.data.keywordList || []);
    } catch (err) {
      console.error(err);
    }
  };

  //등록이력이 있는 키워드 리스트 조회 API 연결
  const readRegisteredList = async () => {
    try {
      const response = await getRegisteredList();
    } catch (err) {
      console.error(err);
    }
  };

  //키워드 삭제 API 연결
  const removeKeyword = async (id) => {
    try {
      await deleteKeyword(id);
      readKeywordList();
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    readKeywordList();
  }, []);
  const Keywords = [
    "간편식",
    "빵",
    "간식",
    "양식",
    "음료",
    "식료품",
    "한식",
    "중식",
    "일식",
    "기타",
  ];

  return (
    <M.Layout>
      <BackButton text="키워드 설정" />
      <M.KeywordContainer>
        <M.KeywordWrapper>
          <Bread />빵
        </M.KeywordWrapper>
        <M.KeywordWrapper>
          <Drink />
          음료
        </M.KeywordWrapper>
        <M.KeywordWrapper>
          <Convenience />
          간편식
        </M.KeywordWrapper>
        <M.KeywordWrapper>
          <Korean />
          한식
        </M.KeywordWrapper>
        <M.KeywordWrapper>
          <Chinese />
          중식
        </M.KeywordWrapper>
        <M.KeywordWrapper>
          <Western />
          양식
        </M.KeywordWrapper>
        <M.KeywordWrapper>
          <Snack />
          간식
        </M.KeywordWrapper>
        <M.KeywordWrapper>
          <Grocery />
          식료품
        </M.KeywordWrapper>
        <M.KeywordWrapper>
          <Etc />
          기타
        </M.KeywordWrapper>
      </M.KeywordContainer>
      <BottomButton text="키워드 등록" />
    </M.Layout>
  );
};
export default KeywordPage;
