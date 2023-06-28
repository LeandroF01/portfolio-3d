import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Blog({ blogs }) {
	return (
		<section>
			<h2>My blog</h2>
			<section>
				<h3>Latest blogs</h3>
			</section>
			<div>
				{blogs.map((blog) => (
					<Link href={"/Blog/" + blog.slug} passHref key={blog.slug}>
						{blog.meta.title}
					</Link>
				))}
			</div>
		</section>
	);
}

export async function getStaticProps() {
	const blogDir = path.join(process.cwd(), "../md");
	const files = fs.readdirSync(blogDir);

	const blogs = files.map((filename) => {
		const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf8");
		const { data: frontMatter } = matter(fileContent);

		return { meta: frontMatter, slug: filename.replace(".mdx", "") };
	});

	return {
		props: {
			blogs,
		},
	};
}
