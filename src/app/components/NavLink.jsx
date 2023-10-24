import React from "react";
import Link from "next/link";

export const NavLink = ({ label, route, active, onClick }) => {
	const activeLinkClass = "text-white font-semibold";
	const inactiveLinkClass = "text-stone-400";
	return (
		<li
			className={`hover:text-white relative px-3 py-1 z-10 ${
				active ? activeLinkClass : inactiveLinkClass
			}`}>
			<Link className="cursor-pointer" href={route} onClick={onClick}>
				{label}
			</Link>
		</li>
	);
};
