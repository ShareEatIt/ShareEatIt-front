import styled from "styled-components";

const S = {
    Layout: styled.div`
        display: flex;
        align-items: center;
    `,
};
const M = {
    Layout: styled.div`
        display: flex;
        flex-direction: column;
    `,
    ImageContainer: styled.div`
        display: flex;
        width: 375px;
        height: 300px;
        background-color: var(--yellow-40);
    `,
    TitleWrapper: styled.div`
        display: flex;
        justify-content: space-between;
        font-size: 24px;
        font-weight: 700;
    `,
    DetailContainer: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 3px;
    `,
    DetailContailnerVerticalAlignment: styled.div`
        display: flex;
        flex-direction: column;
        align-items: start;
        margin: 3px;
    `,
    DetailTitleWrapper: styled.div`
        display: flex;
        justify-content: space-between;
        font-size: 15px;
        font-weight: 700;
    `,
    DetailWrapper: styled.div`
        display: flex;
        align-items: center;
        font-size: 15px;
    `,
    ProfileImg: styled.img`
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-right: 0.2rem;
    `,
    VLine: styled.div`
        height: 18px;
        border: 1px solid var(--black);
        margin: 0px 7px 0px 7px;
    `,
    YellowDetail: styled.div`
        color: var(--yellow-75);
        font-size: 10px;
    `,
    TopContainer: styled.div`
        display: flex;
        align-items: center;
    `,
    //하단
    ReactionContainer: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 347px;
        height: 30px;
        padding: 10px;
        border: 1px solid var(--yellow-100);
        border-radius: 10px;
    `,

    setReactionContainer: styled.div`
        display: flex;
        flex-direction: column;

        width: 347px;
        height: 70px;
        padding: 15px;
        padding-bottom: 20px;
        border: 1px solid var(--yellow-100);
        border-radius: 10px;
    `,
    EmojiContainer: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding-top: 10px;
    `,
    DoneBtn: styled.button`
        display: flex;
        justify-content: center;
        width: 40px;
        height: 22px;
        font-size: 14px;
        background-color: var(--yellow-75);
        border: 1px solid var(--yellow-100);
        border-radius: 8px;
    `,
    StatusForm: styled.form`
        display: flex;
        flex-direction: row;
    `,
    StatusInput: styled.input`
        display: flex;
        background-color: var(--yellow-100);
    `,
    Label1: styled.label`
        display: flex;
        justify-content: center;
        background-color: var(--yellow-90);
        border-radius: 8px;
        padding: 3px;
        width: 50px;
    `,
    Label2: styled.label`
        display: flex;
        justify-content: center;
        background-color: var(--yellow-70);
        border-radius: 8px;
        padding: 3px;

        width: 25px;
    `,
    Label3: styled.label`
        display: flex;
        justify-content: center;
        background-color: var(--yellow-50);
        border-radius: 8px;
        padding: 3px;

        width: 40px;
    `,
    Textarea: styled.div`
        width: 350px;
        height: 138px;
        resize: none;
        border-radius: 10px;
        padding: 10px;
        margin-top: 10px;
        &:focus {
            border: 2px solid var(--yellow-100);
            outline: none;
        }
    `,

    DetailContainer2: styled.div`
        display: flex;
        flex-direction: column;
        margin: 3px;
    `,
    Btn: styled.button`
        font-size: 12px;
        color: var(--yellow-100);
    `,
};

export { M, S };
