/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        loginBackgrund:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg')",
      },
      height: {
        cardh : 'calc(100vh - 0)'
      },
      colors: {
        black: 'rgba(0, 0, 0, 0.7)',
      },
      backgroundColor: {
        blackTransparent: 'rgba(0, 0, 0, 0.7)',
        inputBackground: 'rgba(22, 22, 22, 0.7);',
        buttonColor: 'rgb(229, 9, 20)',
        singinButton: 'rgb(128,128,128,0.4)'
      },
      borderColor: {
        inputBackground: 'rgba(128, 128, 128, 0.7);'
      }
    },
  },
  plugins: [],
};
