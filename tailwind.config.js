/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        lightdark: "#3e3e42",
        mediumdark: "#2d2d30",
      },
    },
    screens: {
      xs: "420px",
    },
  },
  plugins: [],
};
