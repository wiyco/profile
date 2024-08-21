"use client";

import { motion, stagger, useAnimate } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { usePath } from "@/hooks/usePath";

type TemplateMotionProps = Readonly<{
  children?: React.ReactNode;
}>;

export function TemplateMotion({ children }: TemplateMotionProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [scope, animate] = useAnimate();

  const { isArchive, isBlog, isBlogPost } = usePath();

  useEffect(() => {
    try {
      if (isArchive) {
        animate(
          ".timeline-item-animation:nth-child(-n+8)",
          { opacity: [0, 1] },
          {
            duration: 0.3,
            ease: "linear",
            delay: stagger(0.1, { startDelay: 0.1, from: 0, ease: "linear" }),
          }
        );
      }

      if (isBlog && searchParams.has("page")) {
        animate(
          ".blog-item-animation",
          { opacity: [0, 1] },
          {
            duration: 0.3,
            ease: "linear",
            delay: stagger(0.1, { startDelay: 0.1, from: 0, ease: "linear" }),
          }
        );
      }

      if (isBlogPost) {
        animate(
          ".header-wrap, .markdown-wrap > :nth-child(-n+12)",
          { opacity: [0, 1] },
          {
            duration: 0.3,
            ease: "linear",
            delay: stagger(0.1, { startDelay: 0.1, from: 0, ease: "linear" }),
          }
        );
      }
    } catch (_) {
      console.log("No animated elements found.");
    }
  }, [isArchive, isBlog, isBlogPost, searchParams, animate]);

  return (
    <motion.main
      key={pathname}
      ref={scope}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "linear" }}
    >
      {children}
    </motion.main>
  );
}
