import { NotiCard } from "../../components/chat/card";
import NavigationBar from "../../components/common/Navigition/navigationBar";
import { S } from "../chat/chatListPage.style";
import { getNotice } from "../../api/notice";
import { useState, useEffect } from "react";

const NotificationPage = () => {
  const [notiList, setNotiList] = useState([]);

  const readNotice = async () => {
    try {
      const response = await getNotice();
      const noticeList = response.data.data.noticeList;
      console.log(noticeList);
      setNotiList(noticeList);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    readNotice();
  }, []);

  return (
    <S.Layout>
      <NavigationBar />
      <S.ChatListWholeWrapper>
        <S.TitleWrapper>알림 목록</S.TitleWrapper>
        {notiList.length > 0 ? (
          notiList.map((item) => {
            return (
              <li key={item.id}>
                <NotiCard data={item} />
              </li>
            );
          })
        ) : (
          <div>알림이 없습니다</div>
        )}
      </S.ChatListWholeWrapper>
    </S.Layout>
  );
};
export default NotificationPage;
