/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: { 
    fontFamily: {
      noto: ['Noto Sans JP', 'sans-serif'],
      young: ['Young Serif', 'serif'],
    },
    container: {
      center: true,
      screens: {
        sm: '300px',
        md: '300px',
        lg: '300px',
        xl: '300px',
        '2xl': '300px',
      }
    },
    extend: {},
  },
  plugins: [],
}