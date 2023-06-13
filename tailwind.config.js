/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"presentation-dark-landing":
					"linear-gradient(180deg, rgba(254, 200, 241, 0.045) -22.92%, rgba(237, 146, 215, 0) 26.73%), radial-gradient(116.32% 95.63% at 76.68% 66.67%, rgba(96, 46, 166, 0) 0%, rgba(201, 119, 214, 0.3) 100%)",
			},
			colors: {
				"label-dark-primary": "rgba(255,255,255,1)",
				"label-dark-secondary": "rgba(255,255,255,0.600)",
				"label-dark-accent-1": "rgba(255,255,255,1)",
				"label-dark-title":
					"linear-gradient(to bottom, rgba(204,81,214,0.799) 0%,rgba(90,104,232,0.353) 54.83%,rgba(225,177,255,0.884) 100%)",
			},
			borderImage: {
				"gradient-border":
					"linear-gradient(var(--quick-links-hover-bg, #f0f9ff), var(--quick-links-hover-bg, #f0f9ff)) padding-box, linear-gradient(to top, #818cf8, #22d3ee, #0ea5e9) border-box",
			},
		},
	},
	plugins: [],
};
