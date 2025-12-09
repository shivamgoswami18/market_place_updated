import { SidebarItem } from "../constants/Dashboard";
import SidebarNavItem from "./SidebarNavItem";

interface NavSectionProps {
  items: SidebarItem[];
  isActive: (path: string) => boolean;
  variant?: "default" | "action";
  className?: string;
}

export default function NavSection({
  items,
  isActive,
  variant = "default",
  className = "",
}: NavSectionProps) {
  if (!items?.length) return null;

  return (
    <nav className={className}>
      <ul className="space-y-[2px] list-none">
        {items?.map((item) => (
          <SidebarNavItem
            key={item?.path}
            item={item}
            isActive={variant === "action" ? false : isActive(item?.path)}
            variant={variant}
          />
        ))}
      </ul>
    </nav>
  );
}
