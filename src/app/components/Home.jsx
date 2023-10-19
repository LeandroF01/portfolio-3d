"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";

import font from "../../assets/bg-security-upper-mg.svg";
import { Cv, DownArrow, Checked } from "./icons/Download.jsx";
import { Github } from "./icons/Github.jsx";
import { Linkedin } from "./icons/Linkedin.jsx";

export const Home = () => {
	const text1 = "Hello, I'm Leandro Farias";
	const letter1 = text1
		.split("")
		.map((letter) => (letter === " " ? "\u00A0" : letter));
	const text2 = "Front-End Developer";
	const letter2 = text2
		.split("")
		.map((letter) => (letter === " " ? "\u00A0" : letter));

	const delayIncrement = 0.1;
	const letter2Delay = letter1.length * delayIncrement;

	const [scale, setScale] = useState(window.innerWidth >= 700 ? 5 : 2);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setScale(window.innerWidth >= 700 ? 5 : 2);
		}

		if (typeof window !== "undefined") {
			window.addEventListener("resize", handleResize);
		}

		// Define la función handleResize
		function handleResize() {
			setScale(window.innerWidth >= 700 ? 5 : 2);
		}

		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("resize", handleResize);
			}
		};
	}, []);

	const [isClicked, setIsClicked] = useState(false);

	const [isHovered, setIsHovered] = useState(false);

	const handleButtonClick = () => {
		setIsClicked(!isClicked);
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<section
			id="Home"
			className="flex items-center flex-col w-full h-screen overflow-hidden relative bg-home">
			<Image
				src={font}
				width={900}
				height={700}
				alt="img"
				className="absolute -z-50 -top-60 -right-60 scale-up-center"
			/>
			<Image
				src={font}
				width={500}
				height={400}
				alt="img"
				className="absolute -z-50 -bottom-10 -left-12 scale-up-center2"
			/>
			<div className="flex">
				<h1 className="gap-8 mt-28 relative animate-textKA font-poppins dark:text-white text-pro-w-black font-bold md:text-[64px] md:leading-[70px] text-[40px] leading-[46px] tracking-[-0.5%] text-center">
					{letter1.map((letter, index) => (
						<span
							key={index}
							className="inline-block"
							style={{
								animationDelay: `${index * delayIncrement}s`,
							}}>
							{letter}
						</span>
					))}

					<br />

					{letter2.map((letter, index) => (
						<span
							key={index}
							style={{
								animationDelay: `${letter2Delay + index * delayIncrement}s`,
							}}
							className="bg-gradient-to-r text-white text-transparent bg-clip-text inline-block">
							{letter}
						</span>
					))}
				</h1>
			</div>

			<section className="flex flex-col z-10 my-20 gap-2">
				<ul className="flex justify-center items-center gap-1">
					<li className=" w-full">
						<a className="button__github" href="">
							<Github color={"white"} width={"20px"} height={"20px"} />
							Github
						</a>
					</li>
					<li className=" w-full">
						<a className="button__linkedin" href="">
							<Linkedin color={"white"} width={"20px"} height={"20px"} />
							Linkedin
						</a>
					</li>
				</ul>
				<button
					onClick={handleButtonClick}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className={`flex flex-row justify-center items-center cursor-pointer rounded-md px-3 py-1 cssbuttons-io `}>
					<span className="flex justify-center items-center gap-3">
						Download
						{isClicked && (
							<Checked color={"white"} width={"20px"} height={"20px"} />
						)}
						{isHovered && !isClicked && (
							<DownArrow color={"white"} width={"20px"} height={"20px"} />
						)}
						{!isHovered && !isClicked && (
							<div className="w-[20px] h-[20px]">
								<Cv color={"white"} />
							</div>
						)}
					</span>
				</button>
			</section>
		</section>
	);
};
