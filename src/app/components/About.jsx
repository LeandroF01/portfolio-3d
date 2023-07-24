"use client";
import React from "react";
import Image from "next/image";
import user from "../../assets/user.svg";
import animation from "../../assets/animation-circle.svg";
import useIntersectionObserver from "../hooks/useIntersectionObserver.js";

import { Waves } from "./icons/Waves.jsx";

export const About = () => {
	const [targetRef, isIntersecting] = useIntersectionObserver({
		threshold: 0.5, // Define el umbral de intersección (50% visible)
	});

	return (
		<section
			id="About"
			ref={targetRef}
			className="flex justify-center w-full h-screen relative overflow-hidden snap-start ">
			<div className="absolute top-0 w-full -z-10">
				<Waves />
			</div>

			<div
				className={`absolute max-w-2xl top-5 animate-scaleOut  -z-20 ${
					isIntersecting ? "visible" : "hidden"
				}`}>
				<Image className="animate-spin" src={animation} />
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
					<h2 className="my-4 font-extrabold text-lg">ABOUT ME</h2>
					<p className="text-text-parraf text-base">
						+1 year as a Front-End Web Developer. I have strong knowledge of
						languages such as JavaScript, TypeScript, HTML, CSS, SASS,
						frameworks like ReactJs and Tailwind, and experience in Back-End
						development with NodeJs. Committed to the success of the company, I
						work collaboratively to achieve established goals. I can also
						provide innovative and high-quality solutions that enhance your
						online presence.
					</p>
				</div>

				<div className="back absolute w-full h-[380px] rounded-tl-none rounded-tr-[30px] rounded-br-[40px] rounded-bl-[40px] top-2 skew-y-6 translate-y-6"></div>
			</article>
		</section>
	);
};
