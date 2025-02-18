import styled from "styled-components";
import { ReactComponent as Logo } from "../../../assets/common/s_logo.svg.svg";
import { ReactComponent as LogoText } from "../../../assets/navigation/LogoText.svg";
import { ReactComponent as LogoS } from "../../../assets/navigation/LogoS.svg";
import { ReactComponent as Bell } from "../../../assets/navigation/bell.svg";
import { ReactComponent as Chat } from "../../../assets/navigation/chat.svg";
import { ReactComponent as Mypage } from "../../../assets/navigation/mypage.svg";
import { NavLink } from "react-router-dom";

const ChatWrapper = styled(Chat)`
    color: #bcbcbc;
`;
const BellWrapper = styled(Bell)`
    color: #bcbcbc;
`;

const MyPageWrapper = styled(Mypage)`
    color: #bcbcbc;
`;
const S = {};
const M = {
    Layout: styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 1rem 1rem;
        box-sizing: border-box;
    `,
    LogoWrapper: styled(NavLink)`
        display: flex;
        align-items: center;
        gap: 0.2rem;
    `,
    Logo: styled(LogoS)`
        width: 20px;
        height: auto;
    `,
    LogoText: styled(LogoText)`
        width: 90px;
        height: auto;
    `,

    NavWrapper: styled.div`
        display: flex;
        align-items: center;

        gap: 1rem;
    `,
    NavButton: styled(NavLink)`
        display: flex;
        position: relative;

        &.active ${ChatWrapper} {
            color: var(--yellow-100);
        }
        &.active ${BellWrapper} {
            color: var(--yellow-100);
        }
        &.active ${MyPageWrapper} {
            color: var(--yellow-100);
        }
    `,
};

export { S, M, ChatWrapper, BellWrapper, MyPageWrapper };
