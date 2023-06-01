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
    boxShadow: {
      circleOuter:
        "3px 3px 4px -1px rgba(0,0,0,0.15), -2px -2px 5px -0.5px rgba(0,0,0,0.1)",
      circleInner:
        "inset 2px 2px 3px -0.5px rgba(0,0,0,0.2), inset -2px -2px 3px -0.5px rgba(255,255,255,1), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.1), 0px 12px 10px -10px rgba(0,0,0,.5)",
    },
  },
  plugins: [],
};
