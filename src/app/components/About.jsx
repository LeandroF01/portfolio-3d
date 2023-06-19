"use client";

import React, { useState } from "react";
import Image from "next/image";
import user from "../../assets/user.svg";
import animation from "../../assets/animation-circle.svg";

export const About = () => {
	const [isHovered, setIsHovered] = useState(false);

	const moveDiv = () => {
		setIsHovered(!isHovered);
	};

	return (
		<section className="flex justify-center w-full h-full">
			<Image
				className="absolute hero-circle"
				src={animation}
				width={600}
				height={600}
			/>
			<article className="relative" onMouseOver={moveDiv} onMouseOut={moveDiv}>
				<div className="front relative w-[370px] h-[380px] backdrop-blur-[40px] p-[20px] rounded-tl-none rounded-tr-[30px] rounded-br-[40px] rounded-bl-[40px] z-10">
					<div className="absolute right-5 hexagon w-9 h-9 shadow-shadow-matriz flex justify-center">
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
				<div className=""></div>
				<div
					className={`back absolute w-[350px] h-[380px] rounded-tl-none rounded-tr-[30px] rounded-br-[40px] rounded-bl-[40px] top-0 skew-y-6 translate-y-6 ${
						isHovered ? "move" : ""
					} `}></div>
			</article>
		</section>
	);
};
