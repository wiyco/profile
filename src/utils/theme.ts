/**
 * Prevents flicker in color mode
 * @see RootLayout
 */
(function () {
  try {
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    /** next-themes color theme key */
    const fromStorage = localStorage.getItem("theme");
    const colorMode: "light" | "dark" =
      fromStorage === "system" || fromStorage == null
        ? prefers
        : fromStorage === "dark"
          ? "dark"
          : "light";
    document.documentElement.classList.add(colorMode);
  } catch (_) {
    console.warn("Failed to initialize color mode.");
  }
})();
