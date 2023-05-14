/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e35700",
        secondary: "#ffb080",
        invis: "#f2f2f2",
        lightdark: "#969696",
        mediumdark: "#696969",
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
    animation: {
      toast: "toast 8s linear 1 forwards",
    },
    keyframes: {
      toast: {
        "100%": { transform: "translateX(-100%)" },
      },
    },
  },
  plugins: [],
};
