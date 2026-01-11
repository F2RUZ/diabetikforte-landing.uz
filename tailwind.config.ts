import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Bu qator komponentlar uchun juda muhim!
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-futura)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#00529B",
        secondary: "#00AEEF",
      },
    },
  },
  plugins: [],
};
export default config;
