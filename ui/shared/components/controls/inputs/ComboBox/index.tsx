import React from "react";
import "./styles.css";

import Select from 'react-select';
import { defaultStyle } from "./constants";
import InputWrapper from "../BaseInput";

export type ComboOption = { value: string; label: string };

export type ComboBoxProps = {
  name: string;
  label: string;
  value: ComboOption;
  onChange: (v: ComboOption) => void;
  onBlur?: (e: any) => void;
  options: Array<ComboOption>;
  isDisabled?: boolean;
  errorMessage?: string;
  isSearchable?: boolean;
};

export const ComboBox: React.FC<ComboBoxProps> = (props) => {
  const {
    name,
    label,
    options,
    value,
    onChange,
    isDisabled,
    onBlur,
    errorMessage = "",
    isSearchable = true,
  } = props;

  const handleChange = (newCalue) =>{
    onChange(newCalue)
  }
  
  const hasError = (errorMessage || "").length > 0;

  return (
    <InputWrapper
      hasError={hasError}
      errorMessage={errorMessage}
      label={props.label}
    >
      <div
        className={`combo-box-component ${hasError ? "combo-box-warning" : ""}`}
      >
        <Select
          name={name}
          isDisabled={isDisabled}
          onBlur={onBlur}
          value={value}
          onChange={handleChange}
          options={options as any}
          styles={defaultStyle}
          isSearchable={isSearchable}
        />
      </div>
    </InputWrapper>
  );
};

export default ComboBox;
