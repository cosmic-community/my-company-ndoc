/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7f4',
          100: '#dcebe3',
          200: '#bcd8ca',
          300: '#90bda8',
          400: '#629c82',
          500: '#437f66',
          600: '#326551',
          700: '#2a5143',
          800: '#244137',
          900: '#1f362f',
        },
        sand: {
          50: '#faf8f4',
          100: '#f2ede2',
          200: '#e3d8c4',
          300: '#cfbb9c',
          400: '#b89972',
          500: '#a78157',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}