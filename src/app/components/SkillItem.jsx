import React, { useState } from "react";
import Image from "next/image";
import skills from "../../json/skills.json";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export const SkillItem = ({ skill, isIntersecting }) => {
	const [isHovered, setIsHovered] = useState(false);

	const getAnimationClass = (position) => {
		return isHovered
			? `absolute ${position}-0 w-20 h-[2px] left-10 transition-all`
			: `hexagon absolute ${position}-0 w-[5px] h-[5px] left-20 transition-all`;
	};

	return (
		<article
			className={`w-40 h-16 bg-experience relative rounded-md ${
				isIntersecting ? "animate-slideBlur" : "hidden"
			} opacity-0 my-3`}
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}>
			<div
				className={getAnimationClass("top")}
				style={{ background: skill.color }}
			/>
			<div className="flex justify-center items-center gap-2">
				<Image src={skill.imageURL} width={25} height={25} alt={skill.name} />
				<h3 className="text-center my-2 text-base">{skill.name}</h3>
			</div>
			<div
				className={getAnimationClass("bottom")}
				style={{ background: skill.color }}
			/>
		</article>
	);
};
