"use client";

import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

type TemplateMotionProps = Readonly<{
  children?: React.ReactNode;
  pathname: string;
}>;

export function TemplateMotion({ children, pathname }: TemplateMotionProps) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    try {
      if (pathname === "/") return;

      if (pathname === "/archive") {
        animate(
          ".timeline:nth-child(-n + 8), .timeline-item-animation:nth-child(-n + 8)",
          { opacity: [0, 1] },
          {
            duration: 0.3,
            ease: "linear",
            delay: stagger(0.1, { startDelay: 0.1, from: 0, ease: "linear" }),
          }
        );
      }

      if (pathname === "/blog") {
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

      if (pathname.match(/\/blog\/[a-zA-Z0-9_\-=]+/)) {
        animate(
          ".header-wrap, .markdown-wrap > :nth-child(-n + 16)",
          { opacity: [0, 1] },
          {
            duration: 0.3,
            ease: "linear",
            delay: stagger(0.1, { startDelay: 0.1, from: 0, ease: "linear" }),
          }
        );
      }
    } catch (e) {
      console.error(e);
    }
  }, [animate, pathname]);

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
