import {
    BellWrapper,
    ChatWrapper,
    M,
    MyPageWrapper,
    S,
} from "./navigationBar.style";

const NavigationBar = ({ text }) => {
    return (
        <M.Layout>
            <M.LogoWrapper to="/home">
                <M.Logo />
                <M.LogoText />
            </M.LogoWrapper>
            <M.NavWrapper>
                <M.NavButton to="/chatlist" activeClassName="active">
                    <ChatWrapper />
                </M.NavButton>
                <M.NavButton to="/notice" activeClassName="active">
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
