import React from "react";
import Switch from "@mui/material/Switch";

export default function ColoredSwitch() {
  return (
    <Switch
      sx={{
        // track desligado: sem borda visível
        "& .MuiSwitch-track": {
          border: "1px solid transparent",
        },
        // thumb quando checked
        "& .MuiSwitch-switchBase.Mui-checked": {
          color: "#f25c54", // cor do circle
        },
        // track quando checked
        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
          backgroundColor: "#f25c54", // fundo da track
          borderColor: "#f25c54", // borda da track
          opacity: 1,
        },
      }}
    />
  );
}
