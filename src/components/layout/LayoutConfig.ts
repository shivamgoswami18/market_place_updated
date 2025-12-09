import { routePath } from "../constants/RoutePath";

export const routesWithLayout: string[] = [
  routePath.dashboard,
  routePath.settings,
];

export const shouldShowLayout = (pathname: string): boolean => {
  return routesWithLayout.includes(pathname);
};
