import React from "react";
import { Navbar } from "./components/Navbar.jsx";

import "./globals.css";

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
	return (
		<html lang="en" className="snap-y snap-mandatory">
			<head></head>
			<body>
				<header>
					<Navbar />
				</header>
				{children}
			</body>
		</html>
	);
}
