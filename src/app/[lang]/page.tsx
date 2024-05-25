import { ClockLocal } from "@/components/feature/clock-local";
import { getDictionary } from "@/utils/dictionaries";

import { DateTime } from "luxon";
import { TIME_ZONE } from "@/utils/consts";
import { React } from "@/components/icons/react";
import { ArrowUpRight, Copy, MailPlus } from "lucide-react";
import Link from "next/link";
import { TimeRange } from "@/components/feature/time-range/time-range.component";
import Image from "next/image";
import { Button } from "@/components/ui/button/button.component";
import { CopyToClipboardBtn } from "@/components/feature/copy-to-clipboard";

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
    <div className="flex flex-col gap-16 dark:text-gray-300 text-base">
      <section className="flex flex-col gap-4">
        <div>
          <h1 className="text-neutral-50 font-semibold text-2xl">
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
      <section className="flex flex-col gap-4">
        <h2 className="dark:text-neutral-50 font-semibold text-xl">
          {dictionary.education.title}
        </h2>
        <ul className="flex flex-col gap-8">
          {dictionary.education.items.map((item, i) => (
            <li key={i} className="w-full grid sm:grid-cols-[1fr_4fr] gap-4">
              <div className="text-neutral-500 font-mono flex flex-col">
                <div>
                  <span>{item.time_span.start}</span> -
                </div>
                <span>{item.time_span.end}</span>
              </div>
              <article className="flex flex-col">
                <Link
                  href={item.href}
                  target="_blank"
                  className="w-max flex items-center duration-150 transition-all group text-neutral-50"
                >
                  <h4 className="dark:text-neutral-50 font-semibold">
                    {item.title}
                  </h4>
                  <ArrowUpRight className="w-4 h-4 group-hover:scale-110 duration-150 transition-all" />
                </Link>
                <p>{item.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="dark:text-neutral-50 font-semibold text-xl">
          {dictionary.projects.title}
        </h2>
        <ul className="flex flex-col gap-8">
          {dictionary.projects.items.map((project, i) => (
            <li key={i} className="grid sm:grid-cols-[1fr_4fr] gap-4">
              <p className="font-mono">{project.date}</p>
              <article className="flex flex-col gap-4">
                {project.images && project.images[0] && (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-sm"
                  />
                )}
                <header className="flex justify-between items-center w-full">
                  <Link
                    href={project.deploy}
                    target="_blank"
                    className="w-max dark:text-neutral-50"
                  >
                    <h3 className="font-semibold">{project.title}</h3>
                  </Link>
                  <div className="flex gap-2 text-neutral-50">
                    <Link
                      href={project.repository}
                      target="_blank"
                      className="w-max group duration-150 transition-all flex items-center justify-center no-underline"
                    >
                      code
                      <ArrowUpRight className="w-4 h-4 group-hover:scale-110 duration-150 transition-all" />
                    </Link>
                    <Link
                      href={project.deploy}
                      target="_blank"
                      className="w-max group duration-150 transition-all flex items-center justify-center no-underline"
                    >
                      live
                      <ArrowUpRight className="w-4 h-4 group-hover:scale-110 duration-150 transition-all" />
                    </Link>
                  </div>
                </header>
                <section className="flex flex-col gap-2">
                  {project.description.map((paragraph) => (
                    <p className="text-pretty">{paragraph}</p>
                  ))}
                </section>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.length > 0 &&
                    project.stack.map((technology) => (
                      <li className="px-2 bg-neutral-800 text-sm rounded-full border border-neutral-700">
                        {technology}
                      </li>
                    ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <section className="w-full flex flex-col gap-4">
        <h2 className="dark:text-neutral-50 font-semibold text-xl">
          {dictionary.localization.title}
        </h2>
        <section className="flex justify-between">
          <div className="w-full flex flex-col font-mono">
            <div className="flex gap-2 items-center dark:text-neutral-50">
              <h3>{dictionary.localization.time_zone}</h3> -{""}
              <h3>GTM-3</h3>
            </div>
            <p>
              {date.setLocale(lang).toLocaleString({
                month: "short",
                weekday: "short",
                day: "2-digit",
              })}
            </p>
            <ClockLocal />
            <TimeRange />
          </div>
        </section>
      </section>
      <section className="w-full flex flex-col gap-4">
        <h2 className="dark:text-neutral-50 font-semibold text-xl">
          {dictionary.contact.title}
        </h2>
        <ul className="grid grid-cols-8 gap-4">
          <Link
            href={dictionary.contact.linkedin.href}
            target="_blank"
            className="flex justify-between items-center h-full col-span-3 w-full p-4 bg-neutral-800 rounded-sm border border-neutral-700 group hover:brightness-110 duration-150 transition-all"
          >
            <div className="flex gap-2">
              <svg
                className="w-6 h-6 fill-neutral-300"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="font-semibold">
                {dictionary.contact.linkedin.at}
              </span>
            </div>
            <ArrowUpRight className="group-hover:scale-110 duration-150 transition-all" />
          </Link>
          <article className="relative flex justify-end items-center h-full col-span-5 w-full p-4 bg-neutral-800 rounded-sm border border-neutral-700 group hover:brightness-110 duration-150 transition-all">
            <Link
              href={dictionary.contact.gmail.href}
              target="_blank"
              className="flex items-center h-full w-max absolute top-0 left-0 p-4"
            >
              <div className="flex gap-2">
                <svg
                  className="w-6 h-6 fill-neutral-300"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Gmail</title>
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
                <span className="font-semibold">
                  {dictionary.contact.gmail.at}
                </span>
              </div>
            </Link>
            <CopyToClipboardBtn
              value={dictionary.contact.gmail.at}
              className="hover:bg-neutral-700"
            />
          </article>
          <Link
            href={dictionary.contact.twitter.href}
            target="_blank"
            className="flex justify-between items-center h-full col-span-5 w-full p-4 bg-neutral-800 rounded-sm border border-neutral-700 group hover:brightness-110 duration-150 transition-all"
          >
            <div className="flex gap-2">
              <svg
                className="w-6 h-6 fill-neutral-300"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
              <span className="font-semibold">
                {dictionary.contact.twitter.at}
              </span>
            </div>
            <ArrowUpRight className="group-hover:scale-110 duration-150 transition-all" />
          </Link>
          <Link
            href={dictionary.contact.github.href}
            target="_blank"
            className="flex justify-between items-center h-full col-span-3 w-full p-4 bg-neutral-800 rounded-sm border border-neutral-700 group hover:brightness-110 duration-150 transition-all"
          >
            <div className="flex gap-2">
              <svg
                className="w-6 h-6 fill-neutral-300"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span className="font-semibold">
                {dictionary.contact.github.at}
              </span>
            </div>
            <ArrowUpRight className="group-hover:scale-110 duration-150 transition-all" />
          </Link>
        </ul>
      </section>
    </div>
  );
}
