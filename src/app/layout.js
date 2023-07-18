import React from "react";
import { Navbar } from "./components/Navbar.jsx";

import "./globals.css";

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head></head>
			<body className="scroll-smooth bg-[#0D1117]">
				<header>
					<Navbar />
				</header>
				{children}
			</body>
		</html>
	);
}
