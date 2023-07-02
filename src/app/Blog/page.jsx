import Link from "next/link";
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
		<section>
			<h2>sadsa</h2>
			<div>
				{blogs.map((post) => (
					<Link key={post.slug} href={`/Blogs/${post.slug}`}>
						<h2>{post.meta.title}</h2>
						<h2>{post.meta.date}</h2>
					</Link>
				))}
			</div>
		</section>
	);
}
// export async function getStaticProps() {
// 	const posts = await getAllFilesFrontMatter("posts");

// 	return {
// 		props: { posts },
// 	};
// }
