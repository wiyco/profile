/**
 * Prevents flicker in color mode
 * @see RootLayout
 */
(function () {
  try {
    const documentElement = document.documentElement,
      classList = documentElement.classList;
    classList.remove("light", "dark");
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "system" || (!storedTheme && true)) {
      const prefersTheme = "(prefers-color-scheme: dark)",
        prefersMedia = window.matchMedia(prefersTheme);
      if (prefersMedia.media !== prefersTheme || prefersMedia.matches) {
        documentElement.style.colorScheme = "dark";
        classList.add("dark");
      } else {
        documentElement.style.colorScheme = "light";
        classList.add("light");
      }
    } else if (storedTheme) {
      classList.add(storedTheme || "");
    }
    if (storedTheme === "light" || storedTheme === "dark")
      documentElement.style.colorScheme = storedTheme;
  } catch (_) {
    console.warn("Failed to initialize color mode.");
  }
})();
