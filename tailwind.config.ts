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
      boxShadow: {
        top: "inset 0px 1px 0",
        bottom: "inset 0px -1px 0px 0px",
        right: "inset -1px 0px 0",
        left: "inset 1px 0px 0",
        "top-right": "inset -1px 1px",
        "top-left": "inset 1px 1px",
        "bottom-right": "inset -1px -1px",
        "bottom-left": "inset 1px -1px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
