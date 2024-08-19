import { Metadata, ResolvingMetadata } from "next";
import { MainSection } from "./_components/sections/main.section.component";
import { ProjectsSection } from "./_components/sections/projects.section.component";
import { WritingsItemsSection } from "./_components/sections/blog-posts.section.component";

type Props = {
  params: { lang: "es" | "en" };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  {}: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const ogImage = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/opengraph-image`;

  return {
    title: "Huilen Solis Portfolio",
    description: "Full Stack Developer",
    creator: "Huilen Solis",
    openGraph: {
      images: [{ url: ogImage }, ...previousImages],
      title: "Huilen Solis Portfolio",
      description: "Full stack Developer",
      type: "website",
      locale: "en-us",
    },
    twitter: {
      title: "Huilen Solis Portfolio",
      description: "Full Stack Developer",
      creator: "huilensolis" || undefined,
      images: [
        { url: ogImage, alt: "Huilen Solis Portfolio" },
        ...previousImages,
      ],
      card: "summary_large_image",
    },
  };
}

export const dynamic = "force-static";

export default function EngineeringPage() {
  return (
    <article className="w-full flex flex-col gap-4">
      <MainSection />
      <ProjectsSection />
      <WritingsItemsSection />
    </article>
  );
}
