import React, { forwardRef } from "react";
import { RefCallBack } from "react-hook-form";
import TextField, { BaseTextFieldProps } from "@mui/material/TextField";

interface IProps extends BaseTextFieldProps {
  suggestions?: boolean; // Default browser autocomplete
}

const CustomInput = forwardRef<RefCallBack, IProps>(
  ({ suggestions = false, ...props }, ref) => {
    return (
      <TextField
        inputProps={{
          autoComplete: suggestions ? "" : "new-password",
          form: {
            autoComplete: suggestions ? "on" : "off",
          },
        }}
        fullWidth
        {...props}
      />
    );
  }
);

export default CustomInput;
