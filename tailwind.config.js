/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
				pixel: [
					"-10px 0 0 0 #70EC4C",
					"10px 0 0 0 #70EC4C",
					"0 10px 0 0 #70EC4C",
					"0 -10px 0 0 #70EC4C",
				],
			},
		},
	},
	plugins: [],
};
