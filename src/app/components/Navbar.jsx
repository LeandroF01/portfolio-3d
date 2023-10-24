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
				className="absolute top-1 right-1 lg:hidden cursor-pointer focus:outline-none p-3 z-10"
				onClick={toggleMenu}>
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
			<section className="flex max-lg:flex-col max-lg:justify-center  max-lg:gap-10 mx-auto max-lg:h-full max-lg:w-full max-lg:text-2xl  max-lg:my-10">
				<div
					className={`${
						isMenuOpen
							? "max-lg:circle max-lg:absolute max-lg:top-[-40px] max-lg:right-[-40px] max-lg:w-[70px] max-lg:h-[70px] max-lg:rounded-bl-full max-lg:bg-slate-800 max-lg:animate-circleAnimation max-lg:overflow-hidden  z-0"
							: ""
					}`}></div>
				{LINKS.map(({ label, route }, index) => (
					<NavLink
						key={route}
						label={label}
						route={route}
						active={activeSection === route}
						onClick={() => isScreenSmall && toggleMenu()}
					/>
				))}
			</section>
		</nav>
	);
}

export default Navbar;
