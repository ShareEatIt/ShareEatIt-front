import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatListPage from "./pages/chat/chatListPage";
import NotificationPage from "./pages/notice/notificationPage";
import ChatPage from "./pages/chat/chatPage";

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

                    <Route path="/chat" element={<ChatPage />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
