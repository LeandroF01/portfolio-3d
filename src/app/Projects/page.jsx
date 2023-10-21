"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import projects from "../../json/projects.json";

import { Github } from "../components/Icons/Github";
import { NetLink } from "../components/Icons/NetLink";

export default function Projects() {
	const [isHovered, setIsHovered] = useState(false);

	const moveDiv = () => {
		setIsHovered(!isHovered);
	};

	return (
		<section
			id="Projects"
			className="flex justify-center items-center w-full h-full">
			<section className="flex justify-center w-full h-full flex-wrap my-24">
				{projects.map((project) => (
					<article key={project.id} className="w-80 rounded-2xl relative m-5">
						<ul className="flex flex-col gap-1 absolute -right-3 top-4 z-10">
							{project.technologies.map(({ url }, index) => (
								<li
									key={index}
									className="flex justify-center items-center hexagon w-7 h-7 bg-icons">
									<Image src={url} width={15} height={15} alt={url} />
								</li>
							))}
						</ul>
						<div className="w-full rounded-2xl overflow-hidden">
							<Image
								src={project.image}
								width={800}
								height={800}
								alt={project.title}
								className="w-full transform hover:scale-110 transition duration-300"
							/>
						</div>

						<div className="absolute bottom-1/2 right-1/3 "></div>

						<section
							onMouseOver={moveDiv}
							onMouseOut={moveDiv}
							className="flex justify-center flex-col bg-animation relative -top-10 w-full rounded-2xl overflow-hidden">
							<section className="flex justify-center text-center h-16 bg-slate-950/70">
								<h3 className="p-1 font-semibold">{project.title}</h3>
							</section>

							<div className="w-72 mx-auto h-[1px] bg-slate-300">
								<div className="line-shine"></div>
							</div>

							<section className="overflow-y-auto h-40 scrollbar">
								<p className="mx-4 my-3 text-xs bg-text ">
									{project.description}
								</p>
							</section>

							<ul className="flex justify-center gap-3 my-2">
								<li className="flex justify-center bg-links w-8 h-8 rounded-full">
									<Link
										href={project.github}
										target="_blank"
										className="flex justify-center my-auto  w-4">
										<Github color={"white"} width={"20px"} height={"20px"} />
									</Link>
								</li>
								<li className="flex justify-center bg-links w-8 h-8 rounded-full">
									<Link
										href={project.link}
										target="_blank"
										className="flex justify-center my-auto  w-4">
										<NetLink color={"white"} width={"20px"} height={"20px"} />
									</Link>
								</li>
							</ul>
						</section>
					</article>
				))}
			</section>
		</section>
	);
}
