/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          50: "#fef2f2",
          100: "#fde6e6",
          200: "#fbc8c8",
          300: "#f8a3a3",
          400: "#f47272",
          500: "#C8374D",
          600: "#B42D42",
          700: "#9A2238",
          800: "#7D1B2E",
          900: "#5C1322",
        },
        brand: "#C8374D",
        brandDark: "#B42D42",
        surface: "#F5F5F7",
        textPrimary: "#1A1A2E",
        textSecondary: "#6B7280",
        textMuted: "#9CA3AF",
      },
    },
  },
  plugins: [],
};
