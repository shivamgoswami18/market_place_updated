import { getTranslationSync } from "@/i18n/i18n";

export default function Footer() {
  const t = (key: string, params?: Record<string, string>) => {
    return getTranslationSync(key, params);
  };

  return (
    <footer className="py-4 mt-auto">
      <div className="max-w-content mx-auto w-full">
        <div className="text-center text-gray-600 text-sm">
          <p>
            {t("dashboardPageConstants.footerCopyright", {
              year: new Date().getFullYear().toString(),
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
