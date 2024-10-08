/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
  	colors: {
  		dust: '#F9F9F9',
  		sand: '#E9E3DC',
  		sage: '#9DB8A8',
  		coral: '#D5573B',
  		inlet: '#4D7EA8',
  		midnight: '#272932'
  	},
  	fontFamily: {
  		altdisplay: ['Reem Kufi',  "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
  		accessdisplay: ["Bebas", "Times New Roman", "Times", "serif"],
  		accessbody: ["Tahoma", "Times New Roman", "Times", "sans-serif"]
  	},
  	extend: {
  		borderWidth: {
        '6': '6cqh',
  			'12': '12.5cqh',
  			'16': '16.65cqh',
  			'25': '25cqh',
  			'33': '33.3cqh',
  			'50': '50cqh',
  			'75': '75cqh',
  			'100': '100cqh',
        '100w': '100cqw'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

