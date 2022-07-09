/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/layouts/*.{js,ts,jsx,tsx}',
		'./src/pages/*.{js,ts,jsx,tsx}',
		'./src/components/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
				mono: ['Roboto Mono', 'monospace'],
			},
			colors: {
				gray: {
					100: '#E1E1E6',
					300: '#C4C4CC',
					400: '#8D8D99',
					500: '#7C7C8A',
					600: '#323238',
					700: '#29292E',
					800: '#202024',
					900: '#121214',
				},
				green: {
					300: '#00B37E',
					500: '#00875F',
					700: '#015F43',
				},
				red: {
					500: '#AB222E',
					700: '#7A1921',
				},
				yellow: {
					500: '#FBA94C',
				},
			},
		},
	},
	plugins: [],
};
