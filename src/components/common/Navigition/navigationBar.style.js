import styled from "styled-components";
import { ReactComponent as Logo } from "../../../assets/common/s_logo.svg.svg";
import { NavLink } from "react-router-dom";
const S = {
    Layout: styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        box-sizing: border-box;
        align-items: center;
    `,
    LogoImg: styled(Logo)`
        width: 12rem;
        height: auto;
        margin: 1rem;
    `,
    NavContainer: styled.div`
        display: flex;
        width: 100%;
        justify-content: space-around;
    `,
    NavLink: styled(NavLink)`
        width: 100%;
        box-sizing: border-box;
        padding: 0.5rem 1.5rem;
        border-right: 2px solid rgba(255, 255, 255, 0.4);
        color: var(--red);
        text-align: center;
        font-weight: bold;
        cursor: pointer;
        position: relative;
        &:last-child {
            border-right: none;
        }
        &.active {
            color: var(--yellow-100);
            background-color: var(--yellow-50);
        }
        &:not(:last-child)::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 2px;
            box-shadow: 1px 0px 2px 0px rgba(240, 99, 90, 0.5);
            pointer-events: none;
        }
        &:hover {
            color: var(--yellow-100);
            background-color: var(--yellow-50);
        }
    `,
};

export { S };
