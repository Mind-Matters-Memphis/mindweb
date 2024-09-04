/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      dust: '#F2F2F2',
      sand: '#E9E3DC',
      sage: '#9DB8A8',
      coral: '#D5573B',
      inlet: '#4D7EA8',
      midnight: '#272932'
    },
    fontFamily: {
      'display': ['Lobster', "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'altdisplay': ['Reem Kufi',  "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'body': ['Playfair', "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      'altbody': ['Merriweather', "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      'accessdisplay': ["Rockwell", "Times New Roman", "Times", "serif"],
      'accessbody': ["Tahoma", "Times New Roman", "Times", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}

