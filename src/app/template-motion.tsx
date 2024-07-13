"use client";

import { motion } from "framer-motion";

type TemplateMotionProps = Readonly<{
  children?: React.ReactNode;
  pathname: string;
}>;

export function TemplateMotion({ children, pathname }: TemplateMotionProps) {
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
