import React from "react";

export const ExperienceItem = ({ experience, index, isIntersecting }) => {
	function selectSlide(num) {
		if (num % 2 === 0) {
			return "animate-slideRight left-1/2 max-lg:left-0 mx-[25px]";
		} else {
			return "animate-slideLeft right-1/2 max-lg:left-0 -mx-[27px]";
		}
	}
	return (
		<article
			key={experience.titulo}
			className={`w-[300px] h-52 bg-experience rounded-xl relative m-3 ${selectSlide(
				index
			)} ${isIntersecting ? "visible" : "hidden"}`}>
			<div className="absolute w-48 h-[1px] top-0 left-[50%] -translate-x-1/2 bg-border-gradiant"></div>
			<div
				className={`w-[50px] h-[55px] hexagon bg-hexagon-ex absolute top-1/3 ${
					index % 2 === 0 ? "-left-[50px]" : "-right-[50px] max-lg:-left-[50px]"
				} `}></div>
			<div className="flex justify-between m-4">
				<h3 className="text-xl text-white">{experience.titulo}</h3>
				<div className="text-sm text-white">
					<p>{experience.fecha}</p>
					<p className="text-gray-400">{experience.estado}</p>
				</div>
			</div>
			<p className="text-sm text-gray-400 mx-5">{experience.descripcion}</p>
			<div className="absolute w-48 h-[1px] bottom-0 left-[50%] -translate-x-1/2 bg-border-gradiant"></div>
		</article>
	);
};
