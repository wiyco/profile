"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function usePath() {
  const pathname = usePathname();

  const isRoot = useMemo(() => pathname === "/", [pathname]);

  return {
    isRoot,
  };
}
