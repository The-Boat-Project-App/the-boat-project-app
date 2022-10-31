/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './features/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      mainBlue: '#0C617D',
      clearBlue: '#139DB8',
      deepBlue: '#272E67',
      green: '#87BC23',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
      white: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        raleway: ['Raleway_400Regular'],
        ralewayBold: ['Raleway_Bold'],
      },
    },
  },
  plugins: [],
}
