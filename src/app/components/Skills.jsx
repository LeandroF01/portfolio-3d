"use client";
import React, { useState } from "react";
import { SkillItem } from "./SkillItem";
import skills from "../../json/skills.json";
import useIntersectionObserver from "../hooks/useIntersectionObserver.js";

function Skills() {
	const [targetRef, isIntersecting] = useIntersectionObserver({
		threshold: 0.5,
	});

	const delayIncrement = 0.3;
	isIntersecting ? "visible" : "hidden";
	return (
		<section
			id="Skills"
			ref={targetRef}
			className="w-full h-screen flex justify-center items-center  snap-start">
			<section className="max-w-[640px] flex justify-center items-center flex-wrap">
				{skills.map((skill, index) => (
					<SkillItem
						key={skill.name}
						skill={skill}
						delay={index * delayIncrement}
						isIntersecting={isIntersecting}
					/>
				))}
			</section>
		</section>
	);
}

export default Skills;
