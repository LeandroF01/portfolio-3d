import React from "react";
import { About } from "./components/About.jsx";
import { Experience } from "./components/Experience.jsx";
import { Skills } from "./components/Skills.jsx";
import { Contact } from "./components/Contact.jsx";
import { Home } from "./components/Home.jsx";

export default function Page() {
	return (
		<>
			<Home />
			<About />
			<Experience />
			<Skills />
			<Contact />
		</>
	);
}
