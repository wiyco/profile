/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        screen: ["100vh", "100dvh"],
        "3/10": "30%",
      },
      minHeight: {
        screen: ["100vh", "100dvh"],
      },
      maxHeight: {
        screen: ["100vh", "100dvh"],
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      inset: {
        "7/10": "70%",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
