import React from "react";
import Image from "next/image";
import user from "../../assets/user.svg";

export const About = () => {
	return (
		<section className="flex justify-center w-full h-full">
			<article className="relative">
				<div className="front">
					<div className="absolute right-5 hexagon w-9 h-9 shadow-shadow-matriz flex justify-center">
						<Image
							src={user}
							width={30}
							height={30}
							alt="Picture of the author"
						/>
					</div>
					<h2>ABOUT ME</h2>
					<p>
						+1 year as a Front-End Web Developer. I have strong knowledge of
						languages such as JavaScript, TypeScript, HTML, CSS, SASS,
						frameworks like ReactJs and Tailwind, and experience in Back-End
						development with NodeJs. Committed to the success of the company, I
						work collaboratively to achieve established goals. I can also
						provide innovative and high-quality solutions that enhance your
						online presence.
					</p>
				</div>
				<div className="back"></div>
			</article>
		</section>
	);
};
