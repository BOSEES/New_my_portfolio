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
		}, 3000)
	})
	return (
		<section className="flex md:flex-col" onScroll={() => console.log("asdas")}>
			{toggle && <Loading />}
			<Main />
		</section>
	);
};

export default App;
