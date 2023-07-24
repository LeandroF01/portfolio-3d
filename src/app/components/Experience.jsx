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
			return "animate-slideRight left-1/2 max-lg:left-0 mx-[25px]";
		} else {
			return "animate-slideLeft right-1/2 max-lg:left-0 -mx-[27px]";
		}
	}

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
					<article
						key={experience.titulo}
						className={`w-[300px] h-52 bg-experience rounded-xl relative m-3 ${selectSlide(
							index
						)} ${isIntersecting ? "visible" : "hidden"}`}>
						<div className="absolute w-48 h-[1px] top-0 left-[50%] -translate-x-1/2 bg-border-gradiant"></div>
						<div
							className={`w-[50px] h-[55px] hexagon bg-hexagon-ex absolute top-1/3 ${
								index % 2 === 0
									? "-left-[50px]"
									: "-right-[50px] max-lg:-left-[50px]"
							} `}></div>
						<div className="flex justify-between m-4">
							<h3 className="text-xl text-white">{experience.titulo}</h3>
							<div className="text-sm text-white">
								<p>{experience.fecha}</p>
								<p className="text-gray-400">{experience.estado}</p>
							</div>
						</div>
						<p className="text-sm text-gray-400 mx-5">
							{experience.descripcion}
						</p>
						<div className="absolute w-48 h-[1px] bottom-0 left-[50%] -translate-x-1/2 bg-border-gradiant"></div>
					</article>
				))}
			</section>
		</section>
	);
};
