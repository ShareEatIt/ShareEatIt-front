import { useState } from "react";
import ToggleContainer from "./toggle.style";
const Toggle = () => {
  const [on, setOn] = useState(false);
  const toggleHandler = () => {
    setOn(!on);
  };
  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${on ? "toggle-checked" : null}`} />
        <div className={`toggle-circle ${on ? "toggle-checked" : null}`} />
      </ToggleContainer>
    </>
  );
};
export default Toggle;
