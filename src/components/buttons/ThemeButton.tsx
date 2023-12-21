"use client";

import HalfMoon from "@icons/half-moon.svg";
import SunLight from "@icons/sun-light.svg";
import { useTheme } from "next-themes";

type ThemeButtonProps = {
  className?: React.HTMLAttributes<HTMLButtonElement>["className"];
};

export function ThemeButton({ className }: ThemeButtonProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <button
      className={className}
      type="button"
      title="Color Theme"
      aria-label="Switch Theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <span className="stroke-current">
        {resolvedTheme === "light" ? <HalfMoon /> : <SunLight />}
      </span>
    </button>
  );
}
