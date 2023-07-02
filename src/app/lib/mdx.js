import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

// eslint-disable-next-line no-undef
const root = process.cwd();

export const getFiles = async () => fs.readdirSync(path.join(root, "data"));

export const getFileBySlug = async ({ slug }) => {
	const mdxSource = fs.readFileSync(
		path.join(root, "data", `${slug}.mdx`),
		"utf8"
	);

	const { data, content } = await matter(mdxSource);

	const source = await serialize(content, {});

	return {
		source,
		frontmatter: {
			slug,
			...data,
		},
	};
};

export const getAllFilesFrontMatter = async () => {
	const files = fs.readdirSync(path.join(root, "data"));

	return files.reduce((allPosts, postSlug) => {
		const mdxSource = fs.readFileSync(
			path.join(root, "data", `${postSlug}.mdx`),
			"utf8"
		);
		const { data } = matter(mdxSource);

		return [
			{
				...data,
				slug: postSlug.replace(".mdx", ""),
			},
			...allPosts,
		];
	}, []);
};
