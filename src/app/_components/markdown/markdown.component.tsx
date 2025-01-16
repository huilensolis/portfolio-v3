import { MdxRemoteComponent } from "./mdx-remote";

export async function MarkDownMdx({ source }: { source: string }) {
  return (
    <div className="font-fraunces w-full h-full max-w-none pb-5 prose prose-neutral prose-headings:font-semibold prose-hr:my-1 prose-hr:mb-5 prose-h1:mb-5 prose-h2:mt-4 prose-h2:my-3 prose-img:w-full">
      <MdxRemoteComponent serializedSource={source} />
    </div>
  );
}
