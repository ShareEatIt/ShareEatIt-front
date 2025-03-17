import styled from "styled-components";

const S = {
    Layout: styled.div`
        display: flex;
        flex-direction: row;
        margin: 0.5rem 1rem;
        padding: 0.5rem 0.5rem;
        justify-content: start;
        box-sizing: border-box;
        background-color: var(--white);
        border-radius: 0.5rem;
    `,
    CardImage: styled.img`
        display: flex;
        align-items: center;
        width: 6.4375rem;
        height: 6.25rem;
        margin-right: 0.69rem;
        border-radius: 0.5rem;

        object-fit: cover;
        aspect-ratio: 1 / 1;
        background-color: #f0f0f0;
    `,

    CardContent: styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 0.3rem;
    `,

    CardTitleWrapper: styled.div`
        font-weight: bold;
        margin-bottom: 0.4rem;
    `,

    ShareContainer: styled.div`
        display: flex;
        flex-direction: row;
        font-size: 0.75rem;
    `,

    ShareInfoContainer: styled.div`
        margin-left: 0.5rem;
        white-space: pre-wrap;
    `,
    ShareTime: styled.div`
        display: flex;
        justify-content: end;
        width: 100%;

        font-size: 0.62rem;
    `,

    CardDetailButton: styled.button``,
    RightBox: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 20%;
    `,
    MoreWrapper: styled.div`
        display: flex;
        justify-content: end;
        align-items: center;
        width: 100%;
        gap: 0.3rem;
        font-size: 0.75rem;
    `,
};

export { S };
