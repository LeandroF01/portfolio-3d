import React, { useState } from "react";

export const ExperienceItem = ({ experience, index, isIntersecting }) => {
	function selectSlide(num) {
		return;
	}

	const [showImages, setShowImages] = useState(false);

	const toggleView = () => {
		setShowImages((prevShowImages) => !prevShowImages);
	};
	return (
		<article
			key={experience.titulo}
			className={`w-full h-full p-5 bg-experience rounded-xl relative m-3 ${"animate-slideRight"} ${
				isIntersecting ? "visible" : "hidden"
			}`}>
			<div className="absolute w-48 h-[1px] top-0 left-[50%] -translate-x-1/2 bg-border-gradiant"></div>
			<div className="w-[50px] h-[55px] hexagon bg-hexagon-ex absolute top-1/3 -left-[35px] max-lg:top-1/4 max-lg:-left-[22px] max-lg:w-[40px] max-lg:h-[45px]"></div>
			<header className="flex flex-col  text-gray-300 mx-5 gap-2">
				<h2 className="text-xl max-lg:text-lg font-semibold text-white">
					{experience.titulo}
				</h2>
				<div className="flex justify-between text-sm max-lg:text-xs text-gray-400 left-0">
					<time dateTime={experience.fecha}>{experience.fecha}</time>
					<span className="text-gray-400">{experience.estado}</span>
				</div>
			</header>

			<section className="flex flex-col text-sm max-lg:text-xs text-gray-300 mx-5 gap-2">
				{showImages ? (
					<div className="flex justify-center items-center bg-red-600">
						{experience.descripcion.ResponsabilidadesDetalladas.map(
							(image, index) => (
								<div key={index}>aa</div>
								// <img
								// 	key={index}
								// 	src={image}
								// 	alt={`Responsibility ${index}`}
								// 	className="max-w-full max-h-[200px] object-cover"
								// />
							)
						)}
					</div>
				) : (
					<>
						<p className="text-white">
							{experience.descripcion["Resumen de Responsabilidades"]}
						</p>
						<ul className="flex flex-col justify-center items-center gap-2">
							{experience.descripcion.ResponsabilidadesDetalladas.map(
								(logro, i) => (
									<li key={i}>{logro}</li>
								)
							)}
						</ul>
					</>
				)}

				<div className="flex justify-center mt-4">
					<button
						onClick={toggleView}
						className="bg-blue-500 text-white px-4 py-2 rounded-md">
						{showImages ? "Ver Texto" : "Ver Imágenes"}
					</button>
				</div>
			</section>
			{/* <section className="flex flex-col text-sm  max-lg:text-xs text-gray-300 mx-5 gap-2">
			
				<p className="text-white">
					{experience.descripcion["Resumen de Responsabilidades"]}
				</p>
				<ul className="flex flex-col justify-center items-center gap-2">
					{experience.descripcion.ResponsabilidadesDetalladas.map(
						(logro, i) => (
							<li key={i}>{logro}</li>
						)
					)}
				</ul>
			</section> */}
			<div className="absolute w-48 h-[1px] bottom-0 left-[50%] -translate-x-1/2 bg-border-gradiant"></div>
		</article>
	);
};
