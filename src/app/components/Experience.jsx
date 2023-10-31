"use client";
import React from "react";
import experiences from "../../json/experiences.json";
import useIntersectionObserver from "../hooks/useIntersectionObserver.js";
import { ExperienceItem } from "./ExperienceItem";

function Experience() {
	const [targetRef, isIntersecting] = useIntersectionObserver({
		threshold: 0.3,
	});

	return (
		<section
			id="Experience"
			ref={targetRef}
			className="flex justify-center items-center flex-col w-full h-full ">
			<section
				className={`flex flex-col max-w-[520px] h-full relative animate-slideInUp mx-4 ${
					isIntersecting ? "visible" : "hidden"
				}`}>
				<h2 className="text-3xl font-semibold my-16">Experience</h2>
				<div className="border-l-2 border-dashed absolute h-3/4 top-36 left-0 max-lg:left-2"></div>

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
