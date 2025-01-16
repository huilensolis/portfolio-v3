import { MarkDownMdx } from "@/app/_components/markdown/markdown.component";
import { Modal } from "@/app/_components/modal";
import { PROJECTS_PATH } from "@/utils/consts";
import { readFile } from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { cwd } from "process";

type TMetadata = {
  title: string;
  slug: string;
};

export default async function Project({
  params
}: {
  params: { slug: string };
}) {

  const {slug} = await params

  const projectsPath = path.join(cwd(), PROJECTS_PATH);

  const cleanSlug = slug.toLowerCase();

  const projectFile = await readFile(
    `${projectsPath}/${cleanSlug}.mdx`,
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
      <MarkDownMdx source={content} />
    </Modal>
  );
}
