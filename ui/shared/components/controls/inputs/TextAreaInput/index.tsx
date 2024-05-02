/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes, ReactNode, useCallback, useMemo, useState } from 'react';
import './styles.css';
import InputWrapper, { BaseInputProps } from '../BaseInput';

export interface TextAreaInputProps extends BaseInputProps {
  override?: InputHTMLAttributes<HTMLTextAreaElement>;
}

const TextAreaInput: React.FunctionComponent<TextAreaInputProps> = (
  props: TextAreaInputProps
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
      <textarea
        className="text-area-input"
        name={name}
        autoComplete="new-password"
        placeholder={placeHolder}
        value={value}
        rows={6}
        ref={inputRef as any}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={handleFocus}
        disabled={isDisabled}
        {...override}
      />
   </InputWrapper> 
  );
};

export default TextAreaInput;
