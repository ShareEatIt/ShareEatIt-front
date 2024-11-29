import { useState } from "react";
import { M, S } from "./toggle.style";

const Toggle = ({ isChecked, onChange }) => (
  <M.ToggleContainer>
    <M.HiddenCheckbox type="checkbox" checked={isChecked} onChange={onChange} />
    <M.StyledSwitch className={isChecked ? "on" : "off"}>
      <M.Circle className={isChecked ? "on" : "off"} />
    </M.StyledSwitch>
  </M.ToggleContainer>
);

export default Toggle;
