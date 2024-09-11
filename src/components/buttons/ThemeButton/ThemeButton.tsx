"use client";

import { Themes } from "@constants/themes";
import HalfMoon from "@icons/half-moon.svg";
import SunLight from "@icons/sun-light.svg";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import { useThemeButton } from "./ThemeButton.hooks";

type ThemeButtonProps = React.ComponentProps<"button">;

export function ThemeButton({ className, ...props }: ThemeButtonProps) {
  const { setTheme, resolvedTheme } = useTheme();

  const { isDarkTheme, handleClick } = useThemeButton({ setTheme, resolvedTheme });

  return (
    <button
      {...props}
      className={className}
      type="button"
      title="Color Theme"
      aria-label="Switch Theme"
      onClick={() => handleClick()}
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
  );
}
