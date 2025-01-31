import styled from "styled-components";

const S = {
    Layout: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        border: 2px solid red;
    `,
    IntroContainer: styled.div`
        display: flex;
        justify-content: space-around;
        border: 2px solid orange;
        width: 100%;
    `,
    ImageWrapper: styled.div`
        display: flex;
        flex-direction: column;

        align-items: center;
        height: 200px;
        width: 200px;
        border: 2px solid green;
    `,

    TextWrapper: styled.div`
        display: flex;
        flex-direction: column;

        align-items: center;
        text-align: center;
        width: 200px;
        white-space: pre-wrap;
        border: 2px solid green;
    `,
};

export { S };
