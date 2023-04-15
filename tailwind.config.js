/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        // Primary
        'light-cyan': 'hsl(193, 38%, 86%)',
        'neon-green': 'hsl(150, 100%, 66%)',

        // Neutral
        'grayish-blue': 'hsl(217, 19%, 38%)',
        'dark-grayish-blue': 'hsl(217, 19%, 24%)',
        'dark-blue': 'hsl(218, 23%, 16%)',
      },
    },
    fontFamily: {
      quote: 'Manrope, sans-serif',
    },
    dropShadow: {
      button: [
        '5px 5px 20px rgba(83, 255, 171, 0.4)',
        '-5px -5px 20px rgba(83, 255, 171, 0.4)',
      ],
    },
  },
  plugins: [],
};
