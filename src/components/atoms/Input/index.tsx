import React, { ReactNode } from "react";
import { Controller, UseFormRegister } from "react-hook-form";
import { ISignUpData } from "../../../models/Auth";
import { IUpdateUserData } from "../../../models/User";
import TextField, { BaseTextFieldProps } from "@mui/material/TextField";
// type TextFieldProps = IUpdateUserData | ISignUpData;

interface IProps extends Omit<BaseTextFieldProps, "name"> {
  name: "email" | "password" | "fullName" | "username" | "confirmPassword";
  suggestions: boolean; // Default browser autocomplete
  // register: UseFormRegister<TextFieldProps>;
  label?: ReactNode;
  type?: "text" | "email" | "password";
  placeholder?: string;
  error?: boolean;
  helperText?: string;
}

const Input: React.FC<IProps> = ({ name, suggestions, ...props }: IProps) => {
  return (
    <TextField
      name={name}
      inputProps={{
        name: "InputProps",
        autoComplete: suggestions ? "" : "new-password",
        form: {
          autoComplete: suggestions ? "on" : "off",
        },
      }}
      fullWidth
      {...props}
    />
  );
};

export default Input;
