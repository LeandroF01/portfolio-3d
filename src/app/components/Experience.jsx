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
			className="flex flex-col justify-center items-center w-full h-screen ">
			<h2>Experience</h2>

			<section
				className={`flex justify-center items-center flex-col max-w-[600px] h-full relative animate-slideInUp ${
					isIntersecting ? "visible" : "hidden"
				}`}>
				<div className="border-l-2 border-dashed absolute h-1/2  max-lg:left-0"></div>

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
