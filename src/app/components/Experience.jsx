"use client";
import React from "react";
import experiences from "../../json/experiences.json";
import useIntersectionObserver from "../hooks/useIntersectionObserver.js";
import { ExperienceItem } from "./ExperienceItem";

function Experience() {
	const [targetRef, isIntersecting] = useIntersectionObserver({
		threshold: 0.5,
	});

	return (
		<section
			id="Experience"
			ref={targetRef}
			className="flex justify-center items-center flex-col w-full h-full ">
			<h2>Experience</h2>

			<section
				className={`flex flex-col max-w-[520px] h-full relative animate-slideInUp mx-4 ${
					isIntersecting ? "visible" : "hidden"
				}`}>
				<div className="border-l-2 border-dashed absolute h-full left-0 max-lg:left-2"></div>

				{experiences.map((experience, index) => (
					<ExperienceItem
						key={experience.titulo}
						experience={experience}
						index={index}
						isIntersecting={isIntersecting}
					/>
				))}
			</section>
		</section>
	);
}

export default Experience;
