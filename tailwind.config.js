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
				"hexagon-ex": "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
				"border-gradiant":
					"radial-gradient(circle, rgba(46,127,222,1) 0%, rgba(148,187,233,0.372233893557423) 100%)",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"box-matriz":
					"radial-gradient(109.99% 253.12% at 76.68% 66.67%, #602EA6 0%, #C977D6 100%)",
				"presentation-dark-landing":
					"linear-gradient(180deg, rgba(254, 200, 241, 0.045) -22.92%, rgba(237, 146, 215, 0) 26.73%), radial-gradient(116.32% 95.63% at 76.68% 66.67%, rgba(96, 46, 166, 0) 0%, rgba(201, 119, 214, 0.3) 100%)",
			},
			colors: {
				"text-parraf": "rgba(255, 255, 255, 0.7)",
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
			boxShadow: {
				"shadow-matriz": "0px 0px 30px #763DB0",
				"transparent-shadow":
					"rgba(0, 0, 0, 0.25) 0px 40px 80px, rgba(255, 255, 255, 0.15) 0px 0px 0px 0.5px inset",
			},
			animation: {
				slideInUp: "slideInUp 1.2s ease-in",
				scaleOut: "scaleOut 1s ease-out",
				slideRight: "slideRight 3.2s ease-out",
				slideLeft: "slideLeft 3.2s ease-out",
				slideBlur: "slideBlur .5s  ease-in 1s forwards",
				slideRight2: "slideRight 3.2s ease-in",
				menuFadeIn: "menuFadeIn 0.5s forwards ease-in-out",
				menuFadeOut: "menuFadeIn 0.5s forwards ease-in-out",
			},
			keyframes: {
				slideInUp: {
					"0%": { transform: "translateY(-100%)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				scaleOut: {
					"0%": { transform: "scale(0)" },
					"25%": { transform: "scale(.25)" },
					"50%": { transform: "scale(.5)" },
					"100%": { transform: "scale(1)" },
				},
				slideRight: {
					"0%": { transform: "translateX(-100%)", opacity: "1" },
					"100%": { transform: "translateX(0)", opacity: "1" },
				},
				slideLeft: {
					"0%": { transform: "translateX(100%)", opacity: "1" },
					"100%": { transform: "translateX(0)", opacity: "1" },
				},
				slideBlur: {
					"0%": { filter: "blur(10px)", opacity: "0" },
					"25%": { filter: "blur(10px)", opacity: "0" },
					"50%": { filter: "blur(5)", opacity: "1" },
					"100%": { filter: "blur(0)", opacity: "1" },
				},
				slideRight2: {
					"0%": { transform: "translateX(-50%)", opacity: "1" },
					"100%": { transform: "translateX(0)", opacity: "1" },
				},
				menuFadeIn: {
					"0%": {
						opacity: "0",
						transform: "translateY(80px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				menuFadeOut: {
					"0%": {
						opacity: "1",
						transform: "translateY(0px)",
					},
					"100%": {
						opacity: "0",
						transform: "translateY(90px)",
					},
				},
			},
		},
	},
	plugins: [],
};
