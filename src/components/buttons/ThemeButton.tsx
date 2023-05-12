import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import SunLight from "public/icons/sun-light.svg";
import HalfMoon from "public/icons/half-moon.svg";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      className=""
      title="Color Theme"
      aria-label="Switch Theme"
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {mounted && (
        <span className="">
          {theme === "light" ? (
            <HalfMoon className="stroke-current" />
          ) : (
            <SunLight className="stroke-current" />
          )}
        </span>
      )}
    </button>
  );
}
