import React from "react";
import Link from "next/link";

export const NavLink = ({
	index,
	label,
	route,
	activeSection,
	onClick,
	isMenuOpen,
	toggleMenu,
	isScreenSmall,
}) => {
	return (
		<li
			key={route}
			className={` hover:text-white  px-3 py-1 z-10  ${
				activeSection === route ? "text-white font-semibold" : "text-stone-400"
			}`}
			onClick={() => isScreenSmall && toggleMenu()}>
			<Link
				className={`cursor-pointer ${
					isMenuOpen
						? "opacity-0 animate-menuFadeIn"
						: "delay-1000 animate-menuFadeOut max-lg:hidden"
				}`}
				href={route}
				style={{
					animationDelay: `${index * 0.1 + 0.4}s`,
				}}>
				{label}
			</Link>
		</li>
	);
};
