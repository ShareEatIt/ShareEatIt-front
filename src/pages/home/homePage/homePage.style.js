import styled from "styled-components";
import { ReactComponent as SerchIcon } from "../../../assets/common/SearchIcon.svg";
import { ReactComponent as PenIcon } from "../../../assets/common/pen.svg";
import { ReactComponent as MapIcon } from "../../../assets/common/map.svg";
const S = {
    Layout: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;

        width: 100%;
        min-height: 100vh; /* 최소 높이를 화면 전체로 설정 */
        box-sizing: border-box;
        overflow: hidden;
    `,
    ContentContainer: styled.div`
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        box-sizing: border-box;
    `,
    SectionContainer: styled.div`
        box-sizing: border-box;
        margin-left: 0.5rem;
        padding-top: 2rem;
    `,
    SectionClassificationButton: styled.button`
        padding: 0.35rem 1.25rem;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        background-color: transparent;
        color: var(--white);
        padding-top: ${({ $isActive }) => ($isActive ? "0.75rem" : "0.35rem")};
    `,
    SectionWrapper: styled.div`
        flex-grow: 1;
        box-sizing: border-box;
        background-color: var(--yellow-50);
    `,
    SectionContentContainer: styled.div`
        box-sizing: border-box;
        padding: 1.06rem 1rem;
    `,
    SearchBarContainer: styled.div`
        display: flex;
        align-items: center;
        border-radius: 5px;
        background-color: var(--white);
        filter: drop-shadow(0px 2px 2px rgba(255, 184, 73, 0.3));
        box-sizing: border-box;
        padding: 0.3rem 0.5rem;
    `,
    SerchBarIcon: styled(SerchIcon)``,
    SerchInput: styled.input`
        width: 100%;
        margin: 0 0.5rem;

        &::placeholder {
            color: var(--yellow-90);
        }
    `,

    MapButton: styled(MapIcon)`
        position: fixed; /* 화면에 고정 */
        bottom: 80px; /* 하단에서 20px */
        right: 20px; /* 오른쪽에서 20px */
        border: none;
        cursor: pointer;
        font-size: 16px;
    `,

    WriteButton: styled(PenIcon)`
        position: fixed; /* 화면에 고정 */
        bottom: 20px; /* 하단에서 20px */
        right: 20px; /* 오른쪽에서 20px */
        border: none;
        cursor: pointer;
        font-size: 16px;
    `,
};

export { S };
