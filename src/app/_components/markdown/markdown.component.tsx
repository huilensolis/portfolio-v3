import { MdxRemoteComponent } from "./mdx-remote";

export async function MarkDownMdx({ source }: { source: string }) {
	return (
		<div className="prose-p:first-letter:text-9xl prose-p:first-letter:uppercase prose-p:first-letter:float-left prose-p:first-letter:mr-7 prose-p:mb-16 font-fraunces text-[28px] leading-relaxed w-full h-full max-w-none pb-5 prose prose-neutral prose-headings:font-normal prose-hr:my-1 prose-hr:mb-5 prose-h1:mb-5 prose-h2:mt-4 prose-h2:my-3 prose-img:w-full">
			<MdxRemoteComponent serializedSource={source} />
		</div>
	);
}
