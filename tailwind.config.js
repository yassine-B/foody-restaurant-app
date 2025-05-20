const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/PageComponents/**/*.{js,ts,jsx,tsx}',
    './src/Components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xxs: '320px',
      xs: '480px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        title: ['PlayfairDisplay-Italic', 'cursive'],
        text: ['Open Sans', 'sans-serif']
      },
      opacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        60: '0.6',
        70: '0.7',
        80: '0.8'
      },
      inset: {
        '12.5rem': '12.5rem',
        '2.5rem': '2.5rem',
        '4p': '4%'
      },
      height: {
        '19rem': '19rem',
        '21rem': '21rem',
        '27rem': '27rem',
        '28rem': '28rem',
        '30rem': '30rem',
        '31rem': '31rem',
        '32rem': '32rem',
        '33rem': '33rem',
        '34rem': '34rem',
        '36rem': '36rem',
        '37rem': '37rem',
        '38rem': '38rem',
        '40rem': '40rem',
        '70vh': '70vh',
        '80vh': '80vh',
        '100vh': '100vh'
      },
      width: {
        '20rem': '20rem',
        '21rem': '21rem',
        '25rem': '25rem',
        '31rem': '31rem',
        '46rem': '46rem'
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        primaryText: 'var(--text-color)',
        background: 'var(--background-color)',
        blackColor: '#333333',
        yellowColor: '#fffdd0'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
