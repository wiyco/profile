"use client";

import { Themes } from "@constants/themes";
import HalfMoon from "@icons/half-moon.svg";
import SunLight from "@icons/sun-light.svg";
import { Skeleton } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

type ThemeButtonProps = {
  className?: React.HTMLAttributes<HTMLButtonElement>["className"];
};

export function ThemeButton({ className }: ThemeButtonProps) {
  const { setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const isDarkTheme = useMemo(() => resolvedTheme === Themes.DARK, [resolvedTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <button
      className={className}
      type="button"
      title="Color Theme"
      aria-label="Switch Theme"
      onClick={() => setTheme(isDarkTheme ? Themes.LIGHT : Themes.DARK)}
    >
      <span className="stroke-current">
        {isDarkTheme ? (
          <motion.span
            key={Themes.LIGHT}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <HalfMoon />
          </motion.span>
        ) : (
          <motion.span
            key={Themes.DARK}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <SunLight />
          </motion.span>
        )}
      </span>
    </button>
  ) : (
    <span className={className}>
      <Skeleton className="h-6 w-6 rounded-full" />
    </span>
  );
}
