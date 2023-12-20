"use client";

import HalfMoon from "@icons/half-moon.svg";
import SunLight from "@icons/sun-light.svg";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type ThemeButtonProps = {
  className?: React.HTMLAttributes<HTMLButtonElement>["className"];
};

export function ThemeButton({ className }: ThemeButtonProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      className={className}
      type="button"
      title="Color Theme"
      aria-label="Switch Theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {mounted && (
        <span className="stroke-current">{theme === "light" ? <HalfMoon /> : <SunLight />}</span>
      )}
    </button>
  );
}
