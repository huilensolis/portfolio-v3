import { MarkDownMdx } from "@/app/_components/markdown/markdown.component";
import { PROJECTS_PATH } from "@/utils/consts";
import { readFile } from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { cwd } from "process";

export default async function Project({params}: {params: Promise<{slug: string}>}) {
	const slug = (await params).slug

	const projectsPath = path.join(cwd(), PROJECTS_PATH);

	const cleanSlug = slug.toLowerCase().trim().replaceAll("%20", "-");

	const projectFile = await readFile(
		`${projectsPath}/${cleanSlug}.mdx`,
		"utf8",
	).catch((e) => console.log(e));

	if (!projectFile)
		return (
			<div className="flex flex-col">
				<h1>404</h1>
				<span>sorry, we could not find this page</span>
			</div>
		);

	const { data, content } = matter(projectFile);

	if (!projectFile || !content || !data)
		return (
			<div className="flex flex-col">
				<h1>404</h1>
				<span>sorry, we could not find this page</span>
			</div>
		);

	return <MarkDownMdx source={content} />;
}
