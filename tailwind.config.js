/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(34, 34, 34)',
      },
      fontFamily: {
        'Rubik': ['Rubik', 'sans-serif'],
        'Roboto-Mono': ['roboto-mono', 'sans-serif']
      }
    },
  },
  plugins: [],
}

