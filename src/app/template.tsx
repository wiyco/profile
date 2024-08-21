"use client";

import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";

import { TemplateMotion } from "./template-motion";

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Suspense fallback={null}>
      <AnimatePresence mode="wait">
        <TemplateMotion>{children}</TemplateMotion>
      </AnimatePresence>
    </Suspense>
  );
}
