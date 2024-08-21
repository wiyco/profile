import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function usePath() {
  const pathname = usePathname();

  /** @example / */
  const isRoot = useMemo(() => pathname === "/", [pathname]);

  /** @example /archive */
  const isArchive = useMemo(() => pathname === "/archive", [pathname]);

  /** @example /blog */
  const isBlog = useMemo(() => pathname === "/blog", [pathname]);

  /** @example /blog/25bepuTC */
  const isBlogPost = useMemo(() => pathname.match(/\/blog\/[a-zA-Z0-9_\-=]+/) !== null, [pathname]);

  return {
    isRoot,
    isArchive,
    isBlog,
    isBlogPost,
  };
}
