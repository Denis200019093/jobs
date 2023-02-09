import React, { forwardRef } from "react";
import { Checkbox, ListItemText, MenuItem, Select } from "@mui/material";
import { ControllerRenderProps, RefCallBack } from "react-hook-form";

interface IProps extends ControllerRenderProps {
  options: string[];
  multi?: boolean;
}

const CustomSelect = forwardRef<RefCallBack, IProps>(
  ({ options, multi = false, ...props }, ref) => (
    <Select
      MenuProps={{
        disableScrollLock: true,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left",
        },
      }}
      fullWidth
      multiple={multi}
      renderValue={(selected) =>
        multi
          ? selected?.map((option: string) => option).join(", ") ||
            "Select some tags"
          : selected
      }
      sx={{
        ".MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        boxShadow: props.value?.length
          ? "0 6px 10px rgba(147, 250, 165, 0.4)"
          : "0 3px 6px rgb(25 15 9 / 10%)",
      }}
      {...props}
    >
      {options.map((option) => (
        <MenuItem value={option} key={option}>
          {multi ? (
            <Checkbox checked={props.value?.indexOf(option) >= 0} />
          ) : null}
          <ListItemText primary={option} />
        </MenuItem>
      ))}
    </Select>
  )
);

export default CustomSelect;
