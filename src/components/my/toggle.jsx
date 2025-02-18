import { useState } from "react";
import { M } from "./toggle.style"; // S는 사용되지 않으므로 제거

const Toggle = ({ checked, onChange }) => {
  return (
    <M.ToggleSwitch>
      <M.Input type="checkbox" checked={checked} onChange={onChange} />
      <M.Slider />
    </M.ToggleSwitch>
  );
};

export default Toggle;
