import { Metadata, ResolvingMetadata } from "next";
import { MainSection } from "../_components/sections/main.section.component";
import { ProjectsSection } from "../_components/sections/projects.section.component";
import { WritingsItemsSection } from "../_components/sections/commentaria.section.component";
import { getDictionary, hasLocale, Locale } from '@/app/[lang]/dictionaries'
import NotFound from "./not-found";
import Image from "next/image";

export async function generateMetadata(
    _params: any,parent: ResolvingMetadata,
): Promise<Metadata> {
	// read route params

	// optionally access and extend (rather than replace) parent metadata
	const previousImages = (await parent).openGraph?.images || [];

	const ogImage = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/opengraph-image`;

	return {
		title: "Huilen Solis Portfolio",
		description: "Software Engineer",
		icons: {
			icon: "/public/favicon.ico",
		},
		creator: "Huilen Solis",
		openGraph: {
			images: [{ url: ogImage }, ...previousImages],
			title: "Huilen Solis Portfolio",
			description: "Software Engineer",
			type: "website",
			locale: "en-us",
		},
		twitter: {
			title: "Huilen Solis Portfolio",
			description: "software engineer",
			creator: "huilensolis",
			images: [
				{ url: ogImage, alt: "Huilen Solis Portfolio" },
				...previousImages,
			],
			card: "summary_large_image",
		},
	};
}

export const dynamic = "force-static";

export default async function EngineeringPage({params}: {params: Promise<{lang: Locale}>}) {

    const {lang} = await params 

    if(!hasLocale) return NotFound()

    const dict = await getDictionary(lang)

	return (
		<article className="flex flex-col lg:grid grid-cols-12 grid-rows-[repeat(auto-fit,_350px)] gap-4 list-none">
			<MainSection />
			<ProjectsSection dictionary={dict.projects} />
            <Image className="col-span-3 object-cover rounded-md h-full" height={350} width={500} alt="Plato as Leonardo da Vinci (left) and Aristotle, detail of The School of Athens by Raphael" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Sanzio_01_Plato_Aristotle.jpg/500px-Sanzio_01_Plato_Aristotle.jpg" />
			<WritingsItemsSection />
		</article>
	);
}
