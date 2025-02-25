import styled from "styled-components";
import DropDown from "./dropDown";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ReactComponent as Triangle } from "../../../assets/common/triangle.svg";

const S = {
    Layout: styled.div`
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 100%;

        margin-top: 1.5rem;
        position: relative;
    `,

    TitleWrapper: styled.div`
        font-size: 1rem;
        margin-bottom: 0.5rem;
    `,

    InputWrapper: styled.input`
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 100%;
        background-color: #f5f5f5;
        padding: 0.2rem 0.6rem;
        border-radius: 10px;
        border: solid 1.5px
            ${({ isFocused }) => (isFocused ? "#ffb849" : "none")};
        &::placeholder {
        }
    `,

    DateInputWrapper: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        width: 100%;

        padding: 0.4rem 0.6rem;
        background-color: #f5f5f5;
        border-radius: 10px;
        border: solid 1.5px
            ${({ isOpen }) => (isOpen ? "#ffb849" : "transparent")};
        &::placeholder {
        }
    `,

    AdditionalInputWrapper: styled.textarea`
        display: flex;
        align-items: center;

        width: 100%;
        height: 6rem;
        box-sizing: border-box;
        padding: 0.5rem 0.5rem;
        border-radius: 5px;
        border: none;
        background-color: #f5f5f5;
        outline-color: #ffb849;
        &::placeholder {
        }
    `,

    PlaceInputWrapper: styled.div`
        display: flex;
        align-items: center;

        width: 100%;
        height: 6rem;
        border-radius: 5px;
        border: solid 1.5px;
    `,

    MenuWrapper: styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        box-sizing: border-box;
        min-height: 2rem;
        padding: 0.5rem 0.5rem;
        border-radius: 5px;
        border: solid 1.5px
            ${({ isFocused }) => (isFocused ? "#ffb849" : "black")};
        background-color: white;
        cursor: pointer;
        z-index: 10;
    `,

    DropDownWrapper: styled.div`
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        border: solid 1px #ddd;
        border-radius: 5px;
        background-color: white;
        z-index: 20;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 시각적 분리 */
    `,

    MenuItem: styled.div`
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 0.9rem;
        color: #333;
        &:hover {
            background-color: #f1f1f1;
        }
    `,

    ImageWrapper: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    `,

    ImagePreview: styled.div`
        position: relative;
        width: 100px;
        height: 100px;
        border-radius: 10px;
        overflow: hidden;
        border: 1.5 solid black;
    `,

    PreviewImage: styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
    `,

    RemoveButton: styled.button`
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: red;
        color: white;
        border: none;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        cursor: pointer;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
    `,

    UploadButton: styled.label`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        border-radius: 10px;
        background-color: #f5f5f5;
        cursor: pointer;
        font-size: 24px;
        font-weight: bold;
    `,

    HiddenInput: styled.input`
        display: none;
    `,
    Triangle: styled(Triangle)`
        width: 0.5rem;
        height: 0.5rem;
        margin-right: 0.7rem;
        color: var(--yellow-100);
    `,

    StyledCalendarWrapper: styled.div`
        display: flex;
        flex-direction: column;
        align-items: end;
        width: 100%;

        position: relative;
    `,
};
const StyledCalendar = styled(Calendar)`
    border: solid 2px var(--yellow-100);
    border-radius: 10px;
    .react-calendar__tile--now {
        background: none !important;
        color: inherit !important;
    }
    .react-calendar__tile--active {
        background: var(--yellow-70) !important;
        color: white !important;
        border-radius: 5px;
    }
`;
export { S, StyledCalendar };
