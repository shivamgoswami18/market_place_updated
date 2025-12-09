"use client";

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
  InputFieldUserIcon,
} from "@/assets/icons/CommonIcons";
import AuthBannerImage from "@/assets/images/auth_banner_image.png";
import Image from "next/image";
import { getTranslationSync } from "@/i18n/i18n";

interface JWTPayload {
  role: string;
}

const Register = () => {
  const router = useRouter();
  const device_token = getItem("device_token") ?? "";
  const t = (key: string, params?: Record<string, string>) => {
    return getTranslationSync(key, params);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required(
        t("validation.required", { field: t("registerLabel.name") })
      ),

      email: Yup.string()
        .required(t("validation.required", { field: t("registerLabel.email") }))
        .matches(
          emailRegex,
          t("validation.format", { field: t("registerLabel.email") })
        ),

      password: Yup.string().required(
        t("validation.required", { field: t("registerLabel.password") })
      ),

      confirmPassword: Yup.string()
        .required(
          t("validation.required", {
            field: t("registerLabel.confirmPassword"),
          })
        )
        .oneOf([Yup.ref("password")], t("validation.passwordMatch")),
    }),

    onSubmit: (values) => {
      logInApi({
        name: values.name,
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
              router.push(routePath.verify);
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
      <div className="max-w-container mx-auto flex justify-evenly 2xl:gap-[240px] min-h-[calc(100vh-200px)] flex-wrap">
        <div className="hidden xl:flex justify-center xl:pl-[70px] 2xl:pl-[171px] py-[166px] h-full">
          <Image
            src={AuthBannerImage}
            alt={t("logInPageConstants.authPageImageAlt")}
            className=""
          />
        </div>
        <div className="w-full xl:w-1/2 flex flex-col items-center px-3 py-10 md:py-[110px]">
          <div className="w-full max-w-[460px] bg-white rounded-2xl shadow-greenGlow p-[30px] sm:p-8">
            <div className="mb-7">
              <p className="text-2xl font-semibold mb-6">
                {t("logInPageConstants.logo")}
              </p>
              <p className="text-4xl font-semibold mb-1 leading-10">
                {t("registerPageConstants.createYourAccount")}
              </p>
              <p className="text-sm text-stoneGray leading-5">
                {t("registerPageConstants.enterYourDetailsToCreateAnAccount")}
              </p>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <BaseInput
                label={t("registerLabel.name")}
                name="name"
                type="text"
                placeholder={t("validation.placeholder", {
                  field: t("registerLabel.name"),
                })}
                icon={<InputFieldUserIcon />}
                onChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                value={formik.values.name}
                error={formik.errors.name}
                touched={formik.touched.name}
                fullWidth
                labelClassName="text-stoneGray text-textsm mb-[3px] leading-[160%] tracking-[-0.02rem]"
                className="px-10 lg:pl-[38px] lg:px-[179px] py-3 placeholder:text-grey focus:outline-none focus:border-deepTeal placeholder:opacity-50 focus:ring-0 text-textSm text-stoneGray rounded-lg hover:border-deepTeal placeholder:text-textSm"
              />
              <BaseInput
                label={t("registerLabel.email")}
                name="email"
                type="email"
                placeholder={t("validation.placeholder", {
                  field: t("registerLabel.email"),
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
                label={t("registerLabel.password")}
                name="password"
                type="password"
                placeholder={t("registerPlaceholder.password")}
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
                label={t("registerLabel.confirmPassword")}
                name="confirmPassword"
                type="password"
                placeholder={t("registerPlaceholder.confirmPassword")}
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
                className="w-full bg-deepTeal text-white rounded-md border-0 font-medium text-textBase leading-6 2xl:px-[152px] md:py-[13px] px-3 py-3 focus:ring-0"
                label={t("registerPageConstants.registerNow")}
              />
            </form>
          </div>
          <div className="flex justify-center items-center mt-6 gap-2 text-sm leading-5">
            <p className="text-obsidianBlack opacity-50">
              {t("registerPageConstants.alreadyHaveAnAccount")}
            </p>
            <BaseButton
              onClick={() => router.push(routePath.logIn)}
              className="text-obsidianBlack font-medium bg-transparent border-none p-0 focus:ring-0 text-base"
              label={t("registerPageConstants.logIn")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
