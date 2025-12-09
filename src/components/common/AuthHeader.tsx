'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BaseButton from '../base/BaseButton';
import { getTranslationSync } from '@/i18n/i18n';
import { routePath } from '../constants/RoutePath';

export default function AuthHeader() {
  const pathname = usePathname();
  const t = (key: string, params?: Record<string, string>) => {
    return getTranslationSync(key, params);
  };
  const isLogInPage = pathname.includes(routePath.logIn);
  const isRegisterPage = pathname.includes(routePath.register);
  const buttonLabel = isLogInPage
    ? t('logInPageConstants.registerNow')
    : t('logInPageConstants.logIn');
  const buttonLink = isRegisterPage ? routePath.logIn : routePath.register;

  return (
    <header className="mx-auto pt-[21px] px-3 xs:px-10 md:px-[160px] xxs:px-5 max-w-container flex items-center justify-between bg-white">
      <div className="text-obsidianBlack font-bold text-titleXl xl:leading-[100%] xl:tracking-[-1px]">
        {t('logInPageConstants.logo')}
      </div>
      <BaseButton className="bg-transparent leading-6 border-2 border-[#1818181A] rounded-[8px] py-[9px] px-[14px] xl:leading-[24px]">
        <Link
          href={buttonLink}
          className="text-textBase leading-6 transition text-obsidianBlack no-underline "
        >
          {buttonLabel}
        </Link>
      </BaseButton>
    </header>
  );
}
