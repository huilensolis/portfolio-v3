import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

const components = {
  img: (props: any) => (
    <Image
      {...(props as any)}
      className={[
        props.className ?? "",
        "aspect-video object-cover object-center",
      ].join("")}
    />
  ),
};

export function MarkDownMdx({ source }: { source: string }) {
  return (
    <div className="pb-5 prose prose-neutral dark:prose-invert prose-headings:font-semibold prose-hr:my-1 prose-hr:mb-5 prose-h1:mb-5 prose-h2:mt-4 prose-h2:my-3">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
