import React from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";

import { IOption } from "../../../models/Select";

interface IProps {
  options: IOption[];
  isMulti: boolean;
  placeholder?: string;
  defaultValue?: string;
  onChange: (props: string | string[]) => void;
  value: string | string[];
  onSubmit?: (props: any) => any;
}

const MySelect: React.FC<IProps> = (props) => {
  const { options, isMulti, placeholder, onChange, value, onSubmit } = props;

  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const handleSelectChange = (newValue: IOption[] & IOption) => {
    if (!!onSubmit) {
      handleSubmit(onSubmit(newValue.value));
    } else {
      onChange(
        isMulti ? newValue.map((v: IOption) => v.value) : newValue.value
      );
    }
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter((option) => value?.includes(option.value))
        : options.find((c) => c.value === value);
    } else {
      return isMulti ? [] : ("" as any);
    }
  };

  return (
    <Select
      placeholder={placeholder}
      options={options}
      styles={customStyles}
      value={getValue()}
      isMulti={isMulti}
      onChange={handleSelectChange}
    />
  );
};

export default MySelect;

const customStyles = {
  option: (provided: any, state: { isSelected: boolean }) => ({
    ...provided,
    // borderBottom: '1px dotted pink',
    color: state.isSelected ? "lightgray" : "gray",
    // background: 'red',
    background: "#f8faff",
    boxShadow: "0 0 5px #000",
    // background: state.isSelected ? 'rgb(25,25,25)' : 'rgb(35,35,35)',
    padding: "12px",
    transition: "0.2s",
    cursor: "pointer",

    // "&:hover": {
    //   background: 'rgb(25,25,25)',
    //   cursor: 'pointer'
    // }
  }),
  menuList: () => ({
    overflow: "auto",
    maxHeight: "300px",
    padding: "5px 0",
    background: "rgb(5,5,5)",
    "&::-webkit-scrollbar": {
      width: "10px",
    },

    /* Track */
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },

    /* Handle */
    "::-webkit-scrollbar-thumb": {
      background: "rgb(70,70,70);",
    },
  }),
  menu: (provided: any) => ({ ...provided, zIndex: 9999 }),
  control: (styles: any) => ({
    ...styles,
    background: "#f8faff",
    border: "none",
    outline: "none",
    padding: "6px 0",
    clip: "none",
  }),
  singleValue: (provided: any, state: { isDisabled: boolean }) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return {
      ...provided,
      opacity,
      transition,
      color: "lightgray",
      fontSize: "20px",
    };
  },
};
