import React, { useState } from "react";
import "./App.css";

import { Main } from "./view/main";
import { Splash } from "./view/splash";

const App = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<section className="flex">
			{toggle ? 
				<Main/>
				: 
				<Splash setToggle={setToggle}/>
			}
		</section>
	);
};

export default App;
