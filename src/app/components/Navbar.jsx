"use client";
import React, { useEffect, useState } from "react";
import useNavigation from "../hooks/useNavigation";
import { NavLink } from "./NavLink";
import useLanguageStore from "../store/languageStore";
import { useRouter, usePathname } from "next/navigation";

function Navbar() {
	const [links, setLinks] = useState([]);
	const { isMenuOpen, activeSection, isScreenSmall, scrolled, toggleMenu } =
		useNavigation(links);

	const { language, setLanguage } = useLanguageStore();

	const router = useRouter();

	const pathname = usePathname();

	const prefix = "/Blogs/";

	const blogPath = pathname.substring(pathname.indexOf(prefix) + prefix.length);

	const blogLanguage = blogPath.split("-")[0];

	const handleLanguageChange = () => {
		const newLanguage = language === "en" ? "es" : "en";
		setLanguage(newLanguage);

		if (pathname.includes("Blogs")) {
			router.push(
				pathname === `/Blogs/${blogLanguage}-en`
					? `/Blogs/${blogLanguage}-es`
					: `/Blogs/${blogLanguage}-en`
			);
		}

		if (pathname.includes("/Blog") && !pathname.includes("Blogs")) {
			router.push(language === "en" ? "/Blog-es" : "/Blog-en");
		}
	};

	useEffect(() => {
		const ENLACES = [
			{
				label: "Inicio",
				route: "/#Home",
			},
			{
				label: "Acerca de mí",
				route: "/#About",
			},
			{
				label: "Experiencia",
				route: "/#Experience",
			},
			{
				label: "Proyectos",
				route: "/Projects",
			},
			{
				label: "Habilidades",
				route: "/#Skills",
			},
			{
				label: "Blog",
				route: `/Blog-${language === "en" ? "en" : "es"}`,
			},
			{
				label: "Contacto",
				route: "/#Contact",
			},
		];
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
				route: `/Blog-${language === "en" ? "en" : "es"}`,
			},
			{
				label: "Contact",
				route: "/#Contact",
			},
		];

		const directEsAndEN = language === "en" ? LINKS : ENLACES;

		setLinks(directEsAndEN);
	}, [language]);

	return (
		<nav
			className={`flex items-center justify-between w-full h-12 z-50 fixed  ${
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

			{/* <div className="checkbox-wrapper-10">
				<input checked="" type="checkbox" id="cb5" className="tgl tgl-flip" />
				<label
					for="cb5"
					data-tg-on="On"
					data-tg-off="Off"
					className="tgl-btn"></label>
			</div> */}

			<div
				className={`${
					isMenuOpen
						? "circle absolute top-[-40px] right-[-40px] w-[70px] h-[70px] rounded-bl-full bg-[#0D1117] animate-circleAnimation overflow-hidden  z-1"
						: ""
				}`}></div>
			<ul
				className={`flex justify-center w-full ${
					isMenuOpen
						? "max-lg:flex-col max-lg:justify-center max-lg:text-xl max-lg:fixed max-lg:top-24 max-lg:left-6"
						: ""
				} `}>
				{links.map(({ label, route }, index) => (
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

			<div className="flex justify-center items-center absolute max-lg:left-10  lg:right-10">
				<input
					type="checkbox"
					className="theme-checkbox "
					onChange={handleLanguageChange}
				/>
			</div>
		</nav>
	);
}

export default Navbar;
