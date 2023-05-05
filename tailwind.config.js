/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "purple-btn": "#635FC7",
        "hover-purple": "#A8A4FF",
        "dark-gray": "#20212C",
        "darker-gray": "#2B2C37",
        "light-gray": "#3E3F4E",
        "danger-btn": "#EA5555",
        "danger-hover": "#FF9898",
        "dark-blue": "#000112",
        "medium-gray": "#828FA3",
        "light-blue": "#E4EBFA",
        "almost-white": "#F4F7FD",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
