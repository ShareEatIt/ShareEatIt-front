import styled from "styled-components";

const S = {
    Layout: styled.div`
        display: flex;
        background-color: var(--white);
        border-radius: 0.5rem;
        padding: 1rem 0.5rem;
        margin: 0 0.3rem;
        margin-bottom: 0.4rem;
    `,

    ProfileImage: styled.img`
        width: 3.125rem;
        height: 3.125rem;
        margin-right: 0.5rem;
        border-radius: 50%;
        object-fit: contain;
        background: none;
    `,

    ChatContentContainer: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;
    `,
    TitleWrapper: styled.div`
        width: 100%;
        font-size: 0.9375rem;
        font-weight: 700;
    `,
    ContentWrapper: styled.div`
        width: 100%;
        font-size: 0.8rem;
    `,
    ModifiedATWrapper: styled.div`
        font-size: 0.5rem;
    `,
};

export { S };
