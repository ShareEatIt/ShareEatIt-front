import styled from "styled-components";

const S = {
    Layout: styled.div`
        display: flex;
        width: 100%;
        height: 300px;
        background-color: var(--yellow-40);
        overflow: hidden; /* 이미지가 영역을 초과하지 않도록 처리 */
        position: relative; /* 내부 절대 위치 요소를 지원 */
    `,

    Image: styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover; /* 이미지 비율 유지하며 컨테이너 채우기 */
    `,
    SliderButton: styled.button`
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 10;

        &.left {
            left: 10px;
        }

        &.right {
            right: 10px;
        }
    `,
};
export { S };
