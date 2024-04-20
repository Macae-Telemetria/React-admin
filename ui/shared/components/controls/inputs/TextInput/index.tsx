/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes, ReactNode, useCallback, useMemo, useState } from 'react';
import './styles.css';
import InputWrapper, { BaseInputProps } from '../BaseInput';

export interface TextInputProps extends BaseInputProps {
  override?: InputHTMLAttributes<HTMLInputElement>;
}

const TextInput: React.FunctionComponent<TextInputProps> = (
  props: TextInputProps
) => {
  const {
    name,
    inputRef,
    mask,
    onChange,
    onBlur,
    value,
    placeHolder,
    isDisabled,
    override
  } = props;

  const handleChange = (e: any) => {
    if (mask) {
      e.target.value = mask(e.target.value);
    }
    onChange && onChange(name, e.target.value);
  };

  const handleFocus = (event: any) => {
    event.preventDefault();
    event.target.setAttribute("autocomplete", "off");
  };

  return (
    <InputWrapper
      hasError={(props.errorMessage || "").length > 0}
      errorMessage={props.errorMessage}
      label={props.label}
    >
      <input
        className="base-text-input"
        name={name}
        type={"text"}
        autoComplete="new-password"
        placeholder={placeHolder}
        value={value}
        ref={inputRef}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={handleFocus}
        disabled={isDisabled}
        {...override}
      />
    </InputWrapper>
  );
};

export default TextInput;
