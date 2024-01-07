import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();
const dataPath = path.join(root, "src", "data");
const files = fs.readdirSync(dataPath);
const blogs = files.map((filename) => {
	console.log(filename);
	const filePath = path.join(dataPath, filename);
	const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data: frontMatter } = matter(fileContent);
	return {
		meta: frontMatter,
		slug: filename.replace(`.mdx`, ""),
	};
});

export default blogs;
