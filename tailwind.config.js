/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F9EFF",
        dark: "#0B0B0F",
        light: "#F8F9FC"
      }
    }
  },
  plugins: []
};
