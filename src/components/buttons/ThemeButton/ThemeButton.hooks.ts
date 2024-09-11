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
    setTheme(isDarkTheme ? Themes.LIGHT : Themes.DARK);
  }, [isDarkTheme, setTheme]);

  return { isDarkTheme, handleClick };
}

export { useThemeButton };
