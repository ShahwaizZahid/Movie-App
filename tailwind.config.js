/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // ✅ Includes all files inside /app
    "./components/**/*.{js,jsx,ts,tsx}", // Optional: if you have a components folder
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        light: {
          100: "#D6C7FF",
          200: "#A8B5DB",
          300: "#9CA4AB",
        },
        dark: {
          100: "#221F3D",
          200: "#0F0D23",
        },
        accent: "#AB8BFF",
      },
    },
  },
  plugins: [],
};
