import matter from "gray-matter";

import { WRITINGS_PATH } from "@/utils/consts";
import { readFile } from "fs/promises";
import { cwd } from "process";
import path from "path";

import type { Metadata, ResolvingMetadata } from "next";
import { TPostMetadata } from "@/types/post";
import { MarkDownMdx } from "@/app/_components/markdown/markdown.component";

export const dynamic = "force-static";

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

  const postsPath = path.join(cwd(), WRITINGS_PATH);

  const post = await readFile(
    `${postsPath}/${id.toLowerCase()}.mdx`,
    "utf8",
  ).catch((e) => console.log(e));

  if (!post) return { title: "Not Found", description: "404" };

  const { data } = matter(post);

  const metadata = (data as TPostMetadata) || undefined;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const ogImage = post
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/en/writings/item/${id}/opengraph-image`
    : `https://${process.env.VERCEL_URL}`;

  return {
    title: metadata.title,
    description: metadata.description,
    creator: "Huilen Solis",
    openGraph: {
      images: [{ url: ogImage }, ...previousImages],
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
      creator: "huilensolis",
      images: [{ url: ogImage, alt: metadata.title }, ...previousImages],
      card: "summary_large_image",
    },
  };
}

export default async function PostPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const postsPath = path.join(cwd(), WRITINGS_PATH);

  const post = await readFile(
    `${postsPath}/${id.replaceAll("%20", "-")}.mdx`,
    "utf8",
  ).catch((e) => console.log(e));

  if (!post) return <p>not found</p>;

  const { data: _data, content } = matter(post);

  if (!post || !content) return <p>not found</p>;

  return <MarkDownMdx source={content} />;
}
