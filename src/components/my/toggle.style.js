import styled from "styled-components";

const M = {
  ToggleContainer: styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
  `,

  HiddenCheckbox: styled.input`
    display: none;
  `,

  StyledSwitch: styled.div`
    width: 50px;
    height: 24px;
    background-color: ${({ className }) =>
      className === "on" ? "#FFD700" : "#ccc"};
    border-radius: 15px;
    position: relative;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: ${({ className }) =>
        className === "on" ? "#FFC107" : "#bbb"};
    }
  `,

  Circle: styled.div`
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: ${({ className }) => (className === "on" ? "26px" : "2px")};
    transition: left 0.3s ease-in-out;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  `,
};
const S = {};
export { M, S };
