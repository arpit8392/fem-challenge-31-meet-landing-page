/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				steelBlue: '#4D96A9',
				mediumPurple: '#855FB1',
				darkBlue: '#28283D',
				slateGray: '#87879D',
				lightSkyBlue: '#8FE3F9',
				lavendar: '#D9B8FF',
				offWhite: '#FAFAFA',
				skyBlue: '#71C0D4',
				pastelPurple: '#B18BDD',
			},
		},
	},
	plugins: [],
}
