/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  extend:{
    keyframes:{
        heroZoom:{
            "0%,100%":{
                transform:"scale(1.05)"
            },
            "50%":{
                transform:"scale(1.12)"
            }
        }
    },
    fontFamily: {
        goudy: [
            "Goudy Old Style",
            "serif"
        ],
    },
}
}