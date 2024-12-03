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
        width: 6.4375rem;
        height: 6.25rem;
        margin-right: 0.69rem;
        border-radius: 0.5rem;

        object-fit: contain;
    `,

    CardContent: styled.div`
        display: flex;
        flex-direction: column;
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
        color: var(--yellow-100);
        margin-left: 0.5rem;
        white-space: pre-wrap;
    `,
    ShareTime: styled.div`
        margin-top: 0.4rem;
        font-size: 0.62rem;
    `,

    CardDetailButton: styled.button``,
};

export { S };
