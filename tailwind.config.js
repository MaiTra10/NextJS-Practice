/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      
      colors: {

        background: '#333333ff',
        font_main: '#e6e4e4'

      }

    },
  },
  plugins: [],
}
