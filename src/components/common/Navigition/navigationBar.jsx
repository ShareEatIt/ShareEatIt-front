//화면 상단에 있는 뒤로가기 버튼과 상단에 글자 있을 경우 그것까지 만들기
import { useNavigate } from "react-router-dom";
import {
    BellWrapper,
    ChatWrapper,
    M,
    MyPageWrapper,
    S,
} from "./navigationBar.style";

const NavigationBar = ({ text }) => {
    const nav = useNavigate();

    return (
        <M.Layout>
            <M.LogoWrapper to="/">
                <M.Logo />
                <M.LogoText />
            </M.LogoWrapper>
            <M.NavWrapper>
                <M.NavButton to="/chatlist" activeClassName="active">
                    <ChatWrapper />
                </M.NavButton>
                <M.NavButton to="/noti" activeClassName="active">
                    <BellWrapper />
                </M.NavButton>
                <M.NavButton to="/mypage" activeClassName="active">
                    <MyPageWrapper />
                </M.NavButton>
            </M.NavWrapper>
        </M.Layout>
    );
};

export default NavigationBar;
