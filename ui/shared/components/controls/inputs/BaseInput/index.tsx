import React, { InputHTMLAttributes } from "react";
import "./styles.css";

export interface BaseInputProps {
  name?: string;
  value?: string;
  label?: String;
  errorMessage?: string;
  isDisabled?: boolean;
  placeHolder?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  onChange?: (name: string, e: string) => void;
  onBlur?: (e: any) => void;
  mask?: (e: unknown) => void;
}

const InputWrapper = (props: {
  children: React.ReactNode;
  hasError?: boolean;
  errorMessage?: string;
  label?:String;
}) => {
  const { hasError, children, errorMessage, label } = props;
  return (
    <div
      className={`base-input-container ${hasError ? "base-input-warning" : ""}`}
    >
      {label && <span> {label}</span>}
      {children}
      {errorMessage?.length > 0 && (
        <label className={"base-input-error-label"}>
          <span>{errorMessage}</span>
        </label>
      )}
    </div>
  );
};

export default InputWrapper;
