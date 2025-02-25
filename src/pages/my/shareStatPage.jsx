import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import BackButton from "../../components/common/BackButton/backButton";
import { M } from "./my";

const weeklyData = [
  { name: "1주차", value: 12 },
  { name: "2주차", value: 8 },
  { name: "3주차", value: 15 },
  { name: "4주차", value: 3 },
];

const monthlyData = [
  { name: "1월", value: 5 },
  { name: "2월", value: 3 },
  { name: "3월", value: 4 },
  { name: "4월", value: 3 },
  { name: "5월", value: 12 },
  { name: "6월", value: 3 },
  { name: "7월", value: 14 },
  { name: "8월", value: 3 },
  { name: "9월", value: 10 },
  { name: "10월", value: 3 },
  { name: "11월", value: 4 },
  { name: "12월", value: 3 },
];

const ShareStatPage = () => {
  return (
    <M.Layout>
      <BackButton text="나눔 통계" />
      <M.StatTextWrapper>
        <span style={{ color: "var(--yellow-100)", fontWeight: "bold" }}>
          이승진
        </span>{" "}
        님은 전체 사용자 중{"  "}
        <span style={{ color: "var(--yellow-100)", fontWeight: "bold" }}>
          5
        </span>{" "}
        등이에요!
      </M.StatTextWrapper>

      {/* 주간 통계 그래프 */}
      <M.GraphContainer>
        <M.StatTitleWrapper>주간 통계</M.StatTitleWrapper>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={weeklyData}
            margin={{ top: 0, right: 20, left: 20, bottom: 10 }}
            barSize={40}
          >
            <XAxis dataKey="name" tickLine={false} />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar
              dataKey={(entry) => Math.min(entry.value, 10)}
              fill="var(--yellow-100)"
            >
              <LabelList
                dataKey="value" /* 원래 숫자 그대로 표시 */
                position="top"
                fontSize={14}
                fontWeight="bold"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </M.GraphContainer>

      {/* 월간 통계 그래프 */}
      <M.GraphContainer>
        <M.StatTitleWrapper>월간 통계</M.StatTitleWrapper>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={monthlyData}
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
            <Bar
              dataKey={(entry) => Math.min(entry.value, 10)}
              fill="var(--yellow-50)"
            >
              <LabelList
                dataKey="value" /* 원래 숫자 그대로 표시 */
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
