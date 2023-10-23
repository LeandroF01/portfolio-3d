"use client";
import React from "react";
import dynamic from "next/dynamic";

const DynamicHome = dynamic(() => import("./components/Home"), {
	ssr: false,
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
	return (
		<>
			<DynamicHome />
			<DynamicAbout />
			<DynamicExperience />
			<DynamicSkills />
			<DynamicContact />
		</>
	);
}
