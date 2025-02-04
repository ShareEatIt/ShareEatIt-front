import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { getPostDetail } from "../../../api/sharing";

import { ReactComponent as ETCIcon } from "../../../assets/chat/etc.svg";
import { S } from "./backButton.style";

const ChatBackButton = ({ text, profileImg }) => {
    const [ProfileImg, setSenderProfileImg] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen); // 드롭다운 상태 토글
    };

    const handleOptionClick = (option) => {
        setIsDropdownOpen(false); // 드롭다운 닫기
        switch (option) {
            case "status":
                console.log("나눔 상태 변경 클릭");
                // 나눔 상태 변경 로직 추가
                break;
            case "leave":
                console.log("채팅방 나가기 클릭");
                // 채팅방 나가기 로직 추가
                break;
            case "report":
                console.log("신고하기 클릭");
                // 신고하기 로직 추가
                break;
            default:
                break;
        }
    };

    return (
        <S.Layout>
            <S.BarLeftContainer>
                <S.BackButtonIcon onClick={() => navigate(-1)} />
                <S.UserImg src={profileImg} alt="프로필 이미지" />
                <S.TextWrapper>{text}</S.TextWrapper>
            </S.BarLeftContainer>
            <S.ETCBTNWrapper onClick={handleDropdownToggle}>
                <ETCIcon />
                {isDropdownOpen && (
                    <S.Dropdown>
                        <S.DropdownOption
                            onClick={() => handleOptionClick("status")}
                        >
                            나눔 상태 변경
                        </S.DropdownOption>
                        <S.DropdownOption
                            onClick={() => handleOptionClick("leave")}
                        >
                            채팅방 나가기
                        </S.DropdownOption>
                        <S.DropdownOption
                            onClick={() => handleOptionClick("report")}
                        >
                            신고하기
                        </S.DropdownOption>
                    </S.Dropdown>
                )}
            </S.ETCBTNWrapper>
        </S.Layout>
    );
};

export default ChatBackButton;
