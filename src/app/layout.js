import React from "react";
import Navbar from "./components/Navbar";

import "./globals.css";

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Portafolio</title>
			</head>
			<body className="scroll-smooth bg-[#0D1117]">
				<header>
					<Navbar />
				</header>
				{children}
			</body>
		</html>
	);
}
