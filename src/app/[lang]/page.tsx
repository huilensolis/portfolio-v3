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
      <div className="grid grid-cols-2 relative w-full">
        <div className="w-full py-5 shadow-bottom-left dark:shadow-neutral-900 shadow-gray-200"></div>
        <div className="w-full py-5 shadow-bottom-right dark:shadow-neutral-900 shadow-gray-200"></div>
        <div className="absolute top-0 right-full w-10 py-5 shadow-bottom dark:shadow-neutral-900 shadow-gray-200"></div>
        <div className="absolute top-0 left-full w-10 py-5 shadow-bottom dark:shadow-neutral-900 shadow-gray-200"></div>
      </div>
      <div className="shadow-left dark:shadow-neutral-900 shadow-gray-200">
        <div className="shadow-right dark:shadow-neutral-900 shadow-gray-200">
          <div className="flex flex-col">
            <section className="flex flex-col gap-4 px-8 py-16 shadow-bottom dark:shadow-gray-900 shadow-gray-200">
              <div>
                <h1 className="dark:text-neutral-50 text-neutral-900 text-2xl">
                  Huilén Solís 👋
                </h1>
                <span>Full stack developer</span>
              </div>
              {dictionary.biography.map((paragraph, i) => (
                <p key={i} className="">
                  {paragraph}
                </p>
              ))}
            </section>
            <div className="w-full grid grid-cols-[2fr_6fr]">
              <div className="py-8"></div>
              <div className="shadow-left dark:shadow-neutral-900 shadow-gray-200"></div>
            </div>
            <section className="flex flex-col shadow-bottom dark:shadow-neutral-900 shadow-gray-200">
              <div className="shadow-top dark:shadow-gray-900 shadow-gray-200 grid sm:grid-cols-[2fr_6fr]">
                <h2 className="dark:text-neutral-50 text-neutral-900 text-2xl w-full text-start pl-8 py-16">
                  {dictionary.education.title}
                </h2>
                <div className="hidden sm:block shadow-left dark:shadow-gray-900 shadow-gray-200"></div>
              </div>
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
            <div className="w-full grid grid-cols-[2fr_6fr]">
              <div className="py-8"></div>
              <div className="shadow-left dark:shadow-neutral-900 shadow-gray-200"></div>
            </div>
            <section className="flex flex-col shadow-bottom dark:shadow-neutral-900 shadow-gray-200">
              <div className="shadow-top dark:shadow-gray-900 shadow-gray-200">
                <div className="grid sm:grid-cols-[2fr_6fr]">
                  <h2 className="dark:text-neutral-50 text-neutral-900 text-2xl pl-8 py-16">
                    {dictionary.projects.title}
                  </h2>
                  <div className="hidden sm:block shadow-left dark:shadow-neutral-900 shadow-gray-200 py-8"></div>
                </div>
                <ul className="flex flex-col">
                  {dictionary.projects.items.map((project, i) => (
                    <li key={i} className="">
                      <div className="shadow-top dark:shadow-sky-950 shadow-sky-200">
                        <div className="shadow-bottom dark:shadow-gray-900 shadow-gray-200">
                          <div className="grid sm:grid-cols-[2fr_6fr]">
                            <div className="pl-8 py-8 shadow-right dark:shadow-neutral-900 shadow-gray-200">
                              <p className="font-mono dark:text-neutral-500 text-neutral-500">
                                {project.date}
                              </p>
                            </div>
                            <article className="flex flex-col">
                              <div>
                                {project.images && project.images[0] && (
                                  <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-auto"
                                  />
                                )}
                              </div>
                              <div className="grid grid-cols-[3fr_1fr_1fr] w-full">
                                <div className="py-4 shadow-right dark:shadow-gray-900 shadow-gray-200"></div>
                                <div className="py-4 shadow-right dark:shadow-neutral-900 shadow-gray-200"></div>
                                <div className="py-4 shadow-right dark:shadow-gray-900 shadow-gray-200"></div>
                              </div>
                              <div className="shadow-top dark:shadow-neutral-900 shadow-gray-200">
                                <div className="shadow-bottom dark:shadow-neutral-900 shadow-gray-200">
                                  <header className="grid grid-cols-[3fr_1fr_1fr] w-full">
                                    <Link
                                      href={project.deploy}
                                      target="_blank"
                                      className="w-full dark:text-neutral-50 text-neutral-900"
                                    >
                                      <h3 className="shadow-right dark:shadow-neutral-900 shadow-gray-200 py-4 pl-8">
                                        {project.title}
                                      </h3>
                                    </Link>
                                    <Link
                                      href={project.repository}
                                      target="_blank"
                                      className="w-full dark:text-neutral-50 text-neutral-900 hover:bg-neutral-200/40 dark:hover:bg-neutral-800/40 group duration-150 transition-all flex items-center justify-center no-underline py-4 shadow-right dark:shadow-neutral-900 shadow-gray-200"
                                    >
                                      code
                                      <ArrowUpRight className="w-4 h-4 group-hover:scale-110 duration-150 transition-all" />
                                    </Link>
                                    <Link
                                      href={project.deploy}
                                      target="_blank"
                                      className="w-full dark:text-neutral-50 hover:bg-neutral-200/40 dark:hover:bg-neutral-800/40 group duration-150 transition-all flex items-center justify-center no-underline py-4 shadow-right dark:shadow-green-950 shadow-green-200"
                                    >
                                      live
                                      <ArrowUpRight className="w-4 h-4 group-hover:scale-110 duration-150 transition-all" />
                                    </Link>
                                  </header>
                                </div>
                              </div>
                              <section className="flex flex-col gap-2 px-8 py-8">
                                {project.description.map((paragraph, i) => (
                                  <p className="text-pretty" key={i}>
                                    {paragraph}
                                  </p>
                                ))}
                              </section>
                              <div className="shadow-top dark:shadow-neutral-900 shadow-gray-200">
                                <div className="shadow-bottom dark:shadow-neutral-900 shadow-gray-200">
                                  <ul className="grid grid-cols-2 sm:grid-cols-4">
                                    {project.stack.length > 0 &&
                                      project.stack.map((technology, i) => (
                                        <li
                                          className="text-sm shadow-right dark:shadow-neutral-900 shadow-gray-200"
                                          key={i}
                                        >
                                          <div className="py-4 px-4">
                                            {technology}
                                          </div>
                                        </li>
                                      ))}
                                  </ul>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                      <div className="w-full grid grid-cols-[2fr_6fr]">
                        <div className="py-8"></div>
                        <div className="shadow-left dark:shadow-gray-900 shadow-gray-200"></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            {/* <section className="w-full flex flex-col gap-4"> */}
            {/*   <h2 className="dark:text-neutral-50 font-semibold text-xl"> */}
            {/*     {dictionary.localization.title} */}
            {/*   </h2> */}
            {/*   <section className="flex justify-between"> */}
            {/*     <div className="w-full flex flex-col font-mono"> */}
            {/*       <div className="flex gap-2 items-center dark:text-neutral-50"> */}
            {/*         <h3>{dictionary.localization.time_zone}</h3> -{""} */}
            {/*         <h3>GTM-3</h3> */}
            {/*       </div> */}
            {/*       <p> */}
            {/*         {date.setLocale(lang).toLocaleString({ */}
            {/*           month: "short", */}
            {/*           weekday: "short", */}
            {/*           day: "2-digit", */}
            {/*         })} */}
            {/*       </p> */}
            {/*       <ClockLocal /> */}
            {/*       <TimeRange /> */}
            {/*     </div> */}
            {/*   </section> */}
            {/* </section> */}
            <section className="w-full flex flex-col shadow-bottom dark:shadow-neutral-900 shadow-gray-200">
              <div className="grid sm:grid-cols-[2fr_6fr]">
                <h2
                  className="dark:text-neutral-50 text-neutral-900 text-2xl pl-8 py-16"
                  id="contact"
                >
                  {dictionary.contact.title}
                </h2>
                <div className="hidden sm:block shadow-left dark:shadow-indigo-950 shadow-indigo-200"></div>
              </div>
              <div className="shadow-top dark:shadow-neutral-900 shadow-gray-200">
                <div className="shadow-bottom dark:shadow-neutral-900 shadow-gray-200">
                  <ul className="flex flex-col sm:grid sm:grid-cols-8">
                    <Link
                      href={dictionary.contact.linkedin.href}
                      target="_blank"
                      className="col-span-4 group hover:bg-neutral-200/40 dark:hover:bg-neutral-800/40 duration-150 transition-all"
                    >
                      <div className="shadow-bottom dark:shadow-neutral-900 shadow-gray-200 h-full">
                        <div className="shadow-right dark:shadow-neutral-900 shadow-gray-200 h-full">
                          <div className="flex flex-col gap-32 pb-8 pl-8 p-4 h-full">
                            <header className="flex justify-end w-full">
                              <ArrowUpRight className="h-4 w-4 group-hover:scale-110 duration-150 transition-all" />
                            </header>
                            <div className="flex items-end h-full">
                              <div className="flex items-start gap-2">
                                <svg
                                  className="dark:fill-neutral-300 fill-neutral-600 h-4 w-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                                <span className="font-medium">LinkedIn</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <article className="col-span-4 w-full h-full group hover:bg-neutral-200/40 dark:hover:bg-neutral-800/40 duration-150 transition-all">
                      <div className="shadow-bottom dark:shadow-neutral-900 shadow-gray-200 h-full">
                        <div className="shadow-right dark:shadow-neutral-900 shadow-gray-200 h-full">
                          <div className="p-4 relative flex justify-end items-start h-full sm:pb-0 pb-32">
                            <Link
                              href={dictionary.contact.gmail.href}
                              target="_blank"
                              className="flex items-end h-full w-max absolute bottom-8 left-8"
                            >
                              <div className="flex items-center gap-2">
                                <svg
                                  className="w-4 h-4 dark:fill-neutral-300 fill-neutral-600"
                                  role="img"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <title>Gmail</title>
                                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                                </svg>
                                <span className="font-medium">
                                  {dictionary.contact.gmail.at}
                                </span>
                              </div>
                            </Link>
                            <CopyToClipboardBtn
                              value={dictionary.contact.gmail.at}
                              className="dark:hover:bg-neutral-800 hover:bg-neutral-200"
                            />
                          </div>
                        </div>
                      </div>
                    </article>
                    <Link
                      href={dictionary.contact.twitter.href}
                      target="_blank"
                      className="col-span-3 group hover:bg-neutral-200/40 dark:hover:bg-neutral-800/40 duration-150 transition-all"
                    >
                      <div className="shadow-bottom dark:shadow-neutral-900 shadow-gray-200 h-full">
                        <div className="shadow-right dark:shadow-neutral-900 shadow-gray-200 h-full">
                          <div className="flex flex-col gap-32 pb-8 pl-8 p-4 h-full">
                            <header className="w-full flex justify-end">
                              <ArrowUpRight className="h-4 w-4 group-hover:scale-110 duration-150 transition-all" />
                            </header>
                            <div className="flex items-end h-full">
                              <div className="flex items-center gap-2">
                                <svg
                                  className="w-4 h-4 dark:fill-neutral-300 fill-neutral-600"
                                  role="img"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <title>X</title>
                                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                </svg>
                                <span className="font-medium">
                                  {dictionary.contact.twitter.at}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={dictionary.contact.github.href}
                      target="_blank"
                      className="col-span-5 group hover:bg-neutral-200/40 dark:hover:bg-neutral-800/40 duration-150 transition-all"
                    >
                      <div className="shadow-bottom dark:shadow-neutral-900 shadow-gray-200 h-full">
                        <div className="shadow-right dark:shadow-neutral-900 shadow-gray-200 h-full">
                          <div className="flex flex-col gap-32 pb-8 pl-8 p-4">
                            <header className="flex justify-end w-full">
                              <ArrowUpRight className="h-4 w-4 group-hover:scale-110 duration-150 transition-all" />
                            </header>
                            <div className="flex items-end h-full">
                              <div className="flex items-center gap-2">
                                <svg
                                  className="w-4 h-4 dark:fill-neutral-300 fill-neutral-600"
                                  role="img"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <title>GitHub</title>
                                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                                <span className="font-medium">
                                  {dictionary.contact.github.at}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ul>
                </div>
              </div>
            </section>
            {/* <div className="w-full grid grid-cols-[2fr_6fr]"> */}
            {/*   <div className="py-8"></div> */}
            {/*   <div className="shadow-left shadow-gray-900"></div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 relative w-full">
        <div className="absolute w-full py-5 shadow-left dark:shadow-neutral-900 shadow-gray-200"></div>
        <div className="absolute w-full py-5 shadow-right dark:shadow-neutral-900 shadow-gray-200"></div>
      </div>
    </div>
  );
}
