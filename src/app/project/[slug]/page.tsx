import { POSTS_PATH } from "@/utils/consts";
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
  const postsPath = path.join(cwd(), POSTS_PATH);

  const projectFile = await readFile(
    `${postsPath}/${slug.toLowerCase().trim().replaceAll("%20", "-")}.mdx`,
    "utf8",
  ).catch(() => undefined);

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
    <div className="prose prose-neutral dark:prose-invert prose-headings:font-semibold">
      <div>
        {data.title && <h1>{data.title}</h1>}
        <MDXRemote source={content} />
      </div>
    </div>
  );
}
