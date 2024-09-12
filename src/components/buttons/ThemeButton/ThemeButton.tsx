"use client";

import { Themes } from "@constants/themes";
import HalfMoon from "@icons/half-moon.svg";
import SunLight from "@icons/sun-light.svg";
import { Skeleton } from "@nextui-org/skeleton";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import { useThemeButton } from "./ThemeButton.hooks";

type ThemeButtonProps = React.ComponentProps<"button">;

export function ThemeButton({ className, ...props }: ThemeButtonProps) {
  const { setTheme, resolvedTheme } = useTheme();

  const { isMounted, isDarkTheme, handleClick } = useThemeButton({ setTheme, resolvedTheme });

  return isMounted ? (
    <button
      {...props}
      className={className}
      type="button"
      title="Color Theme"
      aria-label="Switch Theme"
      onClick={() => handleClick()}
      disabled={!isMounted}
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
