import projectList from "@/data/dictionary/projects.json";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export async function ProjectsSection() {
  return (
    <section className="flex flex-col">
      <ul className="md:grid md:grid-cols-5 flex flex-col gap-4 w-full">
        {projectList.map((project, i) => (
          <li
            key={i}
            className="bg-gray-100 dark:bg-neutral-800/60 border border-gray-200 dark:border-neutral-700/40 rounded-md"
            style={{
              gridColumn: `span ${project["grid-cols"]}`,
              gridRow: `span ${project["grid-rows"]}`,
            }}
          >
            <Link href={`/project/${project.title}`}>
              <article className="h-full w-full dark:bg-neutral-800/40 flex flex-col group">
                <header className="flex justify-between items-center gap-4 p-4 text-neutral-600 dark:text-neutral-200">
                  <h1 className="text-lg font-normal">
                    {project.title} | project
                  </h1>
                  <ArrowUpRight className="w-4 h-4 group-hover:scale-125 transition-all duration-150" />
                </header>
                <div className="w-full h-full overflow-hidden">
                  <Image
                    width={1000}
                    height={700}
                    src={project.cover_img}
                    alt={project.description}
                    className={`w-full h-full object-cover border-2 border-gray-200 dark:border-neutral-700/40 shadow-xl shadow-neutral-400 dark:shadow-gray-800 group-hover:shadow-neutral-500 dark:group-hover:shadow-gray-700 ${project["grid-cols"] === 2 ? "translate-x-8 translate-y-10 group-hover:translate-y-6 object-left-top rounded-tl-[0.270rem]" : "scale-x-90 translate-y-9 group-hover:translate-y-5 object-top rounded-t-[0.270rem]"} transition-all duration-300`}
                  />
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
