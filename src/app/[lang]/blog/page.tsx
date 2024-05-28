import { POSTS_PATH } from "@/utils/consts";
import { readFile, readdir } from "node:fs/promises";
import { cwd } from "node:process";
import matter from "gray-matter";
import Link from "next/link";
import path from "node:path";

type TPostMetadata = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export default async function BlogPage() {
  const postsPath = path.join(cwd(), POSTS_PATH);

  const postList = await readdir(postsPath, { encoding: "utf8" });

  const postsContent = await Promise.all(
    postList.map(
      async (post) => await readFile(postsPath + "/" + post, "utf8"),
    ),
  );

  const postMetadataList: Partial<TPostMetadata>[] = postsContent.map(
    (content) => matter(content).data,
  );

  return (
    <ul className="flex flex-col gap-8">
      {postMetadataList.map((postMetadata, i) => (
        <li key={i}>
          <Link href={`/blog/post/${postMetadata.slug}`}>
            <article className="flex flex-col gap-2">
              <header>
                <h1 className="dark:text-neutral-50 font-semibold">
                  {postMetadata.title ?? "Untitled"}
                </h1>
                {postMetadata.date && (
                  <span>
                    {[
                      new Date(postMetadata.date).getDay(),
                      new Date(postMetadata.date).getMonth(),
                      new Date(postMetadata.date).getFullYear(),
                    ].join("/")}
                  </span>
                )}
              </header>
              {postMetadata.description && (
                <div className="relative">
                  <p className="text-pretty w-full">
                    {postMetadata.description.length > 2 * 80
                      ? postMetadata.description.slice(0, 2 * 80)
                      : postMetadata.description}
                  </p>
                  {postMetadata.description.length > 1 * 80 && (
                    <div className="absolute bottom-0 left-0 h-2/6 w-full bg-gradient-to-t from-neutral-950"></div>
                  )}
                </div>
              )}
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}
