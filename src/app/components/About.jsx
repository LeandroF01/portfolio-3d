"use client";
import React from "react";
import Image from "next/image";
import user from "../../assets/user.svg";
import animation from "../../assets/animation-circle.svg";
import useIntersectionObserver from "../hooks/useIntersectionObserver.js";
import useLanguageStore from "../store/languageStore";
import textES from "../../json/text-es.json";
import textEN from "../../json/text-en.json";

function About() {
	const [targetRef, isIntersecting] = useIntersectionObserver({
		threshold: 0.5, // Define el umbral de intersección (50% visible)
	});
	const { language, setLanguage } = useLanguageStore();

	return (
		<section
			id="About"
			ref={targetRef}
			className="flex justify-center w-full min-h-screen relative overflow-hidden snap-start ">
			<div
				className={`absolute max-w-2xl top-5 animate-scaleOut  -z-20 ${
					isIntersecting ? "visible" : "hidden"
				}`}>
				<Image className="animate-spin" src={animation} alt="animate-spin" />
			</div>

			<article
				className={`max-w-[520px] h-[380px] my-auto mx-5 relative  animate-slideInUp ${
					isIntersecting ? "visible" : "hidden"
				}`}>
				<div className="front relative max-w-[640px] h-[380px] backdrop-blur-[40px] p-[20px] rounded-tl-none rounded-tr-[30px] rounded-br-[40px] rounded-bl-[40px] z-[1]">
					<div className="absolute bg-box-matriz right-5 hexagon w-10 h-11 shadow-shadow-matriz flex justify-center">
						<Image
							src={user}
							width={30}
							height={30}
							alt="Picture of the author"
						/>
					</div>
					<h2 className="my-4 font-bold text-xl">
						{(language === "en" ? textEN : textES).about.title}
					</h2>
					<div className="flex flex-col gap-4 text-sm max-lg:text-xs">
						<p className="text-text-parraf">
							{(language === "en" ? textEN : textES).about.descripcion}
						</p>
						<p className="text-text-parraf">
							{(language === "en" ? textEN : textES).about.descripcion2}
						</p>
					</div>
				</div>

				<div className="back absolute w-full h-[380px] rounded-tl-none rounded-tr-[30px] rounded-br-[40px] rounded-bl-[40px] max-lg:-top-1 top-1 skew-y-6 translate-y-6"></div>
			</article>
		</section>
	);
}

export default About;
