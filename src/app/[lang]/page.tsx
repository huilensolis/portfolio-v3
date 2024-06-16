import { Metadata, ResolvingMetadata } from "next";
import { ArrowUpRight, Folder, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { React } from "@/components/icons/react";
import { getDictionary } from "@/utils/dictionaries";
import { Nextjs } from "@/components/icons/nextjs";
import { Typescript } from "@/components/icons/typescript";
import { TailwindCSS } from "@/components/icons/tailwind";
import { Express } from "@/components/icons/express";
import { PostgreSQL } from "@/components/icons/postgresql";
import { Drizzle } from "@/components/icons/drizzle";
import { Bun } from "@/components/icons/bun";
import { Git } from "@/components/icons/git";
import { Turborepo } from "@/components/icons/turborepo";
import { Nodejs } from "@/components/icons/nodejs";
import { Playwright } from "@/components/icons/playwright";
import { UpWork } from "@/components/icons/upwork";

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

  const TECHNOLOGIES_ICONS = {
    react: React,
    nextjs: Nextjs,
    typescript: Typescript,
    tailwindcss: TailwindCSS,
    nodejs: Nodejs,
    express: Express,
    postgresql: PostgreSQL,
    drizzle: Drizzle,
    bun: Bun,
    git: Git,
    turborepo: Turborepo,
    playwright: Playwright,
  } as const;

  return (
    <div className="flex flex-col">
      <main className="w-full h-full border-y border-l dark:border-neutral-900 border-gray-200 grid grid-cols-10 grid-rows-7 relative">
        {Array(10 * 7)
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              className={`h-24 w-full border-r dark:border-neutral-900 border-gray-200`}
            ></div>
          ))}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
          <h2 className="max-w-[60rem] text-4xl sm:text-6xl text-neutral-800 dark:text-neutral-50 font-medium w-full text-center text-balance">
            Frontend engineer building
            <strong className="font-semibold text-red-500 dark:text-red-400">
              {" "}
              reactive
            </strong>
            ,{" "}
            <strong className="font-semibold text-amber-500 dark:text-amber-400">
              aesthetic
            </strong>{" "}
            and{" "}
            <strong className="font-semibold text-blue-500 dark:text-blue-400">
              accessible
            </strong>{" "}
            UIs with Next js
          </h2>
        </div>
      </main>
      <div className="w-full py-5 border-x border-gray-200 dark:border-neutral-900"></div>
      <section
        id="education"
        className="flex flex-col shadow-bottom dark:shadow-neutral-900 shadow-gray-200"
      >
        <ul className="flex flex-col border-x border-gray-200 dark:border-neutral-900 ">
          {dictionary.education.items.map((item, i) => (
            <li key={i} className="group duration-150 transition-all">
              <Link
                href={item.href}
                target="_blank"
                className="w-full grid grid-cols-[120px_1fr] sm:grid-cols-10"
              >
                <div className="shadow-bottom dark:shadow-neutral-900 shadow-gray-200 sm:col-span-1">
                  <div className="shadow-top dark:shadow-neutral-900 shadow-gray-200">
                    <div className="group-hover:bg-neutral-200/40 dark:group-hover:bg-neutral-800/40 transition-all duration-150">
                      <div className="dark:text-neutral-500 text-neutral-500 font-mono flex flex-col py-4 px-4">
                        <span>{item.time_span.start}</span> -
                        <span>{item.time_span.end}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-8 w-full h-full shadow-top dark:shadow-neutral-900 shadow-gray-200 group-hover:bg-neutral-200/40 dark:group-hover:bg-neutral-800/40 transition-all duration-150">
                  <div className="shadow-bottom dark:shadow-gray-900 shadow-gray-200 h-full">
                    <article className="flex flex-col justify-center py-4 sm:px-8 px-4 h-full">
                      <div className="flex items-center duration-150 transition-all group dark:text-neutral-50 text-neutral-900">
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
      <div className="w-full py-5 border-x border-gray-200 dark:border-neutral-900"></div>
      <section
        id="projects"
        className="w-full flex flex-col sm:grid sm:grid-cols-10 border-l border-gray-200 dark:border-neutral-900"
      >
        {dictionary.projects.items.map((project, i) => (
          <article
            key={i}
            className="col-span-5 p-4 border-r border-y border-gray-200 dark:border-neutral-900 flex flex-col gap-4"
          >
            <h1 className="font-medium text-2xl text-neutral-900 dark:text-neutral-100">
              {project.title}
            </h1>
            {project.images[0] && (
              <div className="relative w-full h-auto">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-auto rounded-sm"
                  height={400}
                  width={500}
                />
              </div>
            )}
            <header className="flex justify-end">
              <Link
                href={project.repository}
                target="_blank"
                className="group px-5 py-1.5 font-medium flex items-center gap-2 hover:bg-neutral-900 transition-all duration-150"
              >
                Repository
                <div className="flex">
                  <Folder className="w-4 h-4 group-hover:scale-110 transition-all duration-150" />
                  <ArrowUpRight className="w-4 h-4 group-hover:scale-110 transition-all duration-150" />
                </div>
              </Link>
              <Link
                href={project.deploy}
                target="_blank"
                className="group px-5 py-1.5 font-medium flex items-center gap-2 hover:bg-neutral-900 transition-all duration-150"
              >
                Live
                <div className="flex">
                  <Globe className="w-4 h-4 group-hover:scale-110 transition-all duration-150" />
                  <ArrowUpRight className="w-4 h-4 group-hover:scale-110 transition-all duration-150" />
                </div>
              </Link>
            </header>
            <section className="flex flex-col justify-between h-full gap-4 text-lg">
              <div className="flex flex-col gap-2">
                {project.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <p>
                {project.stack.map((tech, i, stackList) => {
                  const randomNumber = Math.random() * 10;
                  return (
                    <span
                      key={i}
                      className={`${randomNumber > 8 ? "text-violet-500 dark:text-violet-300" : randomNumber > 6 ? "text-amber-500 dark:text-amber-300" : randomNumber > 4 ? "text-red-500 dark:text-red-400" : "text-blue-500 dark:text-blue-400"}`}
                    >
                      {tech}
                      {i + 1 === stackList.length ? "." : ", "}
                    </span>
                  );
                })}
              </p>
            </section>
          </article>
        ))}
      </section>
      <div className="w-full py-5 border-x border-gray-200 dark:border-neutral-900"></div>
      <section
        id="stack"
        className="grid grid-cols-2 sm:grid-cols-9 border-l border-gray-200 dark:border-neutral-900 bg-gradient-to-t from-gray-200/20 dark:from-neutral-900/20"
      >
        {dictionary.tech_stack.items.map((tech, i) => {
          const Icon =
            TECHNOLOGIES_ICONS[
              tech
                .toLowerCase()
                .split(" ")
                .join("") as keyof typeof TECHNOLOGIES_ICONS
            ];

          return (
            <article
              key={i}
              className="sm:col-span-3 flex flex-col gap-2 p-4 w-full border-y border-r border-gray-200 dark:border-neutral-900"
            >
              {tech}
              <div className="w-full h-full pb-7 pt-5 flex justify-center">
                {Icon && <Icon className="h-10 w-10" />}
              </div>
            </article>
          );
        })}
      </section>
      <div className="w-full py-5 border-x border-gray-200 dark:border-neutral-900"></div>
      <section
        id="contact"
        className="w-full h-full border-y border-l dark:border-neutral-900 border-gray-200 grid grid-cols-10 grid-rows-7 relative"
      >
        {Array(10 * 7)
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              className={`h-24 w-full border-r dark:border-neutral-900 border-gray-200`}
            ></div>
          ))}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
          <article className="flex flex-col gap-8">
            <h2 className="text-6xl text-neutral-900 dark:text-neutral-50 font-semibold w-full text-center text-balance">
              Let&apos;s get in touch!
            </h2>
            <section className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap justify-center sm:grid sm:grid-cols-2 gap-4 sm:gap-y-8">
                <Link
                  href={dictionary.contact.upwork.href}
                  target="_blank"
                  className="font-medium group flex items-center gap-2 px-5 py-2 text-neutral-50 bg-blue-600 dark:bg-amber-600 hover:brightness-110 transition-all duration-150 rounded-sm"
                >
                  Contact on upwork
                  <div className="flex">
                    <UpWork className="w-4 h-4 fill-neutral-50 group-hover:scale-110 transition-all duration150" />
                    <ArrowUpRight className="w-4 h-4 group-hover:scale-110 transition-all duration-150" />
                  </div>
                </Link>
                <Link
                  href={dictionary.contact.linkedin.href}
                  target="_blank"
                  className="font-medium group flex items-center gap-2 px-5 py-2 text-neutral-50 dark:text-neutral-950 bg-neutral-800 dark:bg-neutral-300 hover:brightness-110 transition-all duration-150 rounded-sm"
                >
                  Contact on Linkedin
                  <ArrowUpRight className="w-4 h-4 group-hover:scale-110 transition-all duration-150" />
                </Link>
                <div className="col-span-2 flex justify-center items-center gap-2">
                  <Link
                    href={dictionary.contact.twitter}
                    target="_blank"
                    className="font-medium flex gap-2 py-1.5 px-3 group items-center"
                  >
                    Twitter
                    <ArrowUpRight className="w-4 h-4 group-hover:scale-110 transition-all duration-150" />
                  </Link>
                  <Link
                    href={dictionary.contact.github}
                    target="_blank"
                    className="font-medium flex gap-2 py-1.5 px-3 group items-center"
                  >
                    GitHub
                    <ArrowUpRight className="w-4 h-4 group-hover:scale-110 transition-all duration-150" />
                  </Link>
                </div>
              </div>
            </section>
          </article>
        </div>
      </section>
      <div className="w-full py-5 border-x border-gray-200 dark:border-neutral-900"></div>
      <div className="w-full py-16"></div>
    </div>
  );
}
