"use client";
 
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import BaseButton from "./BaseButton";
 
interface BaseInputProps {
  autoComplete?: string;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  label?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  type?: string;
  value?: string;
  handleBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  touched?: boolean;
  maxLength?: number;
  rows?: number;
  cols?: number;
  onFileChange?: (file: File | null) => void;
  helperText?: string;
  helperTextClassName?: string;
  labelClassName?: string;
  accept?: string;
  fileButtonLabel?: React.ReactNode;
  fileButtonClassName?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}
 
const BaseInput: React.FC<BaseInputProps> = ({
  autoComplete,
  className,
  defaultValue,
  disabled,
  error,
  fullWidth,
  name,
  onChange,
  placeholder,
  label,
  readOnly,
  required,
  type,
  value,
  handleBlur,
  touched,
  maxLength,
  rows = 4,
  cols,
  helperText,
  helperTextClassName,
  labelClassName,
  onKeyDown,
  icon,
}) => {
  const [showPassword, setShowPassword] = useState(false);
 
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const renderInputField = () => {
    const commonProps = {
      id: name,
      name,
      className: `w-full ${icon ? "lg:px-[6px] pl:10" : ""} ${className} ${
        error && touched ? "border-red-500" : ""
      }`,
      autoComplete,
      defaultValue,
      disabled,
      placeholder,
      readOnly,
      onBlur: handleBlur,
      onKeyDown,
      value,
      onChange,
      maxLength,
      "aria-describedby": error && touched ? `error-${name}` : undefined,
    };
 
    if (type === "textarea") {
      return (
        <InputTextarea
          {...commonProps}
          rows={rows}
          cols={cols}
          autoResize={false}
        />
      );
    }
 
    return <InputText {...commonProps} type={getInputType()} />;
  };
 
  const getInputType = () => {
    if (type === "password") {
      return showPassword ? "text" : "password";
    }
    return type;
  };
 
  return (
    <div className={`${fullWidth ? "w-full" : ""} text-start`}>
      {label && (
        <label htmlFor={name} className={`${labelClassName} block `}>
          {label}
          {required && <span className="text-black">*</span>}
        </label>
      )}
      {helperText && (
        <div className={`${helperTextClassName}`}>{helperText}</div>
      )}
      <div className="relative flex items-center">
        {renderInputField()}
 
        {icon && (
          <span className="absolute left-3 flex items-center">{icon}</span>
        )}
 
        {type === "password" && (
          <BaseButton
            type="button"
            onClick={handleClickShowPassword}
            className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer bg-transparent border-none p-0 focus:ring-0"
          >
            {showPassword ? (
              <FaEye className="text-coolGray w-[16px] h-[16px]" />
            ) : (
              <FaEyeSlash className="text-coolGray w-[16px] h-[16px]" />
            )}
          </BaseButton>
        )}
      </div>
 
      {error && touched && (
        <small id={`error-${name}`} className="p-error text-[11.375px]">
          {error}
        </small>
      )}
    </div>
  );
};
 
export default BaseInput;
  