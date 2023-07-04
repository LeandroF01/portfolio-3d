import React from "react";
import experiences from "../../json/experiences.json";

export const Experience = () => {
	return (
		<section
			id="Experience"
			className="flex flex-col justify-center items-center w-full h-screen">
			<h2>Experience</h2>
			<div className="border-l-2 border-dashed h-2/3">
				{experiences.map((experience) => (
					<article
						key={experience.titulo}
						className="w-80 h-52 mx-6 my-4 bg-experience rounded-xl relative ">
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
