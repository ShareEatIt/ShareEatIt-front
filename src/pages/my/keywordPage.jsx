import React, { useState, useEffect } from "react";
import BackButton from "../../components/common/BackButton/backButton";
import { ReactComponent as Bread } from "../../assets/common/bread.svg";
import { ReactComponent as Drink } from "../../assets/common/drink.svg";
import { ReactComponent as Convenience } from "../../assets/common/convenience.svg";
import { ReactComponent as Korean } from "../../assets/common/korean.svg";
import { ReactComponent as Chinese } from "../../assets/common/chinese.svg";
import { ReactComponent as Western } from "../../assets/common/western.svg";
import { ReactComponent as Snack } from "../../assets/common/snack.svg";
import { ReactComponent as Grocery } from "../../assets/common/grocery.svg";
import { ReactComponent as Etc } from "../../assets/common/etc.svg";

import { M } from "./my";
import {
  postKeyword,
  getKeywordList,
  patchKeywordList,
} from "../../api/keyword";

const KeywordPage = () => {
  const [selectedKeywords, setSelectedKeywords] = useState(new Set());

  // 키워드 클릭 시 추가 또는 사용 중지
  const handleKeywordClick = async (keyword) => {
    const upperKeyword = keyword.toUpperCase(); // 대문자로 변환하여 API와 일치
    try {
      if (selectedKeywords.has(upperKeyword)) {
        // 이미 선택된 키워드라면 사용 중지 API 호출
        await patchKeywordList(upperKeyword);
        setSelectedKeywords((prev) => {
          const newSet = new Set(prev);
          newSet.delete(upperKeyword); // 키워드 제거
          return newSet;
        });
      } else {
        // 선택되지 않은 키워드라면 생성 API 호출
        await postKeyword(upperKeyword);
        setSelectedKeywords((prev) => new Set(prev).add(upperKeyword));
      }
    } catch (err) {
      console.error(err);
    }
  };

  // 사용 중인 키워드 리스트 조회 API
  const readKeywordList = async () => {
    try {
      const response = await getKeywordList();
      const existingKeywords = new Set(
        response.data.data.keywordList
          .filter((item) => item.avail) // 사용 가능한 키워드만 필터링
          .map((item) => item.keyword) // "keyword" 필드 값만 추출하여 Set으로 변환
      );
      setSelectedKeywords(existingKeywords);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    readKeywordList();
  }, []);

  const Keywords = [
    { name: "빵", apiName: "BAKERY", icon: <Bread /> },
    { name: "음료", apiName: "BEVERAGE", icon: <Drink /> },
    { name: "간편식", apiName: "CONVENIENCEFOOD", icon: <Convenience /> },
    { name: "한식", apiName: "KOREAN", icon: <Korean /> },
    { name: "중식", apiName: "CHINESE", icon: <Chinese /> },
    { name: "양식", apiName: "WESTERN", icon: <Western /> },
    { name: "간식", apiName: "SNACK", icon: <Snack /> },
    { name: "식료품", apiName: "GROCERY", icon: <Grocery /> },
    { name: "기타", apiName: "ETC", icon: <Etc /> },
  ];

  return (
    <M.Layout>
      <BackButton text="키워드 설정" />
      <M.KeywordContainer>
        {Keywords.map((item) => (
          <M.KeywordWrapper
            key={item.name}
            onClick={() => handleKeywordClick(item.apiName)}
            style={{
              backgroundColor: selectedKeywords.has(item.apiName)
                ? "var(--yellow-100)"
                : "transparent",
            }}
          >
            {item.icon}
            {item.name}
          </M.KeywordWrapper>
        ))}
      </M.KeywordContainer>
    </M.Layout>
  );
};

export default KeywordPage;
