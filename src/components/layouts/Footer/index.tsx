"use client";

import GitHub from "@icons/github.svg";
import Instagram from "@icons/instagram.svg";
import X from "@icons/x.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import type { NavItem } from "@/components/layouts/Footer/NavExpander";
import { NavExpander } from "@/components/layouts/Footer/NavExpander";
import { cn } from "@/utils/cn";

const navItems: NavItem[] = [
  {
    header: "Map",
    children: [
      { label: "Home", url: "/" },
      { label: "Archive", url: "/archive" },
      { label: "Blog", url: "/blog?page=1" },
    ],
  },
  {
    header: "About",
    children: [
      { label: "GitHub", url: "https://github.com/wiyco" },
      { label: "Twitter", url: "https://twitter.com/elonmusk" },
      { label: "Instagram", url: "https://www.instagram.com/jacobcollier" },
    ],
  },
  {
    header: "More",
    children: [
      { label: "Vercel", url: "https://vercel.com/" },
      { label: "Supabase", url: "https://supabase.com/" },
    ],
  },
];

export function Footer() {
  const pathname = usePathname();
  const [isRoot, setIsRoot] = useState(false);

  useEffect(() => setIsRoot(pathname === "/"), [pathname]);

  return (
    <footer
      className={cn(
        "w-full px-6 py-5",
        isRoot ? "fixed inset-x-0 bottom-0" : "static bg-zinc-800 text-white"
      )}
    >
      <div className="mt-5 grid gap-6 text-sm">
        <NavExpander navItems={navItems} enableDarkMode={isRoot} />
        <div className="flex items-center justify-between">
          <span>&copy; {new Date().getFullYear()} wiyco</span>
          <ul className="flex items-center justify-center space-x-5 text-lg">
            <li title="GitHub">
              <Link href="https://github.com/wiyco" target="_blank" rel="noopener noreferrer">
                <span className={cn(isRoot ? "stroke-current" : "stroke-white")}>
                  <GitHub />
                </span>
              </Link>
            </li>
            <li title="X">
              <Link href="https://x.com/elonmusk" target="_blank" rel="noopener noreferrer">
                <span className={cn(isRoot ? "stroke-current" : "stroke-white")}>
                  <X />
                </span>
              </Link>
            </li>
            <li title="Instagram">
              <Link
                href="https://www.instagram.com/jacobcollier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={cn(isRoot ? "stroke-current" : "stroke-white")}>
                  <Instagram />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
