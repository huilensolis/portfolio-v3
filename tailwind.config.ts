import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dash: {
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        dash: "dash 200s forwards infinite",
      },
    },
  },
  plugins: [],
};
export default config;
