"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

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

export const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;

			// Verificar qué sección está visible en el scroll
			const activeLink = LINKS.find(({ route }) => {
				const sectionId = route.substring(2); // Eliminar los primeros dos caracteres de la ruta ("/#")
				const element = document.getElementById(sectionId);

				if (element) {
					const offsetTop = element.offsetTop - 100; // Ajusta el valor para compensar el tamaño de la barra de navegación
					const offsetBottom = offsetTop + element.offsetHeight;
					return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
				}
				return false;
			});

			if (activeLink) {
				setActiveSection(activeLink.route);
			} else {
				setActiveSection("");
			}
		};

		// Agregar el listener para el evento scroll
		window.addEventListener("scroll", handleScroll);

		// Limpiar el listener cuando el componente se desmonta
		return () => {
			window.removeEventListener("scroll", handleScroll());
		};
	}, []);

	const delayHidden = setTimeout(() => {
		return "hidden";
	}, 1000);

	return (
		<nav className="flex items-center justify-between w-full p-4 lg:px-8 z-10 fixed">
			<img src="" alt="" />
			<button
				className="lg:hidden cursor-pointer focus:outline-none p-3 bg-red-700"
				onClick={toggleMenu}>
				<div className="w-5 h-5 relative bg-gray-950">
					<span
						className={`bg-blue-400 w-1/2 h-[2px] rounded block absolute top-1/2 left-1/2origin-[0 0]  ${
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
			<ul
				className={`${
					isMenuOpen
						? "lg:menu_container open block"
						: `lg:menu_container closed ${delayHidden}`
				} lg:flex lg:gap-4 lg:items-center mx-auto`}>
				{LINKS.map(({ label, route }, index) => (
					<li
						onClick={toggleMenu}
						key={route}
						className={`cursor-pointer relative px-3 py-1 ${
							activeSection === route ? "text-red-500" : ""
						}`}>
						<Link
							href={route}
							style={{
								animationDelay: `${index * 0.1 + 0.4}s`,
							}}>
							{label}
						</Link>
					</li>
				))}
			</ul>
			<button className="hidden lg:block cursor-pointer rounded-md px-3 py-1 bg-presentation-dark-landing ring-1 ring-fuchsia-400/60">
				Download CV
			</button>
		</nav>
	);
};
