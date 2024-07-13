import { getBlogPostList } from "@/utils/posts";
import Link from "next/link";

export const dynamic = "force-static";

export default async function BlogPage() {
  const postMetadataList = await getBlogPostList();

  return (
    <div className="flex flex-col">
      <main className="w-full py-32">
        <h1 className="text-6xl sm:text-6xl text-neutral-800 dark:text-neutral-50 font-medium w-full text-balance">
          Blog
        </h1>
      </main>
      <ul className="flex flex-col bg-gradient-to-b from-neutral-900/40 h-full py-5">
        {postMetadataList.map((postMetadata, i) => (
          <li key={i}>
            <Link
              href={`/blog/post/${postMetadata.slug}`}
              className="flex w-ful"
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
