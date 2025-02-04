import { useNavigate } from "react-router-dom";
import { S } from "./chatCard.style";
import { getNoticeDetail } from "../../api/notice";

import { getChatList } from "../../api/chat";
import { useEffect, useState } from "react";

import { connectWebSocket } from "./connectWebsocket";

const dummyData = [
    {
        id: 1,
        username: "이가은",
        lastchat: "안녕하세요!",
    },
    {
        id: 2,
        username: "이여진",
        lastchat: "안녕하세요 반가워요!",
    },
];

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

    const handleClick = (chatRoomId, title, profileImage) => {
        navigate(`/chatlist/${chatRoomId}`, {
            state: {
                title,
                profileImage,
            },
        });
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
                    onClick={() =>
                        handleClick(
                            item.chatRoomId,
                            item.opponent,
                            "https://shareeat-github-actions-s3-bucket.s3.ap-northeast-2.amazonaws.com/images/cdc917cf-1f1f-46ce-8b26-fa055fad9def_unnamed.jpg"
                        )
                    }
                >
                    <S.ProfileImage src="https://shareeat-github-actions-s3-bucket.s3.ap-northeast-2.amazonaws.com/images/cdc917cf-1f1f-46ce-8b26-fa055fad9def_unnamed.jpg" />
                    <S.ChatContentContainer>
                        <S.TitleWrapper>{item.opponent}</S.TitleWrapper>
                        <S.ContentWrapper> </S.ContentWrapper>
                        <S.ModifiedATWrapper>
                            {item.modifiedAt}
                        </S.ModifiedATWrapper>
                    </S.ChatContentContainer>
                </S.Layout>
            ))}
        </>
    );
};

const NotiCard = ({ data }) => {
    const { title, message } = data;
    return (
        <S.Layout>
            <S.ChatContentContainer>
                <S.TitleWrapper>{title}</S.TitleWrapper>
                <S.ContentWrapper>{message}</S.ContentWrapper>
            </S.ChatContentContainer>
        </S.Layout>
    );
};

export { ChatCard, NotiCard };
