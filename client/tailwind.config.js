/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        side: "#171E31", // rgb(23, 30, 49) side menu
        bg: "#10141E", // rgb(16, 20, 30) body
        icon: "#5A6A90", // rgb(90, 106, 144) non-selected icons
        logo: "#FC4545", // rgb(252, 69, 69) logo
        text: "#FFF",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
      screens: {
        "mobile-l": "425px", // => @media (min-width: 425px) { ... }
      },
    },
  },
  plugins: [],
};
