import Link from "next/link";
import Image from "next/image";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// eslint-disable-next-line react/prop-types
export default function Blog() {
	const root = process.cwd();
	const dataPath = path.join(root, "src", "data");
	const files = fs.readdirSync(dataPath);
	const blogs = files.map((filename) => {
		const filePath = path.join(dataPath, filename);
		const fileContent = fs.readFileSync(filePath, "utf-8");
		const { data: frontMatter } = matter(fileContent);
		return {
			meta: frontMatter,
			slug: filename.replace(".mdx", ""),
		};
	});

	return (
		<section className="flex justify-center w-full">
			{blogs.map((post) => (
				<div
					key={post.slug}
					className="flex justify-between align-middle w-80 h-auto bg-animation rounded-tl-lg rounded-tr-lg relative">
					<Link href={`/Blogs/${post.slug}`}>
						<h2 className="m-2 bg-text">{post.meta.title}</h2>
						<div className="flex justify-between m-2 bg-text">
							<h3>{post.meta.description}</h3>
							<h3>{post.meta.date}</h3>
						</div>
						<div className="w-full h-40 rounded-tl-lg rounded-tr-lg overflow-hidden mt-5">
							<Image
								className="transform hover:scale-110 transition duration-300"
								src={post.meta.image}
								width={320}
								height={1}
								alt="Picture of the author"
							/>
						</div>
					</Link>
				</div>
			))}
		</section>
	);
}
