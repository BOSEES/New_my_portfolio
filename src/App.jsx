import React, { useState } from "react";
import "./App.css";
import { SelfIntro } from "./view/selfIntro";
import { About } from "./view/about";
import { Resume } from "./view/resume";
import { Portfolio } from "./view/portfolio";
import { Blog } from "./view/blog";

const App = () => {
	const [toggle, setToggle] = useState(true);
	const [page, setPage] = useState(1);

	return (
		<section className="flex">
			<SelfIntro />
			<div className="bg-red-400 w-full p-6">
<<<<<<< HEAD
				<div className="w-full h-full shadow-pixel">
					{page === 1 && <About/>}
					{page === 2 && <Resume/>}
					{page === 3 && <Portfolio/>}
					{page === 4 && <Blog/>}
					
				</div>
=======
				<div className="w-full h-full shadow-pixel">asdasd</div>
>>>>>>> 4f3781e6dbff16fdac853d5a7061bd664e334b38
			</div>
			{/* <div className="flex flex-col justify-center align-center w-screen h-screen">
				{toggle ? (
					<div className="flex flex-col justify-center align-center w-full h-full bg-neutral-900 text-make-light-green">
						<h1 className="flex shadow-make-light-green-600">Hello World</h1>
						<img className="flex" src="/public/img/profile.png" alt="_" />
						<span className="flex">Hello World Hello World</span>
						<button onClick={() => setToggle(false)}>PRESS START</button>
					</div>
				) : (
					<div></div>
				)}
			</div> */}
		</section>
	);
};

export default App;
