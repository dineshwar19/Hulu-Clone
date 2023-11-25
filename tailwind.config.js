/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "580px",
      md: "600px",
      lg: "800px",
      xl: "1440px",
      "2xl": "2000px",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
