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

        @media (max-width: 749px) {
            width: 100%;
        }
        @media (min-width: 750px) {
            max-width: 750px;
            margin: 0 auto;
        }
    `,
    ContentContainer: styled.div`
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        box-sizing: border-box;
    `,
    SectionContainer: styled.div`
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding-top: 2rem;
    `,
    SectionClassificationButton: styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0.35rem 1.25rem;
        gap: 0.5rem;
        background-color: transparent;
        color: ${({ $isActive }) =>
            $isActive ? "var(--yellow-100)" : "#D4D4D4"};

        border-bottom: ${({ $isActive }) =>
            $isActive
                ? "2px solid var(--yellow-100)"
                : "2px solid transparent"};
    `,
    SectionWrapper: styled.div`
        flex-grow: 1;
        box-sizing: border-box;
        // 선택된 메뉴 값에 따라 배경 색 변경
    `,
    SectionContentContainer: styled.div`
        box-sizing: border-box;
        padding: 1.06rem 1rem;
    `,
    SearchBarContainer: styled.div`
        display: flex;
        align-items: center;
        border: solid 1px var(--yellow-100);
        border-radius: 10px;
        background-color: var(--white);
        box-sizing: border-box;
        padding: 0.3rem 0.5rem;
    `,
    SerchBarIcon: styled(SerchIcon)`
        color: var(--yellow-90);
    `,
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
