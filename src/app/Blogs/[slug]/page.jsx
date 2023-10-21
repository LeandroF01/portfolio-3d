import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

// eslint-disable-next-line no-undef
const root = process.cwd();

export async function generateStaticParams() {
	const files = fs.readdirSync(path.join(root, "src", "data"));
	const markdownFiles = files.filter((filename) => filename.endsWith(".mdx"));

	const paths = markdownFiles.map((filename) => ({
		slug: filename.replace(".mdx", ""),
	}));

	return paths;
}

function getPost({ slug }) {
	const markdownFile = fs.readFileSync(
		path.join(root, "src", "data", `${slug}.mdx`),
		"utf-8"
	);

	const { data, content } = matter(markdownFile);

	return {
		data,
		slug,
		content,
	};
}

// eslint-disable-next-line react/prop-types
export default function Page({ params }) {
	const props = getPost(params);

	return (
		<section id="Blog" className="flex justify-center items-center">
			<article className="flex flex-col justify-center max-w-4xl gap-5 my-16">
				{/*eslint-disable-next-line react/prop-types, react/prop-types */}
				<h2 className="text-5xl font-bold my-3">{props?.data.title}</h2>
				{/* eslint-disable-next-line react/prop-types */}
				<MDXRemote source={props?.content}></MDXRemote>
			</article>
		</section>
	);
}
