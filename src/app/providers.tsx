"use client";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemeProvider } from "next-themes";

type ProvidersProps = {
  children?: React.ReactNode;
  nextUIProviderProps?: Omit<React.ComponentProps<typeof NextUIProvider>, "children">;
  nextThemeProviderProps?: Omit<React.ComponentProps<typeof NextThemeProvider>, "children">;
};

export function Providers({
  children,
  nextUIProviderProps,
  nextThemeProviderProps,
}: ProvidersProps) {
  return (
    <NextUIProvider {...nextUIProviderProps}>
      <NextThemeProvider {...nextThemeProviderProps}>{children}</NextThemeProvider>
    </NextUIProvider>
  );
}
