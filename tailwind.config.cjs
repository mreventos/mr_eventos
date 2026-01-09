/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      clip: {
        none: "rect(0 0 0 0)",
      },
      backgroundImage: {
        bgImage: "url('../fundo.jpg')",
      },
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.18)",
      },
    },
  },
  plugins: [],
};
