import React, { useState } from "react";
import "./App.css";

function App() {
	const [toggle, setToggle] = useState(true);

	return (
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
	);
}

export default App;
