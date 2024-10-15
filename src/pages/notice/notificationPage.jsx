import { NotiCard } from "../../components/chat/card";
import NavigationBar from "../../components/common/Navigition/navigationBar";
import { S } from "../chat/chatListPage.style";
const NotificationPage = () => {
    return (
        <S.Layout>
            <NavigationBar />
            <S.ChatListWholeWrapper>
                <S.TitleWrapper>알림 목록</S.TitleWrapper>
                <NotiCard />
            </S.ChatListWholeWrapper>
        </S.Layout>
    );
};
export default NotificationPage;
