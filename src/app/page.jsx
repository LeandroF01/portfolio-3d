import React from "react";
import { About } from "./components/About.jsx";
import { Experience } from "./components/Experience.jsx";
import { Skills } from "./components/Skills.jsx";
import { Contact } from "./components/Contact.jsx";

export default function Home() {
	return (
		<>
			<About />
			<Experience />
			<Skills />
			<Contact />
		</>
	);
}
