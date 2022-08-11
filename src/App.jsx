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
		</section>
	);
};

export default App;
