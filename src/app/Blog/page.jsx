import Link from "next/link";
import React from "react";
import { getAllFilesFrontMatter } from "./mdx.js";

export default function Blog({ posts }) {
	console.log(posts);
	if (!Array.isArray(posts)) {
		return null;
	}

	return (
		<div>
			{posts.map((post) => (
				<Link key={post.slug} href={`/${post.slug}`}>
					<a href="">
						<h2>{post.title}</h2>
						<h2>{post.date}</h2>
					</a>
				</Link>
			))}
		</div>
	);
}

export async function getStaticProps() {
	const posts = await getAllFilesFrontMatter("posts");

	return {
		props: { posts },
	};
}
