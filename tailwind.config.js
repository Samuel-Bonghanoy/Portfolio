/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maindark: "#222111",
        mainwhite: "#f4f4f4",
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
