import { getBlogPostList } from "@/utils/posts";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-static";

export default async function BlogPage() {
  const postMetadataList = await getBlogPostList();

  return (
    <div className="flex flex-col">
      <main className="w-full mb-32">
        <h1 className="text-6xl sm:text-6xl text-neutral-800 font-medium w-full text-balance">
          Blog
        </h1>
      </main>
      <ul className="w-full grid grid-cols-3 gap-4">
        {[...postMetadataList].map((blogPost, i) => (
          <li key={i} className="group">
            <Link href={`/blog/post/${blogPost.slug}`}>
              <article className="flex flex-col gap-24 bg-gray-100 rounded-md border border-gray-200/40 p-4 hover:bg-gray-200/60 duration-150 transition-all">
                <header className="w-full flex justify-between">
                  <span className="font-medium">blog post</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:scale-125 transition-all duration-150" />
                </header>
                <footer className="flex flex-col gap-4">
                  <header className="flex flex-col">
                    <h1 className="text-3xl font-medium">{blogPost.title}</h1>
                    <span>
                      {new Date(blogPost.date).toLocaleString("en-US", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "2-digit",
                      })}
                    </span>
                  </header>
                  <p className="text-pretty font-medium line-clamp-4">
                    {blogPost.description}
                  </p>
                </footer>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
