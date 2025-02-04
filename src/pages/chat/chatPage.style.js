import styled from "styled-components";
import { ReactComponent as SendIcon } from "../../assets/chat/send.svg";

const S = {
    Layout: styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        background-color: #fff; /* 배경 흰색 */
    `,
    MessageContainer: styled.div`
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        margin-bottom: 3.5rem;
        gap: 0.5rem;
        overflow-y: auto;
        box-sizing: border-box;
    `,
    MessageWrapper: styled.div`
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        ${(props) =>
            props.isOwn &&
            `
            flex-direction: row-reverse; /* 본인 메시지는 반대 정렬 */
        `}
    `,
    UserProfileImage: styled.div`
        width: 2.3rem;
        height: 2.3rem;
        margin-right: 0.5rem;
        border-radius: 50%;
        background: lightgray;
        object-fit: cover;
    `,
    MessageContentContainer: styled.div`
        max-width: 70%;
    `,
    MessageText: styled.div`
        padding: 0.8rem 1rem;
        font-size: 0.9rem;

        background-color: ${(props) =>
            props.senderId === props.currentUserId
                ? "var(--yellow-90)"
                : "var(--yellow-50)"};
        color: ${(props) => (props.isOwn ? "#000" : "#333")};
        border-radius: 0.625rem;
        word-wrap: break-word;
        word-break: break-word;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    `,
    MessageTime: styled.div`
        font-size: 0.75rem;
        color: #aaa;
        margin-top: 0.25rem;
        text-align: ${(props) => (props.isOwn ? "right" : "left")};
    `,
    InputContainer: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;

        position: fixed;
        bottom: 0;
        width: 100%;
        height: 3.5rem;
        input {
            flex: 1;
            padding: 0.5rem;
            font-size: 0.9rem;
            border: 1px solid #ccc;
            border-radius: 10px;
            margin: 0 0.5rem;
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        button {
            background-color: var(--yellow-75);
            border: none;
            border-radius: 10px;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;
        }

        button:hover {
            background-color: #ffc000;
        }
    `,
};

export { S };
