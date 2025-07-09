import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./ver/**/*.{ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        myprimarycolor: "#7C3AED",
        mysecondarycolor: "#F59E0B",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;


