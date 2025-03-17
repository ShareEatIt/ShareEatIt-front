import { M } from "../../pages/notice/notification.style";
const NotificationItem = ({ data }) => {
  return (
    <M.NotiContainer>
      <M.NotiTitle>{data.title}</M.NotiTitle>
      <M.NotiContent>{data.message}</M.NotiContent>
    </M.NotiContainer>
  );
};
export default NotificationItem;
