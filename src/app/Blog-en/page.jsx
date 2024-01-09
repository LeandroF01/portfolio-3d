import Link from "next/link";
import Image from "next/image";
import React from "react";
import blogs from "../store/blogStore";

// eslint-disable-next-line react/prop-types
export default function Blog() {
	const filteredBlogs = blogs.filter((blog) => blog.slug.endsWith("-en"));

	return (
		<section className="flex justify-center w-full h-full min-h-screen">
			<section className="flex justify-center items-center w-full h-full flex-wrap my-24 gap-6">
				{filteredBlogs.map((post) => (
					<article
						key={post.slug}
						className="flex justify-center items-center w-80 h-72 bg-animation rounded-tl-lg rounded-tr-lg relative overflow-hidden">
						<Link href={`/Blogs/${post.slug}`}>
							<div className="flex flex-col justify-between m-2 bg-text">
								<h2 className="m-2 bg-text">{post.meta.title}</h2>
								<div className="flex justify-between">
									<p>{post.meta.description}</p>
									<span>{post.meta.date}</span>
								</div>
							</div>
							<div className="w-full h-40 rounded-tl-lg rounded-tr-lg overflow-hidden">
								<Image
									className="transform hover:scale-110 transition duration-300"
									src={post.meta.image}
									width={320}
									height={1}
									alt="Picture of the author"
								/>
							</div>
						</Link>
					</article>
				))}
			</section>
		</section>
	);
}
