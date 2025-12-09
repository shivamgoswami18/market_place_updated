'use client';

import {
  BackArrowIcon,
  InputFieldPasswordIcon,
} from '@/assets/icons/CommonIcons';
import BaseButton from '../base/BaseButton';
import BaseInput from '../base/BaseInput';
import { getTranslationSync } from '@/i18n/i18n';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { routePath } from '../constants/RoutePath';

const ResetPassword = () => {
  const t = (key: string, params?: Record<string, string>) => {
    return getTranslationSync(key, params);
  };
  const router = useRouter();

  const formik = useFormik({
    initialValues: { password: '', confirmPassword: '' },

    validationSchema: Yup.object({
      password: Yup.string().required(
        t('validation.required', { field: t('resetPasswordLabel.password') })
      ),

      confirmPassword: Yup.string()
        .required(
          t('validation.required', {
            field: t('resetPasswordLabel.confirmPassword'),
          })
        )
        .oneOf([Yup.ref('password')], t('validation.passwordMatch')),
    }),

    onSubmit: async () => {
      router.push(routePath.resetPasswordSuccess)
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
            {t('resetPasswordPageConstants.resetYourPassword')}
          </p>
          <p className="text-obsidianBlack opacity-50 text-sm mb-6">
            {t('resetPasswordPageConstants.newPasswordValidation')}
          </p>
          <form onSubmit={formik.handleSubmit} className="w-full space-y-6">
            <BaseInput
              label={t('registerLabel.password')}
              name="password"
              type="password"
              placeholder={t('registerPlaceholder.password')}
              icon={<InputFieldPasswordIcon />}
              onChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.password}
              error={formik.errors.password}
              touched={formik.touched.password}
              fullWidth
              labelClassName="text-stoneGray text-textsm mb-[3px] leading-[160%] tracking-[-0.02rem]"
              className=" placeholder:text-stoneGray focus:ring-0 placeholder:opacity-50 hover:border-deepTeal placeholder:text-textSm px-10 lg:pl-[38px] lg:px-[179px] py-3"
            />
            <BaseInput
              label={t('registerLabel.confirmPassword')}
              name="confirmPassword"
              type="password"
              placeholder={t('registerPlaceholder.confirmPassword')}
              icon={<InputFieldPasswordIcon />}
              onChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              error={formik.errors.confirmPassword}
              touched={formik.touched.confirmPassword}
              fullWidth
              labelClassName="text-stoneGray text-textsm mb-[3px] leading-[160%] tracking-[-0.02rem]"
              className=" placeholder:text-stoneGray focus:ring-0 placeholder:opacity-50 hover:border-deepTeal placeholder:text-textSm px-10 lg:pl-[38px] lg:px-[179px] py-3"
            />
            <BaseButton
              type="submit"
              className="w-full bg-deepTeal text-white rounded-md border-0 font-medium text-textBase leading-6 px-2 py-2 md:px-5 md:py-4 mt-4 cursor-pointer"
              label={t('resetPasswordPageConstants.resetPassword')}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
