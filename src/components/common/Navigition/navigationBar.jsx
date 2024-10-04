//화면 상단에 있는 뒤로가기 버튼과 상단에 글자 있을 경우 그것까지 만들기
import { useNavigate } from "react-router-dom";
import { S } from "./navigationBar.style";

const NavigationBar = ({ text }) => {
    const navmenu = [
        { name: "HOME", to: `/` },
        { name: "CHAT", to: `/chatlist` },
        { name: "NOTI", to: `/noti` },
        { name: "MY", to: `/mypage` },
    ];

    const navigate = useNavigate();

    return (
        <S.Layout>
            <S.LogoImg />
            <S.NavContainer>
                {navmenu.map((it) => (
                    <S.NavLink key={it.name} to={it.to}>
                        {it.name}
                    </S.NavLink>
                ))}
            </S.NavContainer>
        </S.Layout>
    );
};

export default NavigationBar;
