import "server-only";

import path from "node:path";
import { cwd } from "node:process";
import matter from "gray-matter";
import { WRITINGS_PATH } from "@/utils/consts";
import { readFile, readdir } from "node:fs/promises";
import { TPostMetadata } from "@/types/post";

export async function getWritingItems() {
	const writingsPath = path.join(cwd(), WRITINGS_PATH);

	const writingsList = await readdir(writingsPath, { encoding: "utf8" });

	const writingItemsContent = await Promise.all(
		writingsList.map(
			async (post) => await readFile(writingsPath + "/" + post, "utf8"),
		),
	);

	const writingItemMetadataList = writingItemsContent.map(
		(content) => matter(content).data,
	) as TPostMetadata[];

	return writingItemMetadataList;
}
