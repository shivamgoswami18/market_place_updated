"use client";

import { usePathname } from "next/navigation";
import {
  mainNavItems,
  secondaryNavItems,
  actionNavItems,
} from "../constants/Dashboard";
import NavSection from "./NavSection";
import SidebarSeparator from "./SidebarSeparator";
import { getTranslationSync } from "@/i18n/i18n";
import { trailingSlashRegex } from "../constants/Validation";

interface SidebarProps {
  hideLogo?: boolean;
}

const t = (key: string, params?: Record<string, string>) => {
  return getTranslationSync(key, params);
};

export default function Sidebar({ hideLogo = false }: SidebarProps) {
  const pathname = usePathname();
  const isActive = (path: string): boolean => {
    if (!path || !pathname) return false;
    const normalizedPath = path.replace(trailingSlashRegex, "");
    const normalizedPathname = pathname.replace(trailingSlashRegex, "");

    return (
      normalizedPathname === normalizedPath ||
      normalizedPathname.startsWith(`${normalizedPath}/`)
    );
  };

  return (
    <aside className="w-[240px] max-w-[240px] bg-white flex flex-col h-screen overflow-hidden p-[24px] relative">
      {!hideLogo && (
        <div className="mb-[26px]">
          <h1 className="text-obsidianBlack font-bold text-titleMid xl:leading-[100%] xl:tracking-[-1px]">
            {t("logInPageConstants.logo")}
          </h1>
        </div>
      )}

      <NavSection
        items={mainNavItems}
        isActive={isActive}
        className="flex-1 min-h-0 overflow-y-auto -mx-[24px] px-[24px]"
      />

      <SidebarSeparator className="mb-[16px]" />
      <NavSection items={secondaryNavItems} isActive={isActive} />
      <SidebarSeparator className="my-[16px]" />
      <NavSection items={actionNavItems} isActive={isActive} variant="action" />
    </aside>
  );
}
