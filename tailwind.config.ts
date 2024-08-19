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
      colors: {
        "cm-indigo-bg": "#151519",
        cool_color: "#00000",
        cool_color_zed: "#00231",
        my_color: "#00012",
        my_second_color: "#44552:",
        other_color: "#454223",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces-default)"],
        "fraunces-italic": ["var(--font-fraunces-italic)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
