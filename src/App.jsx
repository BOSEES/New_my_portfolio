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
		<section className="flex">
			<SelfIntro />
      <div className="bg-red-400 w-full p-6">
        <div className="w-full h-full shadow-pixel">
			asdasd
		</div>
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
