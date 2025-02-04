import styled from "styled-components";
import DropDown from "./dropDown";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const S = {
    Layout: styled.div`
        box-sizing: border-box;
        margin: 0rem 1.5rem;
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

        padding: 0.2rem 0.6rem;
        border-radius: 5px;
        border: solid 1.5px
            ${({ isFocused }) => (isFocused ? "#ffb849" : "black")};
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
        border: solid 1.5px;
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
        border: 1.5px solid black;
        cursor: pointer;
        font-size: 24px;
        font-weight: bold;
    `,

    HiddenInput: styled.input`
        display: none;
    `,

    StyledCalendarWrapper: styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
    `,
};
const StyledCalendar = styled(Calendar)``;
export { S, StyledCalendar };
