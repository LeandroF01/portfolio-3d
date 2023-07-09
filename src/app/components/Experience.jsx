"use client";
import React from "react";
import experiences from "../../json/experiences.json";
import useIntersectionObserver from "../hooks/useIntersectionObserver.js";

export const Experience = () => {
	const [targetRef, isIntersecting] = useIntersectionObserver({
		threshold: 0.5, // Define el umbral de intersección (50% visible)
	});

	function selectSlide(num) {
		if (num % 2 === 0) {
			return "animate-slideRight";
		} else {
			return "animate-slideLeft";
		}
	}

	return (
		<section
			id="Experience"
			ref={targetRef}
			className="flex flex-col justify-center items-center w-full h-screen snap-start">
			<h2>Experience</h2>
			<div
				className={`border-l-2 border-dashed h-2/3 animate-slideInUp  ${
					isIntersecting ? "visible" : "hidden"
				}`}>
				{experiences.map((experience, index) => (
					<article
						key={experience.titulo}
						className={`w-80 h-52 mx-6 my-4 bg-experience rounded-xl relative ${selectSlide(
							index
						)} ${isIntersecting ? "visible" : "hidden"}`}>
						<div className="absolute w-48 h-[1px] top-0 left-[20%] bg-border-gradiant"></div>
						<div className="w-[50px] h-[55px] hexagon bg-hexagon-ex absolute top-1/3 left-[-50px] "></div>
						<div className="flex justify-between m-4">
							<h3 className="text-xl text-white">{experience.titulo}</h3>
							<div className="text-sm text-white">
								<p>{experience.fecha}</p>
								<p className="text-gray-400">{experience.estado}</p>
							</div>
						</div>
						<p className="text-sm text-gray-400 m-2">
							{experience.descripcion}
						</p>
						<div className="absolute w-48 h-[1px] bottom-0 left-[20%] bg-border-gradiant"></div>
					</article>
				))}
			</div>
		</section>
	);
};
