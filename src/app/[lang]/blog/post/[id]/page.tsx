import { MDXRemote } from "next-mdx-remote/rsc";
import * as matter from "gray-matter";

import { POSTS_PATH } from "@/utils/consts";
import { readFile } from "fs/promises";
import { cwd } from "process";

export default async function PostPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const postsPath = cwd() + POSTS_PATH;

  const post = await readFile(`${postsPath}/${id}.mdx`, "utf8");

  const parsedPostFile = matter.default(post);

  if (!post || !parsedPostFile.content) return <p>not found</p>;

  return (
    <div className="prose prose-neutral dark:prose-invert prose-headings:font-semibold">
      <div>
        {parsedPostFile.data.title && <h1>{parsedPostFile.data.title}</h1>}
        <MDXRemote source={parsedPostFile.content} />
      </div>
    </div>
  );
}
