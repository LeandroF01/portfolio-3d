"use client";
import React from "react";
import dynamic from "next/dynamic";
import Loader from "./components/Loader";
import useIntersectionObserver from "./hooks/useIntersectionObserver.js";
const DynamicHome = dynamic(() => import("./components/Home"), {
	ssr: false,
	loading: () => (
		<section className="w-full h-screen flex justify-center items-center">
			<Loader />
		</section>
	),
});
const DynamicAbout = dynamic(() => import("./components/About"), {
	ssr: false,
});
const DynamicExperience = dynamic(() => import("./components/Experience"), {
	ssr: false,
});
const DynamicSkills = dynamic(() => import("./components/Skills"), {
	ssr: false,
});
const DynamicContact = dynamic(() => import("./components/Contact"), {
	ssr: false,
});

export default function Page() {
	const [targetRef, isIntersecting] = useIntersectionObserver({
		threshold: 0.01,
	});
	return (
		<section>
			<section ref={targetRef}>
				<DynamicHome />
			</section>

			<section ref={targetRef}>
				<DynamicAbout />
				<DynamicExperience />
				<DynamicSkills />
				<DynamicContact />
			</section>
		</section>
	);
}
