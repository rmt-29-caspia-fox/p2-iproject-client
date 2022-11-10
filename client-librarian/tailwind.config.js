/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    container: {
      padding: '0,25rem',
      center: true
    },
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
    }
  },
  plugins: [],
}
