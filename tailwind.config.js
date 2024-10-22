/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["GeneralSans-Regular", "sans-serif"],
        extralight: ["GeneralSans-Extralight", "sans-serif"],
        light: ["GeneralSans-Light", "sans-serif"],
        medium: ["GeneralSans-Medium", "sans-serif"],
        semibold: ["GeneralSans-Semibold", "sans-serif"],
        bold: ["GeneralSans-Bold", "sans-serif"],
        variable: ["GeneralSans-Variable", "sans-serif"],
        italic: ["GeneralSans-Italic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
