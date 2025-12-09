"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BaseButton from "@/components/base/BaseButton";
import { BackArrowIcon } from "@/assets/icons/CommonIcons";
import { getTranslationSync } from "@/i18n/i18n";
import { routePath } from "../constants/RoutePath";
import BaseOTPInput from "../base/BaseVerifyInput";

export default function VerifyOTP() {
  const router = useRouter();
    const [otp, setOtp] = useState(Array(6).fill(""));
    const t = (key: string, params?: Record<string, string>) => {
    return getTranslationSync(key, params);
  };

  return (
    <div className="bg-cyanGradient rounded-2xl ">
      <div className="flex flex-col min-h-[calc(100vh-200px)] justify-center items-center px-4 py-20 md:py-[229px]">
        <div className="md:w-[460px] xs:w-[450px] w-full mx-auto flex flex-col p-[30px] bg-white rounded-2xl shadow-sm">
          <div className="text-start mb-7">
            <BaseButton
              className="text-sm text-obsidianBlack bg-transparent border-none p-0 font-normal"
              onClick={() => router.back()}
            >
              <BackArrowIcon />
            </BaseButton>
          </div>
          <p className="text-4xl font-semibold text-black mb-[10px]">
            {t("verifyOTPPageConstants.enterCode")}
          </p>
          <p className="text-obsidianBlack opacity-50 text-sm mb-6">
            {t(
              "verifyOTPPageConstants.enterTheVerificationCodeSentToYourEmail"
            )}
          </p>
          <p className="text-sm font-light text-stoneGray mb-1">
            {t("verifyOTPPageConstants.code")}
          </p>
          <div className="flex justify-start gap-2 mb-10">
            <BaseOTPInput otp={otp} setOtp={setOtp} length={6}/>
          </div>
          <BaseButton
            type="submit"
            className="w-full bg-deepTeal cursor-pointer text-white rounded-md border-0 font-medium text-textBase leading-6 px-2 py-2 md:px-5 md:py-4 mt-4"
            label={t("verifyOTPPageConstants.sendVerificationCode")}
          />
        </div>
        <div className="flex justify-center items-center gap-2 text-sm leading-5 mt-4">
          <p className="text-[#1C1C1C] opacity-50">
            {t("verifyOTPPageConstants.didNotReceiveTheCode")}
          </p>
          <BaseButton
            onClick={() => router.push(routePath.logIn)}
            className="text-obsidianBlack font-medium bg-transparent border-none p-0 text-base focus:ring-0"
            label={t("verifyOTPPageConstants.resendCode")}
          />
        </div>
      </div>
    </div>
  );
}
