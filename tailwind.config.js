/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			colors: {
				"make-light-green": "#70EC4C",
				"make-dark-green": "#2b5223",
				"make-light-red": "#f01507",
				"make-dark-red": "#4a0905",
				"modal-bgc": "rgba(0, 0, 0, 0.8)"
			},
			fontSize: {
				large: "13rem",
				medium: "7rem",
				small: "3rem",
				xSmall: "2rem",
				xxSmall: "1rem",
			},
			boxShadow: {
				pixelLarge: [
					"-10px 0 0 0 #ffffff",
					"10px 0 0 0 #ffffff",
					"0 10px 0 0 #ffffff",
					"0 -10px 0 0 #ffffff",
				],
				pixelMedium: [
					"-7px 0 0 0 #ffffff",
					"7px 0 0 0 #ffffff",
					"0 7px 0 0 #ffffff",
					"0 -7px 0 0 #ffffff",
				],
				pixelSmall: [
					"-2px 0 0 0 #ffffff",
					"2px 0 0 0 #ffffff",
					"0 2px 0 0 #ffffff",
					"0 -2px 0 0 #ffffff",
				],
			},
			fontFamily: {
				"pixel" : ["Pixel"]
			},
			screens: {
				"md": {
					"max": "767px"
				},
				"sm": {
					"max": "639px"
				}
			},
			keyframes: {
				"loading": {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				}
			}
		},
	},
	plugins: [],
};
