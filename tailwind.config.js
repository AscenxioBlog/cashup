/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blackcolor: '#101010',
        btncolor: '#D87D4A',
        btnactive: '#FBAF85'
      }
    },
  },
  plugins: [],
}

