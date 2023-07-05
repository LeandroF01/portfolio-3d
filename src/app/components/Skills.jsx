"use client";
import React, { useState } from "react";
import Image from "next/image";
import skills from "../../json/skills.json";

export const Skills = () => {
	const [hoveredElements, setHoveredElements] = useState({});

	const toggleHover = (key) => {
		setHoveredElements((prevHoveredElements) => ({
			...prevHoveredElements,
			[key]: !prevHoveredElements[key],
		}));
	};

	const getAnimationClass = (key, position, bg) => {
		const isHovered = hoveredElements[key];
		return isHovered
			? `absolute ${position}-0 w-20 h-[2px] ${bg} left-10 transition-all`
			: `hexagon absolute ${position}-0 w-[5px] h-[5px] ${bg} left-20 transition-all`;
	};

	return (
		<section
			id="Skills"
			className="w-full h-screen flex justify-center items-center">
			<section className="max-w-4xl flex justify-center items-center flex-wrap gap-7">
				{skills.map((skill) => (
					<article
						key={skill.name}
						className="w-40 h-16 bg-experience relative rounded-md"
						onMouseOver={() => toggleHover(skill.name)}
						onMouseOut={() => toggleHover(skill.name)}>
						<div
							className={getAnimationClass(
								skill.name,
								"top",
								`bg-[${skill.color}]`
							)}
						/>
						<div className="flex justify-center items-center gap-2">
							<Image
								className=""
								src={skill.imageURL}
								width={25}
								height={25}
								alt={skill.name}
							/>
							<h3 className="text-center my-2 text-base">{skill.name}</h3>
						</div>

						<div
							className={getAnimationClass(
								skill.name,
								"bottom",
								`bg-[${skill.color}]`
							)}
						/>
					</article>
				))}
			</section>
		</section>
	);
};
