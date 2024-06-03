"use client";

import { MediaLinks } from "@constants/links";
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
      { label: "GitHub", url: MediaLinks.GITHUB },
      { label: "X", url: MediaLinks.X },
      { label: "Instagram", url: MediaLinks.INSTAGRAM },
    ],
  },
  {
    header: "More",
    children: [
      { label: "Vercel", url: MediaLinks.VERCEL },
      { label: "Supabase", url: MediaLinks.SUPABASE },
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
              <Link href={MediaLinks.GITHUB} target="_blank" rel="noopener noreferrer">
                <span className={cn(isRoot ? "stroke-current" : "stroke-white")}>
                  <GitHub />
                </span>
              </Link>
            </li>
            <li title="X">
              <Link href={MediaLinks.X} target="_blank" rel="noopener noreferrer">
                <span className={cn(isRoot ? "stroke-current" : "stroke-white")}>
                  <X />
                </span>
              </Link>
            </li>
            <li title="Instagram">
              <Link href={MediaLinks.INSTAGRAM} target="_blank" rel="noopener noreferrer">
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
