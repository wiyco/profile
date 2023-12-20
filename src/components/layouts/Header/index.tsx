import { Raleway } from "next/font/google";
import Link from "next/link";

import { Navbar } from "@/components/layouts/Header/Navbar";
import { cn } from "@/utils/cn";

const raleway = Raleway({ subsets: ["latin"], display: "swap" });

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-40 w-full bg-zinc-50/40 px-6 py-3 shadow backdrop-blur-lg dark:bg-zinc-900/40">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <Link href={"/"} className={cn("text-2xl", raleway.className)}>
          wiyco
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
