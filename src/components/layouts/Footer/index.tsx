"use client";

import "@/styles/navbar.scss";

import { MediaLinks } from "@constants/links";
import GitHub from "@icons/github.svg";
import Instagram from "@icons/instagram.svg";
import X from "@icons/x.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { navItems } from "@/components/layouts/Footer/constants";
import { NavExpander } from "@/components/layouts/Footer/NavExpander";
import { cn } from "@/utils/cn";

export function Footer() {
  const pathname = usePathname();

  const isRoot = useMemo(() => pathname === "/", [pathname]);

  return (
    <footer
      className={cn(
        "w-full px-6 py-5",
        isRoot ? "fixed inset-x-0 bottom-0" : "static bg-neutral-800 text-white"
      )}
    >
      <div className="mt-5 grid gap-6 text-sm">
        <NavExpander navItems={navItems} enableDarkMode={isRoot} />
        <section className="flex items-center justify-between">
          <span>&copy; {new Date().getFullYear()} wiyco</span>
          <ul className="flex items-center justify-center space-x-4 text-lg">
            <li
              title="GitHub"
              className={cn("navbar-icon-wrap", isRoot ? "" : "hover:!bg-neutral-700/60")}
            >
              <Link href={MediaLinks.GITHUB} target="_blank" rel="noopener noreferrer">
                <span className={cn(isRoot ? "stroke-current" : "stroke-white")}>
                  <GitHub />
                </span>
              </Link>
            </li>
            <li
              title="X"
              className={cn("navbar-icon-wrap", isRoot ? "" : "hover:!bg-neutral-700/60")}
            >
              <Link href={MediaLinks.X} target="_blank" rel="noopener noreferrer">
                <span className={cn(isRoot ? "stroke-current" : "stroke-white")}>
                  <X />
                </span>
              </Link>
            </li>
            <li
              title="Instagram"
              className={cn("navbar-icon-wrap", isRoot ? "" : "hover:!bg-neutral-700/60")}
            >
              <Link href={MediaLinks.INSTAGRAM} target="_blank" rel="noopener noreferrer">
                <span className={cn(isRoot ? "stroke-current" : "stroke-white")}>
                  <Instagram />
                </span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
