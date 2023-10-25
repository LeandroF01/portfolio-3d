"use client";
import React from "react";
import useNavigation from "../hooks/useNavigation";
import { NavLink } from "./NavLink";

const LINKS = [
	{
		label: "Home",
		route: "/#Home",
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

function Navbar() {
	const { isMenuOpen, activeSection, isScreenSmall, scrolled, toggleMenu } =
		useNavigation(LINKS);

	return (
		<nav
			className={`flex items-center justify-between w-full h-12 z-10 fixed  ${
				scrolled ? "bg-navbar" : ""
			}`}>
			<button
				type="button"
				className="absolute top-1 right-1 lg:hidden cursor-pointer focus:outline-none p-3 z-20"
				onClick={toggleMenu}
				aria-label="Abrir menú de navegación">
				<div className="w-5 h-5 relative">
					<span
						className={`bg-white w-1/2 h-[2px] rounded block absolute top-1/2 left-1/2origin-[0 0]  ${
							isMenuOpen
								? "translate-x-[2.5px] translate-y-[4px] rotate-[-45deg]"
								: "-translate-x-[0] -translate-y-[8px]"
						}`}></span>
					<span
						className={`bg-white w-full h-[2px] rounded block absolute top-1/2 left-1/2   ${
							isMenuOpen
								? "-translate-x-[9px] -translate-y-[0] rotate-[45deg]"
								: "-translate-x-[50%] -translate-y-[50%]"
						}`}></span>
					<span
						className={`bg-white w-1/2 h-[2px] rounded block absolute top-1/2 left-1/2  origin-[100% 0]  ${
							isMenuOpen
								? "-translate-x-[1px] -translate-y-[3px] rotate-[-45deg]"
								: "translate-x-[0] translate-y-[7px]"
						}`}></span>
				</div>
			</button>
			<div
				className={`${
					isMenuOpen
						? "circle absolute top-[-40px] right-[-40px] w-[70px] h-[70px] rounded-bl-full bg-[#0D1117] animate-circleAnimation overflow-hidden  z-1"
						: ""
				}`}></div>
			<ul className="flex justify-center max-lg:flex-col max-lg:justify-center w-full max-lg:text-xl max-lg:fixed max-lg:top-24  max-lg:left-6 ">
				{LINKS.map(({ label, route }, index) => (
					<NavLink
						index={index}
						key={route}
						label={label}
						route={route}
						activeSection={activeSection}
						isMenuOpen={isMenuOpen}
						toggleMenu={toggleMenu}
						isScreenSmall={isScreenSmall}
					/>
				))}
			</ul>
		</nav>
	);
}

export default Navbar;
