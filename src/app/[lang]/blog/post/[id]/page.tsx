import { MDXRemote } from "next-mdx-remote/rsc";
import * as matter from "gray-matter";

import { POSTS_PATH } from "@/utils/consts";
import { readFile } from "fs/promises";
import { cwd } from "process";
import path from "path";

import type { Metadata, ResolvingMetadata } from "next";
import { TPostMetadata } from "@/app/types/post";
import { getDictionary } from "@/utils/dictionaries";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.id;

  const postsPath = path.join(cwd(), POSTS_PATH);

  const post = await readFile(
    `${postsPath}/${id.replaceAll("%20", "-")}.mdx`,
    "utf8",
  );

  const parsedPost = matter.default(post);

  const { data } = parsedPost;

  const metadata = data as TPostMetadata;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const dictionary = await getDictionary("en");
  return {
    title: metadata.title,
    description: metadata.description,
    creator: "Huilen Solis",
    openGraph: {
      images: [...previousImages],
      title: metadata.title,
      description: metadata.description,
      type: "article",
      locale: "en",
      publishedTime: metadata.date,
      authors: "Huilen Solis",
    },
    twitter: {
      title: metadata.title,
      description: metadata.description,
      creator: dictionary.contact.twitter.at || undefined,
      images: [...previousImages],
    },
  };
}

export default async function PostPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const postsPath = path.join(cwd(), POSTS_PATH);

  const post = await readFile(
    `${postsPath}/${id.replaceAll("%20", "-")}.mdx`,
    "utf8",
  );

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
