/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			serif:["Merriweather", "serif"]
		},
		textColor: {
			'army': '#33594A'
		},
		extend: {},
	},
	plugins: [

	],
}
