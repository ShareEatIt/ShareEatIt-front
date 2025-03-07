import React, { useState } from "react";
import { SearchMap } from "./map";
import { S, StyledCalendar } from "./postInput.style";
import Calendar from "react-calendar";
import moment from "moment";

export const PostInput = ({ text, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <S.Layout>
            <S.TitleWrapper>{`${text} *`}</S.TitleWrapper>
            <S.InputWrapper
                isFocused={isFocused}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => onChange(e.target.value)}
            />
        </S.Layout>
    );
};

export const CalendarInput = ({ text, onChange }) => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
        if (onChange) {
            onChange(moment(newDate).format("YYYY-MM-DD")); // 선택한 날짜를 YYYY-MM-DD 형식으로 전달
        }
    };

    return (
        <S.Layout>
            <S.TitleWrapper>{`${text} *`}</S.TitleWrapper>
            <S.StyledCalendarWrapper>
                <StyledCalendar
                    value={date}
                    onChange={handleDateChange}
                    formatDay={(locale, date) => moment(date).format("D")} // 일 제거하고 숫자만 표시
                    formatYear={(locale, date) => moment(date).format("YYYY")} // 네비게이션에서 년도만 표시
                    formatMonthYear={(locale, date) =>
                        moment(date).format("YYYY. MM")
                    }
                    calendarType="gregory"
                    showNeighboringMonth={false}
                    next2Label={null}
                    prev2Label={null}
                    minDetail="year"
                />
            </S.StyledCalendarWrapper>
        </S.Layout>
    );
};
export const DateInput = ({ text, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [date, setDate] = useState("");
    const format = "YYYY-MM-DD";

    const handleChangeDate = (e) => {
        // 숫자만 유지
        let inputValue = e.target.value.replace(/[^0-9]/g, "");

        // 최대 8자리까지만 허용 (YYYYMMDD)
        if (inputValue.length > 8) {
            inputValue = inputValue.slice(0, 8);
        }

        // YYYY-MM-DD 형식으로 변환
        const formattedDate = inputValue.replace(
            /(\d{4})(\d{2})?(\d{2})?/,
            (match, year, month, day) => {
                if (day) return `${year}-${month}-${day}`;
                if (month) return `${year}-${month}`;
                return `${year}`;
            }
        );

        setDate(formattedDate);

        if (onChange) {
            onChange(formattedDate);
        }
    };

    return (
        <S.Layout>
            <S.TitleWrapper>{`${text} *`}</S.TitleWrapper>
            <S.InputWrapper
                isFocused={isFocused}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                type="text"
                value={date}
                placeholder="YYYY-MM-DD"
                onChange={handleChangeDate}
            />
        </S.Layout>
    );
};

export const DateInputEndAt = ({ text, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [date, setDate] = useState("");
    const format = "YYYY-MM-DD";

    const handleChangeDate = (e) => {
        // 숫자만 유지
        let inputValue = e.target.value.replace(/[^0-9]/g, "");

        // 최대 8자리까지만 허용 (YYYYMMDD)
        if (inputValue.length > 8) {
            inputValue = inputValue.slice(0, 8);
        }

        // YYYY-MM-DD 형식으로 변환
        const formattedDate = inputValue.replace(
            /(\d{4})(\d{2})?(\d{2})?/,
            (match, year, month, day) => {
                if (day) return `${year}-${month}-${day}`;
                if (month) return `${year}-${month}`;
                return `${year}`;
            }
        );

        setDate(formattedDate);
        const dateWithTime = formattedDate ? `${formattedDate}T00:00:00` : "";
        if (onChange) {
            onChange(dateWithTime);
        }
    };
    return (
        <S.Layout>
            <S.TitleWrapper>{`${text} *`}</S.TitleWrapper>
            <S.InputWrapper
                isFocused={isFocused}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                type="text"
                value={date}
                placeholder="YYYY-MM-DD"
                onChange={handleChangeDate}
            />
        </S.Layout>
    );
};

export const AdditionalInput = ({ text, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <S.Layout>
            <S.TitleWrapper>{`${text} *`}</S.TitleWrapper>
            <S.AdditionalInputWrapper
                isFocused={isFocused}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => onChange(e.target.value)}
            />
        </S.Layout>
    );
};

export const TradePlace = ({ text, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);
    const handlePlaceSelect = (place) => {
        if (onChange) {
            onChange(place);
        }
    };
    return (
        <S.Layout>
            <S.TitleWrapper>{`${text} *`}</S.TitleWrapper>
            <SearchMap onPlaceSelect={handlePlaceSelect} />
        </S.Layout>
    );
};
