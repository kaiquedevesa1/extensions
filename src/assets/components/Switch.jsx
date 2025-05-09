import React from "react";
import Switch from "@mui/material/Switch";

const SwitchesSize = ({ isChecked, onChange }) => {
  return (
    <Switch
      checked={isChecked}
      onChange={(event, checked) => onChange(checked)}
      sx={{
        "& .MuiSwitch-track": {
          border: "1px solid transparent",
        },
        "& .MuiSwitch-switchBase.Mui-checked": {
          color: "#f25c54",
        },
        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
          backgroundColor: "#f25c54",
          borderColor: "#f25c54",
          opacity: 1,
        },
      }}
    />
  );
};

export default SwitchesSize;
