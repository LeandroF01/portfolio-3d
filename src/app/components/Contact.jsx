"use client";
import React from "react";
import Lottie from "lottie-react";
import contact from "../../json/animation-contact.json";
import useIntersectionObserver from "../hooks/useIntersectionObserver.js";

export const Contact = () => {
	const [targetRef, isIntersecting] = useIntersectionObserver({
		threshold: 0.5,
	});

	return (
		<section
			id="Contact"
			ref={targetRef}
			className="flex justify-center items-center gap-1 h-screen  snap-start">
			<div
				className={`flex min-h-[500px] max-md:flex-col-reverse animate-slideInDown ${
					isIntersecting ? "" : "hidden"
				}`}>
				<form
					className="flex-col bg-animation  w-80 h-auto px-6 py-12 space-y-6 overflow-hidden rounded-tr-[40px] max-md:rounded-[0px] max-md:rounded-bl-[40px]"
					action="https://formsubmit.co/leandro.dev.fa@gmail.com"
					method="POST">
					<div className="line-shine w-full top-0"></div>
					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="name"
								className="block text-sm font-medium leading-6 text-white">
								Name
							</label>
						</div>
						<div className="mt-2">
							<input
								id="Name"
								name="name"
								type="text"
								required
								className="block w-full rounded-md border-0 py-1.5  text-slate-800  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-800  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-white">
							Email address
						</label>
						<div className="mt-2">
							<input
								id="email"
								name="email"
								type="email"
								required
								className="block w-full rounded-md border-0 py-1.5  text-slate-800   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-800  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="message"
							className="block text-sm font-medium leading-6 text-white">
							Message
						</label>
						<div className="mt-2">
							<textarea
								name="message"
								required
								className="block w-full rounded-md text-slate-800 border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								style={{ overflow: "auto" }}
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							Submit
						</button>
					</div>
				</form>
				<div className="bg-[#93c5fd] w-80 h-auto rounded-bl-[40px] relative overflow-hidden max-md:rounded-tr-[40px] max-md:rounded-bl-[0px]">
					<div className="line-shine w-full bottom-0"></div>
					<Lottie animationData={contact} />
					<div className="absolute -bottom-20 right-0 h-[250px] w-[200px] bg-white rounded-full opacity-10 transform translate-x-10 translate-y-10"></div>
				</div>
			</div>
		</section>
	);
};
