import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { getRank, getMonthYearStat } from "../../api/sharing";
import { getMemberInfo } from "../../api/member";
import BackButton from "../../components/common/BackButton/backButton";
import { M } from "./my";
import { useEffect } from "react";

const ShareStatPage = () => {
  const [rank, setRank] = useState("");
  const [name, setName] = useState("");
  const [monthData, setMonthData] = useState([]);
  const [yearData, setYearData] = useState([]);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const readRank = async () => {
    try {
      const response = await getRank();
      setRank(response.data.data.rank);
    } catch (err) {
      console.error(err);
    }
  };
  const readMemberInfo = async () => {
    try {
      const response = await getMemberInfo();
      setName(response.data.data.nickname);
    } catch (err) {
      console.error(err);
    }
  };
  const readMonthYearStat = async () => {
    try {
      const response = await getMonthYearStat();
      // 주간 데이터 가공
      const monthStats =
        response.data.data.monthStats.currentMonthStatsList.map((item) => ({
          name: `${item.unit}주차`,
          count: item.count,
        }));
      // 월간 데이터 가공
      const yearStats = response.data.data.yearStats.currentYearStatsList.map(
        (item) => ({
          name: `${item.unit}월`,
          count: item.count,
        })
      );
      setMonth(response.data.data.monthStats.currentMonth);
      setYear(response.data.data.yearStats.currentYear);
      setMonthData(monthStats);
      setYearData(yearStats);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    readRank();
    readMemberInfo();
    readMonthYearStat();
  }, []);
  return (
    <M.Layout>
      <BackButton text="나눔 통계" />
      <M.StatTextWrapper>
        <span style={{ color: "var(--yellow-100)", fontWeight: "bold" }}>
          {name}
        </span>
        님은 전체 사용자 중
        <span style={{ color: "var(--yellow-100)", fontWeight: "bold" }}>
          {rank}
        </span>
        등이에요!
      </M.StatTextWrapper>

      {/* 주간 통계 그래프 */}
      <M.GraphContainer>
        <M.StatTitleWrapper>{month}월 주간 통계</M.StatTitleWrapper>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={monthData}
            margin={{ top: 0, right: 20, left: 20, bottom: 10 }}
            barSize={40}
          >
            <XAxis dataKey="name" tickLine={false} />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar dataKey="count" fill="var(--yellow-100)">
              <LabelList
                dataKey="count"
                position="top"
                fontSize={13}
                fontWeight="bold"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </M.GraphContainer>

      {/* 월간 통계 그래프 */}
      <M.GraphContainer>
        <M.StatTitleWrapper>{year} 월간 통계</M.StatTitleWrapper>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={yearData}
            margin={{ top: 0, right: 20, left: 20, bottom: 10 }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              tickLine={false}
              tick={{ fontSize: 13 }}
              interval={0}
            />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar dataKey="count" fill="var(--yellow-50)">
              <LabelList
                dataKey="count"
                position="top"
                fontSize={13}
                fontWeight="bold"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </M.GraphContainer>
    </M.Layout>
  );
};

export default ShareStatPage;
