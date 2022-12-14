/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translate(-5px)' },
          '50%': { transform: 'translate(5px)' },
        },
      },
      animation: {
        shake: 'shake 0.15s ease-in-out 2',
      },
      colors: {
        primary: 'rgb(58 54 219)',
        secondary: 'rgb(0 128 128)',
        light: 'rgb(241 244 249)',
        dark: 'rgb(43 44 46)',
        info: 'rgb(59 130 246)',
        error: 'rgb(220 53 69)',
        success: 'rgb(25 135 84)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
