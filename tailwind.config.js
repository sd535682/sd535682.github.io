/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        darkTheme: {
          backgroundColor: "#23272e",
          // cardColor: "#64748b",
          textColor: "#eceef2",
          textGrey: "#cbd5e1",
        },
      },
    },
  },
  plugins: [],
};
