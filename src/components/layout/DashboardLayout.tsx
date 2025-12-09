"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import Header from "./DashboardHeader";
import Footer from "./DashboardFooter";
import { shouldShowLayout } from "./LayoutConfig";
import { CloseIcon, HamburgerIcon } from "@/assets/icons/CommonIcons";
import BaseButton from "../base/BaseButton";
import { getTranslationSync } from "@/i18n/i18n";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const showLayout = shouldShowLayout(pathname);

  const t = (key: string, params?: Record<string, string>) => {
    return getTranslationSync(key, params);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  if (!showLayout) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-mintUltraLight">
      <div className="hidden lg:block fixed left-0 top-0 h-full z-40">
        <Sidebar />
      </div>

      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-blackTransparent" />

        <div
          className={`absolute top-0 left-0 h-full w-[240px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between pt-[24px] px-[24px]">
              <h1 className="text-obsidianBlack font-bold text-titleMid xl:leading-[100%] xl:tracking-[-1px]">
                {t("logInPageConstants.logo")}
              </h1>
              <BaseButton
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-transparent border-0"
                startIcon={
                  <CloseIcon className="text-obsidianBlack" />
                }
              />
            </div>
            <div className="flex-1 overflow-y-auto">
              <Sidebar hideLogo={true} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:ml-[240px] min-h-screen p-[20px] lg:p-[40px]">
        <div className="lg:hidden">
          <BaseButton
            onClick={() => setIsMobileMenuOpen(true)}
            className="bg-transparent border-0"
            startIcon={<HamburgerIcon />}
          />
        </div>
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="max-w-content mx-auto w-full">{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
