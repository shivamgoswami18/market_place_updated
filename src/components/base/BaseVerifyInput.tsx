'use client';

import React from 'react';
import { InputText } from 'primereact/inputtext';
import { nonDigitsRegex, onlySingleDigitRegex } from '../constants/Validation';

interface BaseOTPInputProps {
  length: number;
  otp: string[];
  setOtp: (otp: string[]) => void;
  className?: string;
}

export default function BaseOTPInput({
  length,
  otp,
  setOtp,
  className,
}: BaseOTPInputProps) {
  const focusInput = (id: string) => {
    (document.getElementById(id) as HTMLInputElement | null)?.focus?.();
  };

  const handleChange = (value?: string, index?: number) => {
    if (!value || index === undefined) return;

    if (!onlySingleDigitRegex?.test?.(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    if (value && index < length - 1) {
      focusInput(`otp-${index + 1}`);
    }
  };

  const handleKeyDown = (
    e?: React.KeyboardEvent<HTMLInputElement>,
    index?: number
  ) => {
    if (!e || index === undefined) return;

    const key = e.key;

    if (key === 'Backspace') {
      if (!otp?.[index] && index > 0) {
        focusInput(`otp-${index - 1}`);
      }
      return;
    }

    if (key === 'ArrowLeft' && index > 0) {
      focusInput(`otp-${index - 1}`);
      return;
    }

    if (key === 'ArrowRight' && index < length - 1) {
      focusInput(`otp-${index + 1}`);
      return;
    }
  };

  const handlePaste = (e?: React.ClipboardEvent<HTMLInputElement>) => {
    if (!e) return;

    e.preventDefault?.();

    const pasteData = e.clipboardData
      ?.getData?.('text')
      ?.replace?.(nonDigitsRegex, '')
      ?.slice?.(0, length);

    if (!pasteData) return;

    const updated = [...otp];

    pasteData?.split?.('')?.forEach?.((digit, i) => {
      updated[i] = digit;
    });

    setOtp(updated);

    const lastIndex = pasteData.length - 1;
    if (lastIndex >= 0) focusInput(`otp-${lastIndex}`);
  };

  return (
    <div className="flex gap-2">
      {otp?.map?.((digit, index) => (
        <InputText
          key={index}
          id={`otp-${index}`}
          maxLength={1}
          placeholder="-"
          value={digit}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={(e) => handlePaste(e)}
          onChange={(e) => handleChange(e.target?.value, index)}
          className={
            className ||
            'md:w-[60px] md:h-11 sm:w-[55px] w-[30px] xxs:w-[35px] xs:w-[40px] border border-[#EAEAEA] rounded-lg text-center text-2xl font-semibold focus:ring-0 placeholder:text-stoneGray placeholder:opacity-50'
          }
        />
      ))}
    </div>
  );
}
