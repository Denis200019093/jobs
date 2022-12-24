import { FormControlLabel, Checkbox } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface IProps {
  name: string;
  label: string;
  value: boolean;
}

const CustomCheckbox: React.FC<IProps> = (props) => {
  const { name, label } = props;

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: {}
  } = useForm<any>({
    mode: 'onChange'
  })

  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          render={() => (
            <Checkbox
              // checked={selectedItems.includes(option.value)}
              // onChange={() => handleSelect(option.value)}
            />
          )}
          control={control}
        />
      }
      label={label}
      // key={option.value}
    />
  );
};

export default CustomCheckbox;
