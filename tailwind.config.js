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
<<<<<<< HEAD
					"-10px 0 0 0 #70EC4C",
					"10px 0 0 0 #70EC4C",
					"0 10px 0 0 #70EC4C",
					"0 -10px 0 0 #70EC4C"
				]
			}
=======
					"-15px 0 0 0 black",
					"15px 0 0 0 black",
					"0 15px 0 0 black",
					"0 -15px 0 0 black",
				],
			},
>>>>>>> 4f3781e6dbff16fdac853d5a7061bd664e334b38
		},
	},
	plugins: [],
};
