/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			colors: {
				"make-light-green": "#70EC4C",
				"make-dark-green": "#58AC48",
			},
			fontSize: {
				large: "13rem",
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
			}
		},
	},
	plugins: [],
};
