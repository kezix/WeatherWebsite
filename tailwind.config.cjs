/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['Montserrat', "sans-serif"],
		  },
		  colors: {
			'blurple': '#5865F2',
			"white": "#FFFFFF",
			"red": "#ff0000"
		  }
	},
	plugins: [],
}
