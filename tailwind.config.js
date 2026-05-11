/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#E8365D",
        brandLight: "#ffeef3",
        brandMuted: "#f9c9d6",
        ink: "#1A1A2E",
        inkSoft: "#4A4A6A",
        inkMuted: "#9898B0",
        surface: "#FFFFFF",
        surface2: "#F7F7FB",
        surface3: "#F0F0F8",
        greenBrand: "#1DAA6B",
        amberBrand: "#F59B00",
        blueBrand: "#1A73E8",
      },
    },
   theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  },
  plugins: [],
};
