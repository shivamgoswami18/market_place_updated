import React from "react";
import { Checkbox } from "primereact/checkbox";

interface BaseCheckboxProps {
  name: string;
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  labelClassName?: string;
  checkboxClassName?: string;
}

const BaseCheckbox: React.FC<BaseCheckboxProps> = ({
  name,
  label,
  checked,
  onChange,
  labelClassName = "",
  checkboxClassName = "",
}) => {
  const id = `${name}-checkbox`;

  return (
    <label
      htmlFor={id}
      className={`cursor-pointer select-none ${labelClassName}`}
    >
      <Checkbox
        inputId={id}
        checked={checked}
        onChange={(e) => onChange(!!e.checked)}
        className={checkboxClassName}
      />

      {label && (
        <span className="ml-2">{label}</span>
      )}
    </label>
  );
};

export default BaseCheckbox;
