"use client";
import React, { useState } from "react";
import Image from "next/image";

export const Skills = () => {
	const [isHovered, setIsHovered] = useState(false);

	const moveDiv = () => {
		setIsHovered(!isHovered);
	};

	const anitamtion = (position, bg) => {
		return isHovered
			? `absolute ${position}-0 w-20 h-[2px] ${bg} left-10 transition-all`
			: `hexagon absolute ${position}-0 w-[5px] h-[5px] ${bg} left-20 transition-all`;
	};

	return (
		<section className="w-full flex justify-center align-middle">
			<section>
				<article
					className=" w-40 h-16 bg-experience relative rounded-md"
					onMouseOver={moveDiv}
					onMouseOut={moveDiv}>
					<div className={anitamtion("top", "bg-red-600")} />
					<Image />
					<h3 className="text-center my-2 text-base">Tecnology</h3>
					<div className={anitamtion("bottom", "bg-red-600")} />
				</article>
			</section>
		</section>
	);
};
