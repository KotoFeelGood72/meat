/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontSize: {
      sm: '12px',
        '14sm': '14px',
        '16sm': '16px',
        '18sm': '18px',
      xl: '20px',
      '24xl': '24px',
      '26xl': '26px',
      '40xl': '40px'
    },
    extend: {
      colors: {
        light: '#FAFBFF',
        customGrey: '#D1D1D1',
        dark: '#242424',
        honey: '#FEE2A5'
      },
      userSelect: {
        'none': 'none',
      },
    },
  },
  plugins: [],
}
