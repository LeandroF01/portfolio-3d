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
		<nav className="mx-auto flex items-center justify-between p-4 lg:px-8">
			<img src="" alt="" />
			<ul className="mx-auto flex gap-4">
				{LINKS.map(({ label, route }) => (
					<li
						key={route}
						className="cursor-pointer relative rounded-md px-3 py-1  hover:bg-presentation-dark-landing hover:ring-1 ring-fuchsia-400/60">
						<Link href={route}>{label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
