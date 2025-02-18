import {
    BellWrapper,
    ChatWrapper,
    M,
    MyPageWrapper,
    S,
} from "./navigationBar.style";

const NavigationBar = () => {
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
