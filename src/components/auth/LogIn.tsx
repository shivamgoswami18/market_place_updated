"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import BaseInput from "@/components/base/BaseInput";
import BaseButton from "@/components/base/BaseButton";
import { logInApi } from "@/lib/api/AuthApi";
import {
  checkStatusCodeSuccess,
  commonLabels,
  errorHandler,
  getItem,
  setItem,
} from "@/components/constants/Common";
import { toast } from "react-toastify";
import { emailRegex } from "@/components/constants/Validation";
import { routePath } from "@/components/constants/RoutePath";
import { jwtDecode } from "jwt-decode";
import {
  InputFieldMailIcon,
  InputFieldPasswordIcon,
} from "@/assets/icons/CommonIcons";
import AuthBannerImage from "@/assets/images/auth_banner_image.png";
import Image from "next/image";
import { getTranslationSync } from "@/i18n/i18n";
import BaseCheckbox from "../base/BaseCheckbox";

interface JWTPayload {
  role: string;
}

const LogIn = () => {
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const device_token = getItem("device_token") ?? "";
  const t = (key: string, params?: Record<string, string>) => {
    return getTranslationSync(key, params);
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .required(t("validation.required", { field: t("logInLabel.email") }))
        .matches(
          emailRegex,
          t("validation.format", { field: t("logInLabel.email") })
        ),
      password: Yup.string().required(
        t("validation.required", { field: t("logInLabel.password") })
      ),
    }),
    onSubmit: (values) => {
      logInApi({
        email: values.email,
        password: values.password,
        device_token,
      })
        .then((res) => {
          const message = res?.message;
          const tokenData = res?.data?.token;
          if (checkStatusCodeSuccess(res?.statusCode)) {
            const decoded = jwtDecode<JWTPayload>(tokenData);
            if (decoded?.role === t("logInPageConstants.userRole")) {
              toast.success(message);
              setItem(commonLabels.token, tokenData);
              router.push(routePath.dashboard);
            } else {
              toast.error(t("logInPageConstants.adminAccessDenied"));
            }
          } else {
            toast.error(message);
          }
        })
        .catch((err) => errorHandler(err));
    },
  });

  return (
    <div className="bg-cyanGradient rounded-2xl">
      <div className="max-w-container mx-auto flex justify-evenly min-h-[calc(100vh-200px)] flex-wrap py-6 lg:py-[166px] ">
        <div className="hidden lg:flex items-center justify-center 2xl:pl-[177px]">
          <Image
            src={AuthBannerImage}
            alt={t("logInPageConstants.authPageImageAlt")}
            className=""
          />
        </div>
        <div className="flex flex-col items-center justify-center py">
          <div className="w-full max-w-md bg-white px-5 py-5 rounded-lg shadow-md md:p-10">
            <div className="mb-7">
              <p className="text-2xl font-semibold mb-6">
                {t("logInPageConstants.logo")}
              </p>
              <p className="text-4xl font-semibold mb-1 leading-10">
                {t("logInPageConstants.logIntoYourAccount")}
              </p>
              <p className="text-sm text-grey leading-5">
                {t("logInPageConstants.enterYourEmailAndPasswordToLogIn")}
              </p>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <BaseInput
                label={t("logInLabel.email")}
                name="email"
                type="email"
                placeholder={t("validation.placeholder", {
                  field: t("logInLabel.email"),
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

              <BaseInput
                label={t("logInLabel.password")}
                name="password"
                type="password"
                placeholder={t("validation.placeholder", {
                  field: t("logInLabel.password"),
                })}
                icon={<InputFieldPasswordIcon />}
                onChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                value={formik.values.password}
                error={formik.errors.password}
                touched={formik.touched.password}
                fullWidth
                labelClassName="text-stoneGray text-textsm mb-[3px] leading-[160%] tracking-[-0.02rem]"
                className=" px-10 lg:pl-[38px] lg:px-[179px] py-3 placeholder:text-grey focus:outline-none focus:border-deepTeal placeholder:opacity-50 focus:ring-0 text-textSm text-stoneGray rounded-lg hover:border-deepTeal placeholder:text-textSm"
              />
              <div className="flex items-center justify-between mt-1 flex-wrap gap-3">
                <BaseCheckbox
                  name="rememberMe"
                  checked={checked}
                  onChange={setChecked}
                  label={t("logInPageConstants.rememberMe")}
                  labelClassName="text-stoneGray font-medium flex justify-center items-center text-center"
                  checkboxClassName=" focus:ring-0 hover:border-deepTeal checkbox:checked:bg-deepTeal focus:border-deepTeal"
                />
                <BaseButton
                  onClick={() => router.push("/login/forgot-password")}
                  className="text-sm text-obsidianBlack bg-transparent border-none p-0 font-normal"
                  label={t("logInPageConstants.forgotPassword")}
                />
              </div>
              <BaseButton
                type="submit"
                className="w-full bg-deepTeal text-white rounded-md border-0 font-medium text-textBase leading-6 md:px-[137px] md:py-[13px] px-3 py-3"
                label={t("logInPageConstants.logIn")}
              />
            </form>
          </div>
          <div className="flex justify-center items-center mt-6 gap-2 text-sm leading-5">
            <p className="text-obsidianBlack opacity-50">
              {t("logInPageConstants.doNotHaveAnAccount")}
            </p>
            <BaseButton
              onClick={() => router.push("/register")}
              className="text-obsidianBlack font-medium bg-transparent border-none focus:ring-0 p-0 text-base"
              label={t("logInPageConstants.registerNow")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
