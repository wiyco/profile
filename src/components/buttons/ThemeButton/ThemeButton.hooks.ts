import { Themes } from "@constants/themes";
import { useTheme } from "next-themes";
import { useCallback, useMemo } from "react";

type UseThemeButtonProps = {
  setTheme: ReturnType<typeof useTheme>["setTheme"];
  resolvedTheme: ReturnType<typeof useTheme>["resolvedTheme"];
};

function useThemeButton({ setTheme, resolvedTheme }: UseThemeButtonProps) {
  const isDarkTheme = useMemo(() => resolvedTheme === Themes.DARK, [resolvedTheme]);

  const handleClick = useCallback(() => {
    setTheme((prev) => (prev === Themes.DARK ? Themes.LIGHT : Themes.DARK));
  }, [setTheme]);

  return { isDarkTheme, handleClick };
}

export { useThemeButton };
