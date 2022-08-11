/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"make-light-green": "#70EC4C",
				"make-dark-green": "#58AC48",
			},
			boxShadow: {
				pixel: [
					"-15px 0 0 0 black",
					"15px 0 0 0 black",
					"0 15px 0 0 black",
					"0 -15px 0 0 black"
				]
			}
		},
	},
	plugins: [],
};
