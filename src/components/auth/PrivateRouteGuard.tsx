"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { commonLabels, getItem } from "@/components/constants/Common";
import { getDefaultPublicRoute } from "@/lib/config/routesConfig";

interface PrivateRouteGuardProps {
  children: React.ReactNode;
}

export default function PrivateRouteGuard({
  children,
}: PrivateRouteGuardProps) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = getItem(commonLabels.token);

    if (!token) {
      router.replace(getDefaultPublicRoute());
    }
  }, [router, pathname]);

  if (!getItem(commonLabels.token)) {
    return null;
  }

  return <>{children}</>;
}
