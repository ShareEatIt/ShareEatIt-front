import { useNavigate } from "react-router-dom";
import { ChatCard } from "../../components/chat/card";
import NavigationBar from "../../components/common/Navigition/navigationBar";
import { S } from "./chatListPage.style";
import { useEffect } from "react";

const ChatListPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"))?.accessToken;
        console.log("토큰" + token);
        if (!token) {
            console.error("토큰이 없습니다. 로그인 페이지로 이동합니다.");
            navigate("/login"); // 로그인 페이지로 리다이렉트
        }
    }, [navigate]);

    return (
        <S.Layout>
            <NavigationBar />
            <S.ChatListWholeWrapper>
                <S.TitleWrapper>채팅</S.TitleWrapper>
                <ChatCard />
            </S.ChatListWholeWrapper>
        </S.Layout>
    );
};
export default ChatListPage;
