import { Modal } from "@/app/_components/modal";
import { PROJECTS_PATH } from "@/utils/consts";
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
  const projectsPath = path.join(cwd(), PROJECTS_PATH);

  const projectFile = await readFile(
    `${projectsPath}/${slug.toLowerCase().trim().replaceAll("%20", "-")}.mdx`,
    "utf8",
  ).catch((e) => console.log(e));

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
    <Modal title={(data as TMetadata).slug}>
      <div className="pb-5 prose prose-neutral dark:prose-invert prose-headings:font-semibold prose-hr:my-1 prose-hr:mb-5 prose-h1:mb-5 prose-h2:mt-4 prose-h2:my-3">
        <MDXRemote source={content} />
      </div>
    </Modal>
  );
}
