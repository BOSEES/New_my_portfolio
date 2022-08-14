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
			{toggle ? (
				<>
					<SelfIntro />
					<div className="bg-red-400 w-full p-6">
						<div className="scrollHidden w-full h-[92vh] shadow-pixel overflow-y-auto flex flex-col p-5 text-white">
							{page === 1 && <About />}
							{page === 2 && <Resume />}
							{page === 3 && <Portfolio />}
							{page === 4 && <Blog />}
						</div>
					</div>
				</>
			) : (
				<div className="flex flex-col justify-center align-center w-full h-screen bg-neutral-900 text-make-light-green relative">
					<h1 className="flex justify-center shadow-make-light-green-600 text-large mb-10 z-10">
						Hello World
					</h1>
					<img
						className="flex w-96 my-0 mx-auto bottom-0 z-0 absolute bottom-0 left-1/2 transform -translate-x-1/2"
						src="/img/profile.png"
						alt="_"
					/>
					<span className="flex justify-center text-make-dark-green text-5xl mb-56 z-10">
						Hello World Hello World
					</span>
					<button
						onClick={() => setToggle(true)}
						className="text-5xl z-10 shadow-pixel"
					>
						PRESS START
					</button>
				</div>
			)}
		</section>
	);
};

export default App;
