import { POSTS_PATH } from "@/utils/consts";
import { readFile, readdir } from "node:fs/promises";
import { cwd } from "node:process";
import matter from "gray-matter";
import Link from "next/link";
import path from "node:path";
import { TPostMetadata } from "@/types/post";

export const dynamic = "force-static";

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
    <div className="flex flex-col">
      <main className="w-full h-full border-y border-l dark:border-neutral-900 border-gray-200 grid grid-cols-10 grid-rows-4 relative">
        {Array(10 * 4)
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              className={`h-24 w-full border-r dark:border-neutral-900 border-gray-200`}
            ></div>
          ))}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
          <h1 className="max-w-[60rem] text-4xl sm:text-6xl text-neutral-800 dark:text-neutral-50 font-medium w-full text-center text-balance">
            Blog
          </h1>
        </div>
      </main>
      <div className="w-full py-5 border-x border-gray-200 dark:border-neutral-900"></div>
      <ul className="flex flex-col bg-gradient-to-b from-neutral-900/40 h-full py-5">
        {postMetadataList.map((postMetadata, i) => (
          <li key={i}>
            <Link
              href={`/blog/post/${postMetadata.slug}`}
              className="flex w-full border-x border-gray-200 dark:border-neutral-900 p-4"
            >
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
    </div>
  );
}
