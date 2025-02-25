import { S } from "./enumButton.style";
import { useState } from "react";
const EnumButton = ({ text, options, onChange }) => {
    const [selected, setSelected] = useState(options[0] || "");
    const handleSelect = (option) => {
        setSelected(option);

        if (onChange) onChange(option);
    };
    return (
        <S.Layout>
            <S.TitleWrapper>{`${text} *`}</S.TitleWrapper>

            <S.ButtonContainer>
                {options.map((option, index) => (
                    <S.ButtonWrapper
                        key={index}
                        isSelected={selected === option}
                        onClick={() => handleSelect(option)}
                    >
                        {option}
                    </S.ButtonWrapper>
                ))}
            </S.ButtonContainer>
        </S.Layout>
    );
};
export default EnumButton;
