import React from "react";
import Switch from "@mui/material/Switch";

export default function ColoredSwitch({ isChecked, onChange }) {
  return (
    <Switch
      checked={isChecked}
      onChange={onChange}
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
}
