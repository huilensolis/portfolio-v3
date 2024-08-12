import { MDXRemote } from "next-mdx-remote/rsc";

export function MarkDownMdx({ source }: { source: string }) {
  return (
    <div className="w-full h-full max-w-none pb-5 prose prose-neutral dark:prose-invert prose-headings:font-semibold prose-hr:my-1 prose-hr:mb-5 prose-h1:mb-5 prose-h2:mt-4 prose-h2:my-3">
      <MDXRemote source={source} />
    </div>
  );
}
