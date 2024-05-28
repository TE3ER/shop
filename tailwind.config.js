/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '60px 60px 60px 60px rgba(0, 0, 0, 0.3)'
      }
    }
  },
  plugins: []
}
