/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: "Inter",
    },
    extend: {
      screens: {
        xs: "375px",
      },
      fontFamily: {
        kanit: "Kanit",
      },
    },
  },
  plugins: [],
}
