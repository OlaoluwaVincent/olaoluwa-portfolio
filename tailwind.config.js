/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				lobster: ["'Lobster Two'", 'cursive'],
				oleo: ["'Oleo Script Swash Caps'", 'cursive'],
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
