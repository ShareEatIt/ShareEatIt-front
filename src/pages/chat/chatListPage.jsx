import { ChatCard } from "../../components/chat/card";
import NavigationBar from "../../components/common/Navigition/navigationBar";
import { S } from "./chatListPage.style";
const ChatListPage = () => {
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
