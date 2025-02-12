import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ChatListPage from "./pages/chat/chatListPage";
import NotificationPage from "./pages/notice/notificationPage";
import ChatPage from "./pages/chat/chatPage";
import MyPage from "./pages/my/myPage";
import KeywordPage from "./pages/my/keywordPage";
import ProfileEditPage from "./pages/my/profileEditPage";
import ShareStatPage from "./pages/my/shareStatPage";
import ShareStatusPage from "./pages/my/shareStatusPage";
import ParticipationStatusPage from "./pages/my/participationStatusPage";
import KakaoLoginPage from "./pages/login/LoginPage";
import OAuthRedirectPage from "./pages/login/Redirect";
import HomePage from "./pages/home/homePage/homePage";
import ReportPage from "./pages/report/reportPage";
import PostSharePage from "./pages/home/postSharePage";
import ShareDetailPage from "./pages/shareDetail/shareDetailPage";
import MapPage from "./pages/home/mapPage";
import IntroPage from "./pages/login/IntroPage";
function App() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    // 첫 방문 여부를 Local Storage에서 확인
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setIsFirstVisit(false); // 이미 방문한 적이 있다면 false로 설정
    } else {
      localStorage.setItem("hasVisited", "true"); // 첫 방문 기록 저장
    }
  }, []);
  //const HomePage = lazy(() => import("./pages/home/homePage/homePage"));
  return (
    <Routes>
      <Route path="/oauth2/authorize" element={<OAuthRedirectPage />} />
      <Route path="/login" element={<KakaoLoginPage />} />
      <Route
        path="/"
        element={isFirstVisit ? <Navigate to="/login" replace /> : <HomePage />}
      />
      <Route path="/intro" element={<IntroPage />} />
      <Route path="/postdetail/:id" element={<ShareDetailPage />} />
      <Route path="/chatlist" element={<ChatListPage />} />
      <Route path="/chatlist/:chatRoomId" element={<ChatPage />} />
      <Route path="/noti" element={<NotificationPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/keyword" element={<KeywordPage />} />
      <Route path="/profile" element={<ProfileEditPage />} />
      <Route path="/sharestat" element={<ShareStatPage />} />
      <Route path="/sharestatus" element={<ShareStatusPage />} />
      <Route path="/report" element={<ReportPage />} />
      <Route
        path="/participationstatus"
        element={<ParticipationStatusPage />}
      />
      <Route path="/mappage" element={<MapPage />} />
      <Route path="/createpost" element={<PostSharePage />} />
    </Routes>
  );
}

/*<Suspense fallback={<div>Loading...</div>}></Suspense>
<Router>
  <Suspense fallback={<div>Loading...</div>}></Suspense>
</Router>;*/

export default App;
