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
					"-10px 0 0 0 #70EC4C",
					"10px 0 0 0 #70EC4C",
					"0 10px 0 0 #70EC4C",
					"0 -10px 0 0 #70EC4C",
				],
				pixelMedium: [
					"-7px 0 0 0 #70EC4C",
					"7px 0 0 0 #70EC4C",
					"0 7px 0 0 #70EC4C",
					"0 -7px 0 0 #70EC4C",
				],
			},
			fontFamily: {
				"pixel" : ["Pixel"]
			}
		},
	},
	plugins: [],
};
