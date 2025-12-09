import { getTranslationSync } from "@/i18n/i18n";
import BaseButton from "../base/BaseButton";
import { PasswordVerificationSuccessIcon } from "@/assets/icons/CommonIcons";

function ResetPasswordSuccess() {
  const t = (key: string, params?: Record<string, string>) => {
    return getTranslationSync(key, params);
  };
  return (
    <div className="bg-cyanGradient rounded-2xl">
      <div className="flex flex-col min-h-[calc(100vh-200px)] justify-center items-center text-center px-4 py-20 md:py-[229px]">
        <div className="mx-auto flex flex-col justify-center items-center ">
          <div className="mb-7">
            <div className="relative rounded-[200px] h-[100px] w-[100px] shadow-[0px_0px_32px_0px_rgba(16,138,0,0.1)]">
              <div className="absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <PasswordVerificationSuccessIcon />
              </div>
            </div>
          </div>
          <p className="text-4xl font-semibold text-black mb-[10px]">
            {t("passwordResetSuccessConstants.passwordResetSuccessful")}
          </p>
          <p className="text-obsidianBlack opacity-50 text-sm mb-9">
            {t(
              "passwordResetSuccessConstants.yourPasswordHasBeenSuccessfullyUpdated"
            )}
          </p>
          <BaseButton
            label={t("passwordResetSuccessConstants.loginNow")}
            className="bg-deepTeal text-white rounded-md border-0 font-medium text-textBase leading-6 px-[62px] py-[13px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordSuccess;
