"use client";
import React, { useState } from "react";
import Image from "next/image";
import aaa from "../../assets/AAA.png";

import { Github } from "../components/icons/Github.jsx";
import { NetLink } from "../components/icons/NetLink.jsx";

export default function Projects() {
	const [isHovered, setIsHovered] = useState(false);

	const moveDiv = () => {
		setIsHovered(!isHovered);
	};

	const animationTech = () => {
		const delayIncrement = 0.1;
		const elemet = [1, 2, 3];
		if (isHovered) {
			return (
				<ul className="flex gap-1 z-10">
					{elemet.map((el, index) => (
						<li
							key={index}
							style={{
								animationDelay: `${index * delayIncrement}s`,
							}}
							className={`hexagon w-8 h-8 bg-icons animate-tec `}>
							{el}
						</li>
					))}
				</ul>
			);
		}
	};
	return (
		<section id="Projects" className="flex justify-center w-full">
			<article className="w-80 h-auto bg-red-600 rounded-2xl relative">
				<div className="w-full h-40 bg-blue-500 rounded-2xl overflow-hidden">
					<Image
						src={aaa}
						className="transform hover:scale-110 transition duration-300"
					/>
				</div>
				<div className="absolute bottom-1/2 right-1/3 ">{animationTech()}</div>
				<section
					onMouseOver={moveDiv}
					onMouseOut={moveDiv}
					className="flex justify-center flex-col bg-animation top-32 absolute w-full rounded-2xl overflow-hidden">
					<h3 className="text-center p-2 font-">Lorem ipsum dolor sit amet</h3>
					<div className="w-72 mx-auto h-[1px] bg-slate-300">
						<div className="line-shine"></div>
					</div>

					<p className="mx-4 my-3 text-xs bg-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
						excepturi nam est doloribus molestias. Odio omnis obcaecati
						veritatis magni, nobis nihil fuga hic beatae accusantium, eum
						temporibus rem enim quidem.
					</p>
					<ul className="flex justify-center gap-3 my-2">
						<li className="flex justify-center bg-links w-8 h-8 rounded-full">
							<a href="" className="flex justify-center my-auto  w-4">
								<Github color={"white"} width={"20px"} height={"20px"} />
							</a>
						</li>
						<li className="flex justify-center bg-links w-8 h-8 rounded-full">
							<a href="" className="flex justify-center my-auto  w-4">
								<NetLink color={"white"} width={"20px"} height={"20px"} />
							</a>
						</li>
					</ul>
				</section>
			</article>
		</section>
	);
}
