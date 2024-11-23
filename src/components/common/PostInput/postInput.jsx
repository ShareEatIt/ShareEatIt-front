import { useState } from "react";
import { S } from "./postInput.style";

export const PostInput = ({ text }) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <S.Layout>
            <S.TitleWrapper>{`${text} *`}</S.TitleWrapper>
            <S.InputWrapper
                isFocused={isFocused}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </S.Layout>
    );
};

export const DateInput = ({ text }) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <S.Layout>
            <S.TitleWrapper>{`${text} *`}</S.TitleWrapper>
            <S.InputWrapper
                isFocused={isFocused}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </S.Layout>
    );
};

export const AdditionalInput = ({ text }) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <S.Layout>
            <S.TitleWrapper>{`${text} *`}</S.TitleWrapper>
            <S.InputWrapper
                isFocused={isFocused}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </S.Layout>
    );
};

export const TradePlace = ({ text }) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <S.Layout>
            <S.TitleWrapper>{`${text} *`}</S.TitleWrapper>
            <S.InputWrapper
                isFocused={isFocused}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </S.Layout>
    );
};
