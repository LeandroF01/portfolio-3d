"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import font from "../../assets/bg-security-upper-mg.svg";
import { Cv, DownArrow, Checked } from "./Icons/Download";
import { Github } from "./Icons/Github";
import { Linkedin } from "./Icons/Linkedin";
import useHome from "../hooks/useHome";
function Home() {
	const {
		text1,
		letter1,
		text2,
		letter2,
		delayIncrement,
		letter2Delay,
		scale,
		isClicked,
		isHovered,
		handleButtonClick,
		handleMouseEnter,
		handleMouseLeave,
	} = useHome();
	return (
		<section
			id="Home"
			className="flex items-center flex-col w-full h-screen overflow-hidden relative bg-home">
			<Image
				src={font}
				width={700}
				height={600}
				loading="eager"
				alt="img"
				className="absolute -z-50 -top-60 max-lg:-top-10 max-lg:-right-25 -right-80 scale-up-center"
			/>
			<Image
				src={font}
				width={500}
				height={400}
				loading="eager"
				alt="img"
				className="absolute -z-50 -bottom-10 -left-12 max-lg:-bottom-16 max-lg:-left-36 scale-up-center2"
			/>
			<div className="flex">
				<h1 className="gap-8 mt-28 relative animate-textKA font-poppins dark:text-white text-pro-w-black font-bold md:text-[64px] md:leading-[70px] text-[40px] leading-[46px] tracking-[-0.5%] text-center">
					{letter1.map((letter, index) => (
						<span
							key={index}
							className="inline-block max-lg:text-3xl"
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
							className="bg-gradient-to-r text-white text-transparent bg-clip-text inline-block max-lg:text-2xl">
							{letter}
						</span>
					))}
				</h1>
			</div>

			<section className="flex flex-col z-10 my-20 gap-2">
				<ul className="flex justify-center items-center gap-1">
					<li className=" w-full">
						<a
							className="button__github  text-white"
							href="https://github.com/LeandroF01">
							<Github color={"white"} width={20} height={20} />
							Github
						</a>
					</li>
					<li className=" w-full">
						<a
							className="button__linkedin text-white"
							href="https://www.linkedin.com/in/leandro-farias01/">
							<Linkedin color={"white"} width={20} height={20} />
							Linkedin
						</a>
					</li>
				</ul>
				<button
					type="button"
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
}

export default Home;
