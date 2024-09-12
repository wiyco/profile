import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function usePath() {
  const pathname = usePathname();

  /** @example / */
  const isRoot = useMemo(() => pathname === "/", [pathname]);

  return {
    isRoot,
  };
}
