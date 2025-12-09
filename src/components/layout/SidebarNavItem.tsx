import Link from "next/link";
import { SidebarItem } from "../constants/Dashboard";
import { getTranslationSync } from "@/i18n/i18n";

interface SidebarNavItemProps {
  item: SidebarItem;
  isActive: boolean;
  variant?: "default" | "action";
}

export default function SidebarNavItem({
  item,
  isActive,
  variant = "default",
}: SidebarNavItemProps) {
  const t = (key: string) => {
    return getTranslationSync(key);
  };

  const displayLabel = item.translationKey
    ? t(item.translationKey)
    : item.label;
  if (variant === "action") {
    return (
      <li>
        <Link
          href={item.path}
          className="flex items-center no-underline gap-[16px] p-[15px] rounded-[8px] transition-colors text-redPrimary hover:bg-red-50"
        >
          <span className="flex items-center justify-center text-redPrimary">
            {item.icon()}
          </span>
          <span className="font-medium flex items-center">{displayLabel}</span>
        </Link>
      </li>
    );
  }

  return (
    <li className="relative">
      {isActive && (
        <div className="absolute -left-[24px] top-0 bottom-0 w-1 bg-deepTeal rounded-r-full" />
      )}
      <Link
        href={item.path}
        className={`flex items-center no-underline gap-[16px] p-[15px] rounded-[8px] transition-colors ${
          isActive
            ? "bg-deepTeal text-white"
            : "text-obsidianBlack hover:bg-graySoft"
        }`}
      >
        <span
          className={`flex items-center justify-center ${
            isActive ? "text-white" : "text-obsidianBlack"
          }`}
        >
          {item.icon()}
        </span>
        <span className="font-medium flex items-center">{displayLabel}</span>
      </Link>
    </li>
  );
}
