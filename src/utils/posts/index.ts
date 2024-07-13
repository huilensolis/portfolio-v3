import "server-only";

import path from "node:path";
import { cwd } from "node:process";
import matter from "gray-matter";
import { POSTS_PATH } from "@/utils/consts";
import { readFile, readdir } from "node:fs/promises";
import { TPostMetadata } from "@/types/post";

export async function getBlogPostList() {
  const postsPath = path.join(cwd(), POSTS_PATH);

  const postList = await readdir(postsPath, { encoding: "utf8" });

  const postsContent = await Promise.all(
    postList.map(
      async (post) => await readFile(postsPath + "/" + post, "utf8"),
    ),
  );

  const postMetadataList = postsContent.map(
    (content) => matter(content).data,
  ) as TPostMetadata[];

  return postMetadataList;
}
