"use client";
import React, { useState } from "react";
import { SkillItem } from "./SkillItem";
import skills from "../../json/skills.json";
import useIntersectionObserver from "../hooks/useIntersectionObserver.js";

function Skills() {
	const [targetRef, isIntersecting] = useIntersectionObserver({
		threshold: 0.3,
	});

	return (
		<section
			id="Skills"
			ref={targetRef}
			className="flex justify-center items-center w-full min-h-screen ">
			<section className="max-w-[640px] flex justify-center items-center flex-wrap">
				{skills.map((skill, index) => (
					<SkillItem
						key={skill.name}
						skill={skill}
						isIntersecting={isIntersecting}
					/>
				))}
			</section>
		</section>
	);
}

export default Skills;
