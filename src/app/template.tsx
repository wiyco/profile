"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

import { TemplateMotion } from "./template-motion";

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <Suspense>
        <TemplateMotion key={pathname}>{children}</TemplateMotion>
      </Suspense>
    </AnimatePresence>
  );
}
