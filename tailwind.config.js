/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      cairo: ["Cairo", "sans-serif"],
    },
    extend: {
      colors: {
        "tor-purple": "#7D4698",
        "dark-purple": "#59316B",
        dark: "#010409",
        creators: "#0D1117",
        "creators-border": "#232930",
      },
    },
  },
  plugins: [],
};
