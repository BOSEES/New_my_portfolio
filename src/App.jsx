import React, { useState } from "react";
import { Loading } from "./components/loading";
import "./App.css";

import { Main } from "./view/main";
import { useEffect } from "react";

const App = () => {
	const [toggle, setToggle] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setToggle(false)
		}, 2000)
	})
	return (
		<section className="flex md:h-screnn md:flex-col">
			{toggle && <Loading />}
			<Main />
		</section>
	);
};

export default App;
