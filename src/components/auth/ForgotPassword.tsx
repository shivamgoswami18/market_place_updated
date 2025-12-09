'use client';

import { BackArrowIcon, InputFieldMailIcon } from '@/assets/icons/CommonIcons';
import BaseButton from '../base/BaseButton';
import BaseInput from '../base/BaseInput';
import { getTranslationSync } from '@/i18n/i18n';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { emailRegex } from '@/components/constants/Validation';
import { useRouter } from 'next/navigation';
import { routePath } from '../constants/RoutePath';

const ForgotPassword = () => {
  const t = (key: string, params?: Record<string, string>) => {
    return getTranslationSync(key, params);
  };
  const router = useRouter();

  const formik = useFormik({
    initialValues: { email: '' },

    validationSchema: Yup.object({
      email: Yup.string()
        .required(
          t('validation.required', { field: t('forgotPasswordLabel.email') })
        )
        .matches(
          emailRegex,
          t('validation.format', { field: t('forgotPasswordLabel.email') })
        ),
    }),

    onSubmit: async () => {
       router.push(routePath.verify);
    },
  });

  return (
    <div className="bg-cyanGradient rounded-2xl">
      <div className="flex flex-col min-h-[calc(100vh-200px)] justify-center items-center px-4 py-20 md:py-[229px]">
        <div className="md:w-[460px] xs:w-[450px] w-full mx-auto flex flex-col p-[30px] bg-white rounded-2xl shadow-sm">
          <div className="text-start mb-7">
            <BaseButton
              className="text-sm text-[#1C1C1C] bg-transparent border-none p-0 font-normal"
              onClick={() => router.back()}
            >
              <BackArrowIcon />
            </BaseButton>
          </div>
          <p className="text-4xl font-semibold text-black mb-[10px]">
            {t('forgotPasswordPageConstants.forgotYourPassword')}
          </p>
          <p className="text-obsidianBlack opacity-50 text-sm mb-6">
            {t('forgotPasswordPageConstants.enterYourRegisteredEmail')}
          </p>
          <form onSubmit={formik.handleSubmit} className="w-full">
            <BaseInput
              label={t('forgotPasswordLabel.email')}
              name="email"
              type="email"
              placeholder={t('validation.placeholder', {
                field: t('forgotPasswordLabel.email'),
              })}
              icon={<InputFieldMailIcon />}
              onChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.errors.email}
              touched={formik.touched.email}
              fullWidth
              labelClassName="text-stoneGray text-textsm mb-[3px] leading-[160%] tracking-[-0.02rem]"
              className="px-10 lg:pl-[38px] lg:px-[179px] py-3 placeholder:text-grey focus:outline-none focus:border-deepTeal placeholder:opacity-50 focus:ring-0 text-textSm text-stoneGray rounded-lg hover:border-deepTeal placeholder:text-textSm"
            />
            <BaseButton
              type="submit"
              className="w-full bg-deepTeal text-white rounded-md border-0 font-medium text-textBase leading-6 px-2 py-2 md:px-5 md:py-4 mt-4"
              label={t('forgotPasswordPageConstants.sendVerificationCode')}
            />
          </form>
        </div>
        <div className="flex justify-center items-center gap-2 text-sm leading-5 mt-4">
          <p className="text-[#1C1C1C] opacity-50">
            {t('forgotPasswordPageConstants.doYouRememberYourPassword')}
          </p>
          <BaseButton
            onClick={() => router.push(routePath.logIn)}
            className="text-obsidianBlack font-medium bg-transparent border-none p-0 text-base focus:ring-0"
            label={t('forgotPasswordPageConstants.loginNow')}
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
