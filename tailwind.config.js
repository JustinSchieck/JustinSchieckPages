/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7e22ce", // purple-600
          dark: "#581c87", // purple-800
          light: "#c084fc", // purple-300
        },
        accent: {
          indigo: "#818cf8",
          cyan: "#22d3ee",
        },
        neutral: {
          base: "#e2e8f0",
          bg: "#0f0f1a",
          border: "#334155",
        },
        text: {
          gray: "#CBCBCB",
        },
      },
    },
  },
  plugins: [],
};
