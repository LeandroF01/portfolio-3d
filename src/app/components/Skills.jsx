"use client";
import React, { useState } from "react";
import Image from "next/image";
import skills from "../../json/skills.json";
import useIntersectionObserver from "../hooks/useIntersectionObserver.js";

export const Skills = () => {
	const [hoveredElements, setHoveredElements] = useState({});

	const toggleHover = (key) => {
		setHoveredElements((prevHoveredElements) => ({
			...prevHoveredElements,
			[key]: !prevHoveredElements[key],
		}));
	};

	const getAnimationClass = (key, position) => {
		const isHovered = hoveredElements[key];
		return isHovered
			? `absolute ${position}-0 w-20 h-[2px]  left-10 transition-all`
			: `hexagon absolute ${position}-0 w-[5px] h-[5px] left-20 transition-all`;
	};

	const [targetRef, isIntersecting] = useIntersectionObserver({
		threshold: 0.5, // Define el umbral de intersección (50% visible)
	});

	const delayIncrement = 0.3;

	return (
		<section
			id="Skills"
			ref={targetRef}
			className="w-full h-screen flex justify-center items-center">
			<section className="max-w-4xl flex justify-center items-center flex-wrap gap-7">
				{skills.map((skill, index) => (
					<article
						key={skill.name}
						className={`w-40 h-16 bg-experience relative rounded-md animate-slideBlur opacity-0  ${
							isIntersecting ? "visible" : "hidden"
						} `}
						style={{
							animationDelay: `${index * delayIncrement}s`,
						}}
						onMouseOver={() => toggleHover(skill.name)}
						onMouseOut={() => toggleHover(skill.name)}>
						<div
							className={getAnimationClass(skill.name, "top")}
							style={{ background: skill.color }}
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
							className={getAnimationClass(skill.name, "bottom")}
							style={{ background: skill.color }}
						/>
					</article>
				))}
			</section>
		</section>
	);
};
