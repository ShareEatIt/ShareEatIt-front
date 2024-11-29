import { useNavigate } from "react-router-dom";
import { S } from "./chatCard.style";

import { getChatList } from "../../api/chat";
import { useEffect, useState } from "react";

import { connectWebSocket } from "./connectWebSocket";

const ChatCard = () => {
    const [chatListData, setChatListData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchChatList = async () => {
            try {
                const token = JSON.parse(
                    localStorage.getItem("token")
                )?.accessToken;
                if (!token) {
                    throw new Error(
                        "토큰이 없습니다. 로그인 페이지로 이동하세요."
                    );
                }
                const chatListData = await getChatList();
                setChatListData(chatListData);
                console.log("여아래가 데이터");
                console.log(chatListData);
            } catch (err) {
                console.log("채팅리스트 가져오기 실패", err);
            } finally {
                setLoading(false); // 로딩 상태 해제
            }
        };
        fetchChatList();
    }, []);

    const navigate = useNavigate();

    const handleClick = (chatRoomId) => {
        navigate(`/chatlist/${chatRoomId}`);
        const token = JSON.parse(localStorage.getItem("token"))?.accessToken;

        if (!token) {
            console.error("토큰이 없습니다. WebSocket에 연결할 수 없습니다.");
            return;
        }

        // 소켓 연결
        connectWebSocket(chatRoomId, token);
        console.log(`WebSocket 연결 시도: 채팅방 ID ${chatRoomId}`);
    };

    if (loading) return <div>로딩 중...</div>; // 로딩 중 메시지

    return (
        <>
            {chatListData.map((item) => (
                <S.Layout
                    key={item.chatRoomList}
                    onClick={() => handleClick(item.chatRoomId)}
                >
                    <S.ProfileImage />
                    <S.ChatContentContainer>
                        <S.TitleWrapper>{item.chatRoomId}</S.TitleWrapper>
                        <S.ContentWrapper>{item.status}</S.ContentWrapper>
                        <S.ModifiedATWrapper>
                            {item.modifiedAt}
                        </S.ModifiedATWrapper>
                    </S.ChatContentContainer>
                </S.Layout>
            ))}
        </>
    );
};

const NotiCard = () => {
    return (
        <S.Layout>
            <S.ChatContentContainer>
                <S.TitleWrapper>물건 등록 알림</S.TitleWrapper>
                <S.ContentWrapper>
                    근처에서 이승진님이 좋아하실 물건이 등록되었어요!~
                </S.ContentWrapper>
            </S.ChatContentContainer>
        </S.Layout>
    );
};

export { ChatCard, NotiCard };
