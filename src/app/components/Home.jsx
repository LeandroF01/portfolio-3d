"use client";
import React, { useEffect, useState } from "react";
import contact from "../../json/anim/animation_lkfk3q45.json";
import Lottie from "lottie-react";
import { Cv, DownArrow, Checked } from "./icons/Download.jsx";

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
		const handleResize = () => {
			setScale(window.innerWidth >= 700 ? 2 : 5);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
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
			className="flex items-center flex-col w-full h-screen overflow-hidden relative -z-10 bg-[#00024C]">
			<Lottie
				className="absolute top-1/2 -translate-y-1/2 -z-10"
				animationData={contact}
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
							className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text inline-block">
							{letter}
						</span>
					))}
				</h1>
			</div>

			<section className="flex flex-col">
				<button
					onClick={handleButtonClick}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className={`flex flex-row justify-center items-center cursor-pointer rounded-md px-3 py-1 w-36 bg-[#2900F6] ring-1 ring-fuchsia-400/60  `}>
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
