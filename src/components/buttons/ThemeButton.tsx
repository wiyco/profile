"use client";

import { Themes } from "@constants/themes";
import HalfMoon from "@icons/half-moon.svg";
import SunLight from "@icons/sun-light.svg";
import { useTheme } from "next-themes";

type ThemeButtonProps = {
  className?: React.HTMLAttributes<HTMLButtonElement>["className"];
};

export function ThemeButton({ className }: ThemeButtonProps) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      className={className}
      type="button"
      title="Color Theme"
      aria-label="Switch Theme"
      onClick={() => setTheme(resolvedTheme === Themes.DARK ? Themes.LIGHT : Themes.DARK)}
    >
      <span className="stroke-current">
        {resolvedTheme === Themes.DARK ? <HalfMoon /> : <SunLight />}
      </span>
    </button>
  );
}
