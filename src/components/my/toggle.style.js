import React from "react";
import styled from "styled-components";

const M = {
  ToggleSwitch: styled.label`
    position: relative;
    width: 36px;
    height: 20px;
  `,

  Input: styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background-color: var(--yellow-100);
    }

    &:checked + span:before {
      transform: translateX(16px);
    }
  `,

  Slider: styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--gray-200);
    border-radius: 34px;
    transition: 0.3s;

    &:before {
      position: absolute;
      content: "";
      height: 14px;
      width: 14px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      border-radius: 50%;
      transition: 0.3s;
    }
  `,
};
const S = {};
export { M, S };
