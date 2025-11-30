import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}"
  ],
  theme: {
    extend: {
      colors: {
        daybreak: "#fdf5d5",
        sky: "#a7d8ff",
        grass: "#8ad17c",
        twilight: "#6247aa"
      },
      fontFamily: {
        headline: ["var(--font-fredoka)", "sans-serif"],
        body: ["var(--font-nunito)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
