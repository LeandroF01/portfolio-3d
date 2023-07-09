import React from "react";
import Link from "next/Link";

const LINKS = [
	{
		label: "Home",
		route: "/#",
	},
	{
		label: "About",
		route: "/#About",
	},
	{
		label: "Experience",
		route: "/#Experience",
	},
	{
		label: "Projects",
		route: "/Projects",
	},
	{
		label: "Skills",
		route: "/#Skills",
	},
	{
		label: "Blog",
		route: "/Blog",
	},
	{
		label: "Contact",
		route: "/#Contact",
	},
];

export const Navbar = () => {
	return (
		<nav className="fixed flex items-center justify-between w-full p-4 lg:px-8 z-10">
			<img src="" alt="" />
			<ul className="mx-auto flex gap-4">
				{LINKS.map(({ label, route }) => (
					<li key={route} className="cursor-pointer relative px-3 py-1">
						<Link href={route}>{label}</Link>
					</li>
				))}
			</ul>
			<button className="cursor-pointer rounded-md px-3 py-1 bg-presentation-dark-landing ring-1 ring-fuchsia-400/60">
				Dowload CV
			</button>
		</nav>
	);
};
