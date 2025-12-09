'use client';

import { usePathname } from 'next/navigation';
import { routePath } from '../constants/RoutePath';
import { BellIcon } from '@/assets/icons/CommonIcons';
import { dashboardPageConstants } from '../constants/Dashboard';
import BaseButton from '../base/BaseButton';
import { getTranslationSync } from '@/i18n/i18n';

const t = (key: string, params?: Record<string, string>) => {
  return getTranslationSync(key, params);
};
const routeTitleMap: Record<string, string> = {
  [routePath.dashboard]: 'sidebar.dashboard',
  [routePath.profile]: 'sidebar.profile',
  [routePath.settings]: 'sidebar.settings',
};

const getPageTitle = (pathname: string): string => {
  const matchedKey = Object.keys(routeTitleMap).find(
    (key) => pathname === key || pathname.startsWith(`${key}/`)
  );

  return matchedKey ? routeTitleMap[matchedKey] : 'sidebar.dashboard';
};

export default function Header() {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  return (
    <header className="mb-[20px]">
      <div className="max-w-content mx-auto w-full h-full flex-col xxs:flex-row flex xs:items-center justify-between">
        <h1 className="text-obsidianBlack font-bold text-titleLg xl:leading-[100%] tracking-[0px]">
          {t(pageTitle)}
        </h1>
        <div className="flex items-start xxs:items-end xs:items-center gap-[10px] xs:gap-[24px] flex-col-reverse xs:flex-row">
          <span className="text-obsidianBlack text-opacity-70 font-light text-textBase xl:leading-[100%] tracking-[0px]">
            {t('dashboardPageConstants.welcome')},{' '}
            <span className="font-bold">{dashboardPageConstants.userName}</span>
          </span>
          <BaseButton
            className="p-[14px] rounded-full border-none bg-white"
            startIcon={<BellIcon />}
          />
        </div>
      </div>
    </header>
  );
}
