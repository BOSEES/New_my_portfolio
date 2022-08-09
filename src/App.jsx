import React, { useState } from "react";
import "./App.css";
import { SelfIntro } from "./view/selfIntro";
import { About } from "./view/about";
import { Resume } from "./view/resume";
import { Portfolio } from "./view/portfolio";
import { Blog } from "./view/blog";

const App = () => {
	const [toggle, setToggle] = useState(true);

	return (
		<section>
			<SelfIntro />
			<div className="flex flex-col justify-center align-center w-screen h-screen">
				{toggle ? (
					<div className="flex flex-col justify-center align-center w-full h-full bg-neutral-900 text-point">
						<h1 className="flex shadow-point-600">Hello World</h1>
						<img className="flex" src="/public/img/profile.png" alt="_" />
						<span className="flex">Hello World Hello World</span>
						<button onClick={() => setToggle(false)}>PRESS START</button>
					</div>
				) : (
					<div></div>
				)}
			</div>
		</section>
	);
};

export default App;
