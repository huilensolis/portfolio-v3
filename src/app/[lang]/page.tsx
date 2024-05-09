import { ClockLocal } from "@/components/feature/clock-local";
import { Dot } from "@/components/ui/dot";
import { DotWithChildren } from "@/components/ui/dot-with-children";
import { getDictionary } from "@/utils/dictionaries";

import { ReactComponent as CordobaShape } from "../../../public/cordoba-province-shape.svg";
import { DateTime } from "luxon";
import { SingleDot } from "@/components/ui/single-dot";
import { TIME_ZONE } from "@/utils/consts";
import { React } from "@/components/icons/react";
import { ArrowUpRight, FolderGit, Globe } from "lucide-react";
import Link from "next/link";
import { TimeRange } from "@/components/feature/time-range/time-range.component";

export const dynamic = "force-static";

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: "en" | "es" };
}) {
  const dictionary = await getDictionary(lang);

  const date = DateTime.now();
  date.setZone(TIME_ZONE);
  return (
    <div className="flex flex-col prose-li:list-none prose-ul:p-0">
      <section className="flex flex-col">
        <h1>Huilén Solís 👋</h1>
        <p>
          {dictionary.biography}
          {dictionary.biography}
        </p>
      </section>
      <section className="flex flex-col">
        <div>
          <h2>{dictionary.education.title}</h2>
          <ul className="flex flex-col list-none">
            {dictionary.education.items.map((item, i) => (
              <li key={i}>
                <article className="flex flex-col">
                  <section className="flex flex-col">
                    <Link
                      href={item.href}
                      target="_blank"
                      className="flex items-center duration-150 transition-all group no-underline"
                    >
                      <h4>{item.title}</h4>
                      <ArrowUpRight className="w-5 h-5 group-hover:text-neutral-50 group-hover:scale-110 duration-150 transition-all" />
                    </Link>
                  </section>
                  <p>{item.description}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>{dictionary.projects.title}</h2>
          <ul className="flex flex-col">
            {dictionary.projects.items.map((project, i) => (
              <li key={i}>
                <article className="flex">
                  <section className="flex flex-col flex-1">
                    <section>
                      <div className="flex items-center justify-between">
                        <Link
                          href={project.deploy}
                          target="_blank"
                          className="no-underline"
                        >
                          <h3>{project.title}</h3>
                        </Link>
                        <div className="flex gap-2">
                          <Link
                            href={project.repository}
                            target="_blank"
                            className="group duration-150 transition-all hover:text-neutral-50 flex items-center justify-center no-underline"
                          >
                            code
                            <ArrowUpRight className="w-5 h-5 group-hover:text-neutral-50 group-hover:scale-110 duration-150 transition-all" />
                          </Link>
                          <Link
                            href={project.deploy}
                            target="_blank"
                            className="group duration-150 transition-all hover:text-neutral-50 flex items-center justify-center no-underline"
                          >
                            live
                            <ArrowUpRight className="w-5 h-5 group-hover:text-neutral-50 group-hover:scale-110 duration-150 transition-all" />
                          </Link>
                        </div>
                      </div>
                    </section>
                    <div className="flex flex-col">
                      <p>{project.description}</p>
                      <p>
                        {project.stack.length > 0 && project.stack.join(", ")}
                      </p>
                    </div>
                  </section>
                </article>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>{dictionary.localization.title}</h2>
          <section className="flex justify-between">
            <div className=" w-full flex flex-col">
              <div className="flex gap-2 items-center">
                <h3>{dictionary.localization.time_zone}</h3>-<h3>GTM-3</h3>
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
            <div className="relative">
              <CordobaShape className="w-24 fill-transparent stroke-[8] [stroke-linejoin:_round;] stroke-neutral-700 [stroke-dasharray:_1,_0]" />
              <CordobaShape className="absolute top-0 left-0 w-24 fill-transparent stroke-[8] [stroke-linejoin:_round;] stroke-orange-600 [stroke-dasharray:_300,_1000] [stroke-dashoffset:_10000] animate-dash" />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
