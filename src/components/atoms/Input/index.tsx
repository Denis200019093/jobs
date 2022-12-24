import React from 'react';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';
// type TextFieldProps = IUpdateUserData | ISignUpData;

interface IProps extends BaseTextFieldProps {
  suggestions: boolean; // Default browser autocomplete
}

const Input: React.FC<IProps> = ({ suggestions, name, ...props }: IProps) => {
  console.log(name, 'name');

  return (
    <TextField
      inputProps={{
        name,
        autoComplete: suggestions ? '' : 'new-password',
        form: {
          autoComplete: suggestions ? 'on' : 'off',
        },
      }}
      fullWidth
      {...props}
    />
  );
};

export default Input;
