import styled from "styled-components";
import { ReactComponent as SerchIcon } from "../../assets/common/SearchIcon.svg";
const S = {
    Layout: styled.div`
        display: flex;
        min-height: 100vh; /* 최소 높이를 화면 전체로 설정 */
        box-sizing: border-box;
        overflow: hidden;
        flex-direction: column;
        justify-content: center;
        //border: solid 2px pink;
    `,
    ChatListWholeWrapper: styled.div`
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    `,
    TitleWrapper: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 2.8125rem;
        margin: 1rem 0;
        background-color: var(--white);
        font-weight: bold;
    `,
    ChatListContainer: styled.div``,
    SearchBarContainer: styled.div`
        display: flex;
        align-items: center;
        border: solid 1px #e3e3e3;
        border-radius: 10px;
        background-color: var(--white);
        box-sizing: border-box;
        padding: 0.3rem 0.5rem;
    `,
    SerchBarIcon: styled(SerchIcon)`
        color: #e3e3e3;
    `,
    SerchInput: styled.input`
        width: 100%;
        margin: 0 0.5rem;

        &::placeholder {
            color: #e3e3e3;
        }
    `,
};

export { S };
