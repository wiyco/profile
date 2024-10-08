"use client";

import Link from "next/link";

import { usePath } from "@/hooks/usePath";
import { raleway } from "@/styles/fonts";
import { cn } from "@/utils/cn";

import { Navbar } from "./Navbar";

export function Header() {
  const { isRoot } = usePath();

  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-40 grid max-h-14 min-h-14 w-full content-center px-6",
        isRoot ? "fixed" : "sticky bg-neutral-50/40 shadow backdrop-blur-lg dark:bg-neutral-900/40"
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-screen-lg items-center justify-between">
        <Link href={"/"} className={cn("text-2xl font-normal", raleway.className)}>
          wiyco
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
