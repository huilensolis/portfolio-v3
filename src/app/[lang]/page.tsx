import { ClockLocal } from "@/components/feature/clock-local";
import { Box } from "@/components/ui/box/box.component";
import { Dot } from "@/components/ui/dot";
import { DotWithChildren } from "@/components/ui/dot-with-children";
import { getDictionary } from "@/utils/dictionaries";

import { ReactComponent as CordobaShape } from "../../../public/cordoba-province-shape.svg";
import { DateTime } from "luxon";
import { SingleDot } from "@/components/ui/single-dot";
import { TIME_ZONE } from "@/utils/consts";
import { React } from "@/components/icons/react";
import { Nextjs } from "@/components/icons/nextjs";
import { Typescript } from "@/components/icons/typescript";
import { Javascript } from "@/components/icons/javascript";
import { Tailwind } from "@/components/icons/tailwind";
import { CSS } from "@/components/icons/css";
import { Nodejs } from "@/components/icons/nodejs";
import { Express } from "@/components/icons/express";
import { PostgreSQL } from "@/components/icons/postgresql";
import { Drizzle } from "@/components/icons/drizzle";
import { Sequelize } from "@/components/icons/sequelize";
import { Bun } from "@/components/icons/bun";
import { Elysia } from "@/components/icons/elysia";
import { Git } from "@/components/icons/git";
import { Buntest } from "@/components/icons/buntest";
import { FolderGit, Globe } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-static";

const icons = {
  React,
  Nextjs,
  Typescript,
  Javascript,
  Tailwind,
  CSS,
  Nodejs,
  Express,
  PostgreSQL,
  Drizzle,
  Sequelize,
  Bun,
  Buntest,
  Elysia,
  Git,
};

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: "en" | "es" };
}) {
  const dictionary = await getDictionary(lang);

  const date = DateTime.now();
  date.setZone(TIME_ZONE);
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold text-orange-600">Huilén Solís</h1>
        <p className="text-neutral-500 text-pretty xl:w-8/12">
          {dictionary.biography}
        </p>
      </section>
      <section className="xl:grid flex flex-col gap-6 grid-cols-3 grid-rows-2 text-sm">
        <Box className="col-span-1 row-span-2 flex flex-col gap-4">
          <h1 className="text-neutral-400 text-base">
            {dictionary.education.title}
          </h1>
          <ul className="flex flex-col gap-2">
            {dictionary.education.items.map((item, i) => (
              <li key={i}>
                <article className="flex gap-2">
                  <Dot />
                  <section>
                    <h1 className="font-bold text-base">{item.title}</h1>
                    <span className="text-neutral-400">{item.description}</span>
                  </section>
                </article>
              </li>
            ))}
          </ul>
        </Box>
        <Box className="col-span-1 row-span-4 flex flex-col gap-4">
          <h1 className="text-neutral-400 text-base">
            {dictionary.projects.title}
          </h1>
          <ul className="flex flex-col gap-4">
            {dictionary.projects.items.map((project, i) => (
              <li key={i}>
                <article className="flex gap-2">
                  <div className="pt-1">
                    <DotWithChildren>
                      <span>{i + 1}</span>
                    </DotWithChildren>
                  </div>
                  <section className="flex flex-col gap-2 flex-1">
                    <section>
                      <div className="flex items-center justify-between">
                        <Link
                          href={project.deploy}
                          target="_blank"
                          className="hover:text-orange-600 hover:scale-105 duration-150 transition-all"
                        >
                          <h1 className="font-bold text-base underline decoration-orange-600">
                            {project.title}
                          </h1>
                        </Link>
                        <div className="flex gap-2">
                          <Link
                            href={project.repository}
                            target="_blank"
                            className="hover:text-orange-600 hover:scale-105 duration-150 transition-all"
                          >
                            <FolderGit className="h-5 w-5" />
                          </Link>
                          <Link
                            href={project.deploy}
                            target="_blank"
                            className="hover:text-orange-600 hover:scale-105 duration-150 transition-all"
                          >
                            <Globe className="h-5 w-5" />
                          </Link>
                        </div>
                      </div>
                    </section>
                    <div className="flex flex-col gap-1">
                      <span className="text-neutral-400 text-pretty">
                        {project.description}
                      </span>
                      <ul className="flex flex-wrap gap-1">
                        {project.stack.length > 0 &&
                          project.stack.map((tech, i) => {
                            return (
                              <li key={i}>
                                <article className="flex items-center justify-center gap-2 py-1 px-2 rounded-full border border-neutral-800 text-neutral-400">
                                  <span>{tech}</span>
                                </article>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </section>
                </article>
              </li>
            ))}
          </ul>
        </Box>
        <Box className="col-span-1 row-span-2 flex flex-col justify-between gap-4">
          <section className="flex flex-col gap-2">
            <h1 className="text-neutral-400 text-base">
              {dictionary.tech_stack.title}
            </h1>
            <h2 className="text-base">{dictionary.tech_stack.role}</h2>
          </section>
          <ul className="flex flex-wrap gap-2">
            {dictionary.tech_stack.items.map((tech, i) => {
              const Icon = icons[tech as keyof typeof icons];
              return (
                <li key={i}>
                  <article className="flex items-center justify-center gap-2 py-1.5 px-3 rounded-full border border-neutral-800 text-neutral-400">
                    {Icon && <Icon className="fill-neutral-400 w-4" />}
                    <span>{tech}</span>
                  </article>
                </li>
              );
            })}
          </ul>
        </Box>
        <Box className="col-span-1 row-span-2 flex flex-col gap-4">
          <h1 className="text-neutral-400 text-base">
            {dictionary.misc.title}
          </h1>
          <ul className="flex flex-col gap-2">
            {dictionary.misc.items.map((miscItem, i) => (
              <li key={i}>{miscItem}</li>
            ))}
          </ul>
        </Box>
        <Box className="col-span-1 row-span-2 flex gap-4">
          <h1 className="text-neutral-400 text-base">
            {dictionary.localization.title}
          </h1>
          <section className="flex gap-2 justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 font-bold">
                <h2 className="text-base">
                  {dictionary.localization.time_zone}
                </h2>
                <SingleDot />
                <span>GTM-3</span>
              </div>
              <span>
                {date.setLocale(lang).toLocaleString({
                  month: "short",
                  weekday: "short",
                  day: "2-digit",
                })}
              </span>
              <ClockLocal />
            </div>
            <div className="relative">
              <CordobaShape className="w-24 fill-transparent stroke-[8] [stroke-linejoin:_round;] stroke-neutral-700 [stroke-dasharray:_1,_0]" />
              <CordobaShape className="absolute top-0 left-0 w-24 fill-transparent stroke-[8] [stroke-linejoin:_round;] stroke-orange-600 [stroke-dasharray:_300,_1000] [stroke-dashoffset:_10000] animate-dash" />
            </div>
          </section>
        </Box>
      </section>
    </div>
  );
}
