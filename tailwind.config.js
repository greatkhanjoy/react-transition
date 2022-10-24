/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        latoLight: ['LatoLight'],
        latoBold: ['LatoBold'],
        latoRegular: ['LatoRegular'],
      },
    },
  },
  plugins: [],
}
