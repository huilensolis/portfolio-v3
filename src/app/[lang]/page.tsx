import { getDictionary } from "@/utils/dictionaries";

import { DateTime } from "luxon";
import { TIME_ZONE } from "@/utils/consts";
import { React } from "@/components/icons/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CopyToClipboardBtn } from "@/components/feature/copy-to-clipboard";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { lang: "es" | "en" };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params: { lang } }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const dictionary = await getDictionary(lang);

  const ogImage = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/${lang}/opengraph-image`;

  return {
    title: "Huilen Solis Portfolio",
    description: "Full Stack Developer",
    creator: "Huilen Solis",
    openGraph: {
      images: [{ url: ogImage }, ...previousImages],
      title: "Huilen Solis Portfolio",
      description: "Full stack Developer",
      type: "website",
      locale: lang,
    },
    twitter: {
      title: "Huilen Solis Portfolio",
      description: "Full Stack Developer",
      creator: dictionary.contact.twitter.at || undefined,
      images: [
        { url: ogImage, alt: "Huilen Solis Portfolio" },
        ...previousImages,
      ],
      card: "summary_large_image",
    },
  };
}

export const dynamic = "force-static";

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: "en" | "es" };
}) {
  const dictionary = await getDictionary(lang);

  const local = DateTime.local();
  const date = local.setZone(TIME_ZONE);

  return (
    <div>
      <div className="flex flex-col">
        <section className="flex flex-col shadow-bottom dark:shadow-neutral-900 shadow-gray-200">
          <ul className="flex flex-col">
            {dictionary.education.items.map((item, i) => (
              <li key={i} className="group duration-150 transition-all">
                <Link
                  href={item.href}
                  target="_blank"
                  className="w-full grid grid-cols-[7rem_1fr] sm:grid-cols-[2fr_6fr]"
                >
                  <div className="shadow-bottom dark:shadow-neutral-900 shadow-gray-200">
                    <div className="shadow-top dark:shadow-neutral-900 shadow-gray-200">
                      <div className="group-hover:bg-neutral-200/40 dark:group-hover:bg-neutral-800/40 transition-all duration-150">
                        <div className="dark:text-neutral-500 text-neutral-500 font-mono flex flex-col py-4 px-4 pl-8">
                          <div>
                            <span>{item.time_span.start}</span> -
                          </div>
                          <span>{item.time_span.end}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shadow-top dark:shadow-neutral-900 shadow-gray-200 h-full group-hover:bg-neutral-200/40 dark:group-hover:bg-neutral-800/40 transition-all duration-150">
                    <div className="shadow-bottom dark:shadow-gray-900 shadow-gray-200 h-full">
                      <article className="flex flex-col py-4 sm:px-8 px-4 h-full">
                        <div className="w-max flex items-center duration-150 transition-all group dark:text-neutral-50 text-neutral-900">
                          <h4 className="font-semibold">{item.title}</h4>
                          <ArrowUpRight className="w-4 h-4 group-hover:scale-110 duration-150 transition-all" />
                        </div>
                        <p>{item.description}</p>
                      </article>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
