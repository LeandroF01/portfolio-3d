import React from "react";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./components/Home.jsx";
import { About } from "./components/About.jsx";
import { Experience } from "./components/Experience.jsx";
import { Skills } from "./components/Skills.jsx";
import { Contact } from "./components/Contact.jsx";

import "./globals.css";

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head></head>
			<body>
				<header>
					<Navbar />
					<Contact />
				</header>
				{children}
			</body>
		</html>
	);
}
