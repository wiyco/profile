"use client";

import { Themes } from "@constants/themes";
import HalfMoon from "@icons/half-moon.svg";
import SunLight from "@icons/sun-light.svg";
import { Skeleton } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useLayoutEffect, useState } from "react";

type ThemeButtonProps = {
  className?: React.HTMLAttributes<HTMLButtonElement>["className"];
};

export function ThemeButton({ className }: ThemeButtonProps) {
  const { setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
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
  ) : (
    <span className={className}>
      <Skeleton className="h-6 w-6 rounded-full" />
    </span>
  );
}
