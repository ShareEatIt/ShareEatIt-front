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
import PostSharePage from "./pages/home/postSharePage";
function App() {
    const HomePage = lazy(() => import("./pages/home/homePage/homePage"));
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/postdetail" element={<ChatListPage />} />
                    <Route
                        path="/postdetail/:id"
                        element={<NotificationPage />}
                    />
                    <Route path="/chatlist" element={<ChatListPage />} />
                    <Route path="/chatlist/:chatId" element={<ChatPage />} />
                    <Route path="/noti" element={<NotificationPage />} />
                    <Route path="/createpost" element={<PostSharePage />} />

                    <Route path="/chat" element={<ChatPage />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/keyword" element={<KeywordPage />} />
                    <Route path="/profile" element={<ProfileEditPage />} />
                    <Route path="/sharestat" element={<ShareStatPage />} />
                    <Route path="/sharestatus" element={<ShareStatusPage />} />
                    <Route
                        path="/participationstatus"
                        element={<ParticipationStatusPage />}
                    />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
