import {
  DashboardIcon,
  ProfileIcon,
  SettingsIcon,
  LogoutIcon,
} from "@/assets/icons/CommonIcons";
import { routePath } from "./RoutePath";

export const dashboardPageConstants = {
  userName: "John Doe",
};

export interface SidebarItem {
  label: string;
  translationKey?: string;
  path: string;
  icon: () => React.ReactNode;
}

export const mainNavItems: SidebarItem[] = [
  {
    label: "Dashboard",
    translationKey: "sidebar.dashboard",
    path: routePath.dashboard,
    icon: () => <DashboardIcon />,
  },
];

export const secondaryNavItems: SidebarItem[] = [
  {
    label: "Profile",
    translationKey: "sidebar.profile",
    path: routePath.profile,
    icon: () => <ProfileIcon />,
  },
  {
    label: "Settings",
    translationKey: "sidebar.settings",
    path: routePath.settings,
    icon: () => <SettingsIcon />,
  },
];

export const actionNavItems: SidebarItem[] = [
  {
    label: "Logout",
    translationKey: "sidebar.logout",
    path: "/logout",
    icon: () => <LogoutIcon />,
  },
];
