"use client";
import React, { useState } from "react";
import Image from "next/image";
import skills from "../../json/skills.json";

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
		<section
			id="Skills"
			className="w-full h-screen flex justify-center align-middle ">
			<section className="max-w-4xl flex flex-wrap gap-3">
				{skills.map((skill) => (
					<article
						key={skill.name}
						className=" w-40 h-16 bg-experience relative rounded-md"
						onMouseOver={moveDiv}
						onMouseOut={moveDiv}>
						<div className={anitamtion("top", "bg-red-600")} />
						<Image />
						<h3 className="text-center my-2 text-base">{skill.name}</h3>
						<div className={anitamtion("bottom", "bg-red-600")} />
					</article>
				))}
			</section>
		</section>
	);
};
