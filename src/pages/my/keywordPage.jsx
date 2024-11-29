import React, { useState, useEffect } from "react";
import BackButton from "../../components/common/BackButton/backButton";
import { ReactComponent as X } from "../../assets/my/x.svg";
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
      <M.Background>
        <M.KeywordContainer>
          {keywordList.length > 0 ? (
            keywordList.map((item) => (
              <M.KeyItemContainer key={item.id}>
                {item.keyword}
                <X onClick={() => removeKeyword(item.id)} />
              </M.KeyItemContainer>
            ))
          ) : (
            <p>등록된 키워드가 없습니다.</p>
          )}
        </M.KeywordContainer>
        <M.KeyContainer>
          {Keywords.map((keyword) => (
            <M.KeyBtn key={keyword} onClick={() => createKeyword(keyword)}>
              {keyword}
            </M.KeyBtn>
          ))}
        </M.KeyContainer>
      </M.Background>
    </M.Layout>
  );
};
export default KeywordPage;
