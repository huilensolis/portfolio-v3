import {serialize} from "next-mdx-remote/serialize"
import { MdxRemoteComponent } from "./mdx-remote";

export async function MarkDownMdx({ source }: { source: string }) {
    // Serialize the markdown
  const serializedSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    }
  })

  return (
    <div className="font-fraunces w-full h-full max-w-none pb-5 prose prose-neutral prose-headings:font-semibold prose-hr:my-1 prose-hr:mb-5 prose-h1:mb-5 prose-h2:mt-4 prose-h2:my-3">
      <MdxRemoteComponent serializedSource={source} />
    </div>
  );
}
