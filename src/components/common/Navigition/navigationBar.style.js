import styled from "styled-components";
import { ReactComponent as Logo } from "../../../assets/common/s_logo.svg.svg";
import { NavLink } from "react-router-dom";
const S = {
    Layout: styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        align-items: center;
        gap: 1rem;
    `,
    LogoImg: styled(Logo)`
        width: 10rem;
        height: auto;
    `,
    NavContainer: styled.div`
        display: flex;
        justify-content: space-between;
    `,
    NavLink: styled(NavLink)`
        padding: 0.5rem 1.5rem;
        border-right: 2px solid var(--black);
        color: var(--red);
        font-weight: bold;
        cursor: pointer;
        &:last-child {
            border-right: none;
        }
        &.active {
            color: var(--yellow-100);
            background-color: var(--yellow-40);
        }
    `,
};

export { S };
