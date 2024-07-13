"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import { TemplateMotion } from "./template-motion";

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <TemplateMotion pathname={pathname}>{children}</TemplateMotion>
    </AnimatePresence>
  );
}
