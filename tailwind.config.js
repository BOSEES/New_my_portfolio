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
		},
	},
	plugins: [],
};
