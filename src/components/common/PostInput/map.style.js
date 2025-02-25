import styled from "styled-components";
import { ReactComponent as SerchIcon } from "../../../assets/common/SearchIcon.svg";

const S = {
    Layout: styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        width: 100%;
    `,
    MapContainer: styled.div`
        width: 100vw; /* 화면의 전체 너비 */
        height: 100vh;
    `,
    MapWrapper: styled.div`
        width: 100%;
        height: auto;
    `,
    SearchBarWrapper: styled.div`
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        border-radius: 5px;
    `,
    SearchForm: styled.form`
        width: 100%;

        box-sizing: border-box;
    `,
    SearchInput: styled.input`
        border-radius: 5px;
        width: 93%;
        height: 1.8rem;
        padding: 0 0.5rem;

        box-sizing: border-box;
    `,
    SerchBarIcon: styled(SerchIcon)`
        margin: 0 0.5rem;
        padding-top: 0.1rem;
        fill: black;
    `,
    SearchButton: styled.button`
        border: solid 1.5px black;
    `,
};

export { S };
