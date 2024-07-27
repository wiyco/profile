"use client";

import { AnimatePresence } from "framer-motion";

import { TemplateMotion } from "./template-motion";

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AnimatePresence mode="wait">
      <TemplateMotion>{children}</TemplateMotion>
    </AnimatePresence>
  );
}
