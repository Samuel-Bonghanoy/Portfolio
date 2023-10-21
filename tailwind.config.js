/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        maindark:
          "0 4px 6px -1px rgba(34, 33, 17, 0.1), 0 2px 4px -1px rgba(34, 33, 17, 0.06)",
      },
      colors: {
        maindark: "#222111",
        mainwhite: "#f4f4f4",
        subwhite: "#ffffff",
        darktext: "#333333",
        graytext: "#757575",
        crimson: "#961418",
      },
      fontFamily: {
        noto: "'Noto Sans JP', sans-serif",
        raleway: "Raleway, sans-serif",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: ["@tailwindcss/line-clamp", daisyui],
};
