import { PROJECTS_PATH } from "@/utils/consts";
import { readFile } from "fs/promises";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import { cwd } from "process";

export default async function Project({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const projectsPath = path.join(cwd(), PROJECTS_PATH);

  const projectFile = await readFile(
    `${projectsPath}/${slug.toLowerCase().trim().replaceAll("%20", "-")}.mdx`,
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

  return (
    <div className="prose prose-neutral dark:prose-invert prose-headings:font-semibold prose-hr:my-1">
      <div>
        {data.title && <h1>{data.title}</h1>}
        <MDXRemote source={content} />
      </div>
    </div>
  );
}
