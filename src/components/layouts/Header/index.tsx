"use client";

import { Raleway } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Navbar } from "@/components/layouts/Header/Navbar";
import { cn } from "@/utils/cn";

const raleway = Raleway({ subsets: ["latin"], display: "swap" });

export function Header() {
  const pathname = usePathname();
  const [isRoot, setIsRoot] = useState(false);

  useEffect(() => setIsRoot(pathname === "/"), [pathname]);

  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-40 w-full px-6 py-3",
        isRoot ? "fixed" : "sticky bg-zinc-50/40 shadow backdrop-blur-lg dark:bg-zinc-900/40"
      )}
    >
      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between">
        <Link href={"/"} className={cn("text-2xl font-normal", raleway.className)}>
          wiyco
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
