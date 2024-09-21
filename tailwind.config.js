/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        'popins':["Poppins"],
      },
      colors:{
        'primary': '#090F4E',
        'secondary': '#293FCC',
        'tertiary': '#63657E',
      },
      backgroundImage:{
        'bg-section-2': "url('../img/BG-section-2.png')",
        'bg-section-3': "url('../img/BG-section-3.png')",
        'bg-contact': "url('../img/BG-contact.png')",
        'bg-footer': "url('../img/BG-footer.png')",
      }
    },
  },
  plugins: [],
}

