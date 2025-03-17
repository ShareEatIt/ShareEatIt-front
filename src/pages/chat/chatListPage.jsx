import { useNavigate } from "react-router-dom";
import { ChatCard } from "../../components/chat/card";
import NavigationBar from "../../components/common/Navigition/navigationBar";
import { S } from "./chatListPage.style";
import { useEffect, useState } from "react";
import { getChatList } from "../../api/chat";

// 더미데이터
const dummyChatList = [
    {
        chatRoomId: 1,
        opponent: "이가은",
        lastChat: "안녕하세요!",
        modifiedAt: "2024-03-17 12:30",
    },
    {
        chatRoomId: 2,
        opponent: "이여진",
        lastChat: "반가워요~",
        modifiedAt: "2024-03-17 14:10",
    },
    {
        chatRoomId: 3,
        opponent: "김철수",
        lastChat: "오늘 저녁 어때요?",
        modifiedAt: "2024-03-17 16:00",
    },
    {
        chatRoomId: 4,
        opponent: "박영희",
        lastChat: "좋아요! 연락 주세요",
        modifiedAt: "2024-03-17 18:20",
    },
];

const ChatListPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"))?.accessToken;
        console.log("토큰" + token);
        if (!token) {
            console.error("토큰이 없습니다. 로그인 페이지로 이동합니다.");
            navigate("/chatlist"); // 로그인 페이지로 리다이렉트
        }
        /* const fetchChatList = async () => {
            try {
                const chatData = await getChatList();
                setChatList(chatData);
                setFilteredChatList(chatData); // 초기값 설정
            } catch (error) {
                console.error("채팅 리스트 가져오기 실패:", error);
            }
        };
        fetchChatList();*/
        // 더미 데이터 이용
        setChatList(dummyChatList);
        setFilteredChatList(dummyChatList);
    }, [navigate]);
    const [chatList, setChatList] = useState([]); // 전체 채팅 리스트
    const [filteredChatList, setFilteredChatList] = useState([]); // 검색 결과 리스트
    const [searchText, setSearchText] = useState("");
    const handleSearchChange = (e) => {
        const searchValue = e.target.value;
        setSearchText(searchValue);

        if (searchValue.trim() === "") {
            setFilteredChatList(chatList);
        } else {
            const filtered = chatList.filter((item) =>
                item.opponent.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredChatList(filtered);
        }
    };

    return (
        <S.Layout>
            <NavigationBar />
            <S.SearchBarContainer>
                <S.SerchBarIcon />
                <S.SerchInput
                    placeholder="닉네임을 검색하세요"
                    value={searchText}
                    onChange={handleSearchChange}
                />
            </S.SearchBarContainer>
            <S.ChatListWholeWrapper>
                <ChatCard chatListData={filteredChatList} />
            </S.ChatListWholeWrapper>
        </S.Layout>
    );
};
export default ChatListPage;
