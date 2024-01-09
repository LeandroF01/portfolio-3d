"use client";
import React from "react";
import { Github } from "./Icons/Github";
import { Linkedin } from "./Icons/Linkedin";
import useLanguageStore from "../store/languageStore";

export const Footer = () => {
	const { language, setLanguage } = useLanguageStore();
	return (
		<footer className="flex flex-col justify-center items-center w-full h-40 bg-zinc-900 mt-10 relative">
			<div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-zinc-800/30"></div>
			<section className="flex justify-between items-center w-full h-full z-50">
				<div className="mx-10">
					<p className="text-zinc-200 text-sm">Leandro Farias</p>
					<p className="text-zinc-400 text-sm">leandro.dev.fa@gmail.com</p>
				</div>
				<ul className="flex justify-center items-center gap-5 m-10">
					<li className=" w-full">
						<a
							className="button__github-footer  text-white"
							href="https://github.com/LeandroF01">
							<Github color={"grey"} width={20} height={20} />
						</a>
					</li>
					<li className=" w-full">
						<a
							className="button__linkedin-footer text-white"
							href="https://www.linkedin.com/in/leandro-farias01/">
							<Linkedin color={"grey"} width={20} height={20} />
						</a>
					</li>
				</ul>
			</section>

			<p className="text-zinc-400 text-sm m-4 z-50">
				{language === "en"
					? "Copyright © 2024. All rights reserved."
					: "Copyright © 2024. Todos los derechos reservados."}
			</p>
		</footer>
	);
};
