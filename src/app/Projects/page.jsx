import React from "react";

export default function Projects() {
	return (
		<section className="flex justify-center w-full">
			<article className="w-80 h-auto bg-red-600 relative rounded-2xl">
				<div className="w-full h-40 bg-blue-500 rounded-2xl"></div>
				<section className="bg-animation top-32 absolute w-full rounded-2xl">
					<div></div>
					<h3>Lorem ipsum dolor sit amet</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
						excepturi nam est doloribus molestias. Odio omnis obcaecati
						veritatis magni, nobis nihil fuga hic beatae accusantium, eum
						temporibus rem enim quidem.
					</p>
					<ul>
						<li>
							<a href="">Git</a>
						</li>
						<li>
							<a href="">Link</a>
						</li>
					</ul>
				</section>
			</article>
		</section>
	);
}
