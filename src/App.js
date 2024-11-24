import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatListPage from "./pages/chat/chatListPage";
import NotificationPage from "./pages/notice/notificationPage";
import ChatPage from "./pages/chat/chatPage";
import MyPage from "./pages/my/myPage";
import KeywordPage from "./pages/my/keywordPage";
import ProfileEditPage from "./pages/my/profileEditPage";
import ShareStatPage from "./pages/my/shareStatPage";
import ShareStatusPage from "./pages/my/shareStatusPage";
import ParticipationStatusPage from "./pages/my/participationStatusPage";
import KakaoLoginPage from "./pages/login/KakaoLoginPage";
import OAuthRedirectPage from "./pages/login/Redirect";
import HomePage from "./pages/home/homePage/homePage";
import ReportPage from "./pages/report/reportPage";

function App() {
  // const HomePage = lazy(() => import("./pages/home/homePage/homePage"));
  return (
    <Routes>
      <Route path="/oauth2/authorize" element={<OAuthRedirectPage />} />
      <Route path="/login" element={<KakaoLoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/postdetail" element={<ChatListPage />} />
      <Route path="/postdetail/:id" element={<NotificationPage />} />
      <Route path="/chatlist" element={<ChatListPage />} />
      <Route path="/chatlist/:chatId" element={<ChatPage />} />
      <Route path="/noti" element={<NotificationPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/keyword" element={<KeywordPage />} />
      <Route path="/profile" element={<ProfileEditPage />} />
      <Route path="/sharestat" element={<ShareStatPage />} />
      <Route path="/sharestatus" element={<ShareStatusPage />} />
      <Route
        path="/participationstatus"
        element={<ParticipationStatusPage />}
      />{" "}
      <Route path="/report" element={<ReportPage />} />
    </Routes>
  );
}

/*<Suspense fallback={<div>Loading...</div>}></Suspense>
<Router>
  <Suspense fallback={<div>Loading...</div>}></Suspense>
</Router>;*/

export default App;
