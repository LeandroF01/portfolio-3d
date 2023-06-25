import React from "react";
import Image from "next/image";

import { Github } from "../components/icons/Github.jsx";
import { NetLink } from "../components/icons/NetLink.jsx";

export default function Projects() {
	return (
		<section className="flex justify-center w-full">
			<article className="w-80 h-auto bg-red-600 rounded-2xl relative">
				<div className="w-full h-40 bg-blue-500 rounded-2xl"></div>
				<div className="absolute bottom-[27px] right-2">
					<ul className="flex gap-1 z-10">
						<li className="hexagon w-8 h-8 bg-icons"></li>
						<li className="hexagon w-8 h-8 bg-icons"></li>
						<li className="hexagon w-8 h-8 bg-icons"></li>
					</ul>
				</div>
				<section className="flex justify-center flex-col bg-animation top-32 absolute w-full rounded-2xl overflow-hidden">
					<h3 className="text-center p-2 font-bold ">
						Lorem ipsum dolor sit amet
					</h3>
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
