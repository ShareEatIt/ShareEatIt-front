import NavigationBar from "../../components/common/Navigition/navigationBar";
import { M } from "../notice/notification.style";
import { getNotice } from "../../api/notice";
import { useState, useEffect } from "react";
import NotificationItem from "../../pages/notice/notificationItem";
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
    <M.Layout>
      <NavigationBar />
      <M.ChatListWholeWrapper>
        {notiList.length > 0 ? (
          notiList.map((item) => {
            return <NotificationItem key={item.id} data={item} />;
          })
        ) : (
          <div></div>
        )}
      </M.ChatListWholeWrapper>
    </M.Layout>
  );
};
export default NotificationPage;
