/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: '16px',
      },
      fontSize: {
        '4xl': '40px',
      },
    },
  },
  plugins: [],
};