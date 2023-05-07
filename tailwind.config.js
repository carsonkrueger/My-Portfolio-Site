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
      textColor: {
        invis: "#49494a",
        lightdark: "#3e3e42",
        mediumdark: "#2d2d30",
        dark: "#272727",
      },
      backgroundColor: {
        lightdark: "#3e3e42",
        mediumdark: "#2d2d30",
        dark: "#272727",
        orange: "#d55c0e",
      },
      backgroundImage: {
        wavesTop: "url(/layeredWaves.svg)",
      },
      borderColor: {
        lightdark: "#3e3e42",
        mediumdark: "#2d2d30",
        dark: "#272727",
      },
    },
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
