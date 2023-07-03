import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
	const root = process.cwd();
	const files = fs.readdirSync(path.join(root, "src", "data"));
	const markdownFiles = files.filter((filename) => filename.endsWith(".mdx"));

	const paths = markdownFiles.map((filename) => ({
		slug: filename.replace(".mdx", ""),
	}));

	console.log(paths);

	return paths;
}

function getPost({ slug }) {
	console.log(slug);
	const root = process.cwd();
	const markdownFile = fs.readFileSync(
		path.join(root, "src", "data", `${slug}.mdx`),
		"utf-8"
	);

	const { fontMatter, content } = matter(markdownFile);

	console.log(content);

	return {
		fontMatter,
		slug,
		content,
	};
}

export default function Page({ params }) {
	const { fontMatter, content } = getPost(params);

	return (
		<article>
			<h2>asdasd</h2>

			<MDXRemote source={content}></MDXRemote>
		</article>
	);
}