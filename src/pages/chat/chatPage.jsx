import { useState } from "react";
import { S } from "./chatPage.style";
import BackButton from "../../components/common/BackButton/backButton";

const dummyMessages = [
    { id: 1, user: "이승진", text: "안녕하세요!", time: "10:30" },
    { id: 2, user: "이가은", text: "반갑습니다!", time: "10:32" },
    {
        id: 3,
        user: "이가은",
        text: "글자가 많이 들어가는 경우에는 어떻게 되어야 합니까!",
        time: "10:32",
    },
];

const ChatPage = () => {
    const [messages, setMessages] = useState(dummyMessages);
    const [inputText, setInputText] = useState("");

    const handleSendMessage = () => {
        if (inputText.trim() === "") return;

        const newMessage = {
            id: messages.length + 1,
            user: "나",
            text: inputText,
            time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
        };

        setMessages([...messages, newMessage]);
        setInputText("");
    };

    return (
        <S.Layout>
            <BackButton text={"이가은"} />
            <S.MessageContainer>
                {messages.map((msg) => (
                    <S.MessageWrapper>
                        <S.UserProfileImage />
                        <S.MessageContentContainer
                            key={msg.id}
                            isOwn={msg.user === "나"}
                        >
                            <S.MessageText>{msg.text}</S.MessageText>
                        </S.MessageContentContainer>
                    </S.MessageWrapper>
                ))}
            </S.MessageContainer>
        </S.Layout>
    );
};

export default ChatPage;
