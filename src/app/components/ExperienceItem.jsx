import React, { useState } from "react";
import Image from "next/image";
import { Arrow } from "./Icons/Arrow";
import textES from "../../json/text-es.json";
import textEN from "../../json/text-en.json";
import useLanguageStore from "../store/languageStore";

export const ExperienceItem = ({ experience, index, isIntersecting }) => {
	function selectSlide(num) {
		return;
	}

	const [showImages, setShowImages] = useState(false);
	const [currentSlide, setCurrentSlide] = useState(0);

	const toggleView = () => {
		setShowImages((prevShowImages) => !prevShowImages);
	};

	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + 1) % experience.images.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prevSlide) =>
				(prevSlide - 1 + experience.images.length) % experience.images.length
		);
	};
	const { language, setLanguage } = useLanguageStore();
	return (
		<article
			key={experience.titulo}
			className={`w-full h-full p-5 bg-experience rounded-xl relative m-3 ${"animate-slideRight"} ${
				isIntersecting ? "visible" : "hidden"
			}`}>
			<div className="absolute w-48 h-[1px] top-0 left-[50%] -translate-x-1/2 bg-border-gradiant"></div>
			<div className="w-[50px] h-[55px] hexagon bg-hexagon-ex absolute top-1/3 -left-[35px] max-lg:top-1/4 max-lg:-left-[22px] max-lg:w-[40px] max-lg:h-[45px]">
				<div className="w-full h-full flex justify-center items-center">
					<Image
						className="bg-cover"
						src={experience.logo}
						width={30}
						height={30}
						alt={`${experience.titulo}-logo`}
					/>
				</div>
			</div>
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
					<div className="flex justify-center items-center ">
						{/* Mostrar solo la imagen actual */}
						<div>
							<Image
								src={experience.images[currentSlide]}
								width={500}
								height={420}
								alt=""
							/>
						</div>
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
						className="bg-zinc-800 text-white px-4 py-2 rounded-md">
						{showImages
							? language === "en"
								? textEN.buttons.text
								: textES.buttons.text
							: language === "en"
							? textEN.buttons.images
							: textES.buttons.images}
					</button>
				</div>

				{/* Agregar controles del slider */}
				{showImages && experience.images.length > 1 && (
					<div className="flex justify-center mt-4 gap-6">
						<button
							onClick={prevSlide}
							className="bg-zinc-800 text-white p-2 shadow-sm rounded-full rotate-180">
							<Arrow width={15} height={15} color={"white"} />
						</button>
						<button
							onClick={nextSlide}
							className="bg-zinc-800 text-white p-2 shadow-sm rounded-full">
							<Arrow width={15} height={15} color={"white"} />
						</button>
					</div>
				)}
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
