import { ClockLocal } from "@/components/feature/clock-local";
import { getDictionary } from "@/utils/dictionaries";

import { DateTime } from "luxon";
import { TIME_ZONE } from "@/utils/consts";
import { React } from "@/components/icons/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { TimeRange } from "@/components/feature/time-range/time-range.component";
import Image from "next/image";

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
          <h1 className="text-neutral-50 font-semibold text-lg">
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
        <h2 className="dark:text-neutral-50 font-semibold">
          {dictionary.education.title}
        </h2>
        <ul className="flex flex-col gap-8">
          {dictionary.education.items.map((item, i) => (
            <li key={i} className="w-full grid sm:grid-cols-[1fr_4fr]">
              <div className="text-neutral-500">
                <span>{item.time_span.start}</span> -{" "}
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
        <h2 className="dark:text-neutral-50 font-semibold">
          {dictionary.projects.title}
        </h2>
        <ul className="flex flex-col gap-8">
          {dictionary.projects.items.map((project, i) => (
            <li key={i} className="grid sm:grid-cols-[1fr_4fr]">
              <p>{project.date}</p>
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
                <ul className="flex flex-wrap gap-1">
                  {project.stack.length > 0 &&
                    project.stack.map((technology) => (
                      <li className="px-2 text-sm rounded-full border border-neutral-600">
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
        <h2 className="dark:text-neutral-50 font-semibold">
          {dictionary.localization.title}
        </h2>
        <section className="flex justify-between">
          <div className=" w-full flex flex-col">
            <div className="flex gap-2 items-center dark:text-neutral-50">
              <h3 className="">{dictionary.localization.time_zone}</h3>-{" "}
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
            <TimeRange
              your_time_zone_text={dictionary.localization.your_time_zone}
            />
          </div>
        </section>
      </section>
      <section className="w-full flex flex-col gap-4">
        <h2 className="dark:text-neutral-50 font-semibold">
          {dictionary.contact.title}
        </h2>
        <ul className="flex flex-col gap-8">
          {dictionary.contact.links.map((contact, i) => (
            <li key={i}>
              <Link
                key={i}
                href={contact.href}
                className="grid sm:grid-cols-[1fr_4fr] justify-start w-full no-underline"
              >
                {contact.title}:
                <span className="flex group items-center justify-start transition-all duration-150 hover:underline dark:text-neutral-50">
                  {contact.at}
                  <ArrowUpRight className="w-4 h-4 group-hover:scale-110 duration-150 transition-all" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
