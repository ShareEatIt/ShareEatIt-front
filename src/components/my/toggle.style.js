import styled from "styled-components";

const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: var(--white);
    border-color: var(--yellow-100);
  }

  > .toggle-checked {
    background-color: var(--yellow-40);
    transition: 0.5s;
  }
  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: var(--yellow-100);
    transition: 0.5s;
  }
  > .toggle-checked {
    left: 27px;
    transition: 0.5s;
  }
`;

export default ToggleContainer;
