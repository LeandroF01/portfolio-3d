"use client";
import React, { useEffect, useState } from "react";
import contact from "../../json/anim/animation_lkfk3q45.json";
import Lottie from "lottie-react";

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

	return (
		<section
			id="Home"
			className="flex justify-between flex-col w-full h-screen snap-center overflow-hidden relative">
			<Lottie
				className="absolute -z-10"
				animationData={contact}
				style={{ width: "100vw", height: "100vh", scale: `${scale}` }}
			/>
			<h1 className="gap-8 h-4 mt-28 relative animate-textKA font-poppins dark:text-white text-pro-w-black font-bold md:text-[64px] md:leading-[70px] text-[40px] leading-[46px] tracking-[-0.5%] text-center">
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
		</section>
	);
};
