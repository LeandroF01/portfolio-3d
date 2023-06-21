import React from "react";

export const Contact = () => {
	return (
		<section className="flex justify-center ">
			<form
				className="flex-col bg-form  w-80 h-auto px-6 py-12 space-y-6 overflow-hidden"
				action="#"
				method="POST">
				<div className="line-shine w-full"></div>
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
							className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
							className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div>
					<label className="block text-sm font-medium leading-6 text-white">
						Email address
					</label>
					<div className="mt-2">
						<textarea
							required
							className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<button
						type="submit"
						className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						Sign in
					</button>
				</div>
			</form>
		</section>
	);
};
