import React, { useState, useEffect } from "react";
import { S } from "./postInput.style";

const DropDown = ({ text, options }) => {
    const [selected, setSelected] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const [isFocused, setIsFocused] = useState(false);

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
        setIsFocused(false);
    };

    useEffect(() => {
        if (!isOpen) {
            setIsFocused(false);
        }
    }, [isOpen]);

    return (
        <S.Layout>
            <S.TitleWrapper>{`${text} *`}</S.TitleWrapper>

            <S.MenuWrapper
                isSelected={!!selected}
                onClick={() => setIsOpen(!isOpen)}
                isFocused={isFocused}
                tabIndex={0}
                onFocus={() => setIsFocused(true)}
            >
                {selected || " "}
            </S.MenuWrapper>
            {isOpen && (
                <S.MenuWrapper>
                    {options.map((option, index) => (
                        <S.MenuItem
                            key={index}
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </S.MenuItem>
                    ))}
                </S.MenuWrapper>
            )}
        </S.Layout>
    );
};

export default DropDown;
