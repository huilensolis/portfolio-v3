import { getBlogPostList } from "@/utils/posts";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export async function BlogPostsSection() {
  const posts = await getBlogPostList();

  return (
    <section className="flex flex-col gap-8 dark:text-neutral-200">
      <h3 className="font-medium text-4xl">Blog Posts</h3>
      <ul className="w-full grid grid-cols-3 gap-4">
        {[...posts, ...posts, ...posts, ...posts].map((blogPost, i) => (
          <li
            key={i}
            className="group hover:brightness-125 duration-150 transition-all"
          >
            <Link href={`/engineering/blog/post/${blogPost.slug}`}>
              <article className="flex flex-col gap-10 bg-neutral-800 rounded-md border border-neutral-700/60 p-4">
                <header className="w-full flex justify-between">
                  <span className="font-medium">blog post</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:scale-125 transition-all duration-150" />
                </header>
                <section>
                  <h1 className="text-3xl font-medium">{blogPost.title}</h1>
                  <p className="text-pretty line-clamp-4">
                    {blogPost.description}
                  </p>
                </section>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
