import { Modal } from "@/app/_components/modal";
import { POSTS_PATH } from "@/utils/consts";
import { readFile } from "fs/promises";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import { cwd } from "process";

type TMetadata = {
  title: string;
  slug: string;
};

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
      <Modal title="not found">
        <h1>404</h1>
        <span>sorry, we could not find this page</span>
      </Modal>
    );

  const { data, content } = matter(projectFile);

  if (!projectFile || !content || !data)
    return (
      <Modal title="not found">
        <h1>404</h1>
        <span>sorry, we could not find this page</span>
      </Modal>
    );

  return (
    <Modal title={(data as TMetadata).title}>
      <div className="prose prose-neutral dark:prose-invert prose-headings:font-semibold">
        <MDXRemote source={content} />
      </div>
    </Modal>
  );
}
