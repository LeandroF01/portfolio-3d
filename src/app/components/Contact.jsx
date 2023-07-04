"use client";
import React from "react";
import Lottie from "lottie-react";
import contact from "../../json/animation-contact.json";

export const Contact = () => {
	return (
		<section id="Contact" className="flex justify-center gap-1">
			<form
				className="flex-col bg-form  w-80 h-auto px-6 py-12 space-y-6 overflow-hidden rounded-tr-[40px]"
				action="#"
				method="POST">
				<div className="line-shine w-full top-0"></div>
				<div>
					<div className="flex items-center justify-between">
						<label className="block text-sm font-medium leading-6 text-white">
							Name
						</label>
					</div>
					<div className="mt-2">
						<input
							id="Name"
							name="Name"
							type="Name"
							required
							className="block w-full rounded-md border-0 py-1.5  text-slate-800  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-800  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div>
					<label className="block text-sm font-medium leading-6 text-white">
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
					<label className="block text-sm font-medium leading-6 text-white">
						Message
					</label>
					<div className="mt-2">
						<textarea
							required
							className="block w-full rounded-md text-slate-800 border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-800  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<button
						type="submit"
						className="flex w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						Sign in
					</button>
				</div>
			</form>
			<div className="bg-animation w-80  rounded-bl-[40px] relative overflow-hidden">
				<div className="line-shine w-full bottom-0"></div>
				<Lottie animationData={contact} />
			</div>
		</section>
	);
};
