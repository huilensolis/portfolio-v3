import projectList from "@/data/dictionary/projects.json";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export async function ProjectsSection() {
  return (
    <section className="flex flex-col gap-10">
      <h3 className="text-4xl font-medium">Projects</h3>
      <ul className="md:grid md:grid-cols-5 flex flex-col gap-5 w-full">
        {projectList.map((project, i) => (
          <li
            key={i}
            className="bg-gray-100 dark:bg-cm-indigo-bg border border-gray-200 rounded-md"
            style={{
              gridColumn: `span ${project["grid-cols"]}`,
              gridRow: `span ${project["grid-rows"]}`,
            }}
          >
            <article className="h-full w-full dark:bg-neutral-800/40 flex flex-col group">
              <header className="flex justify-between items-center gap-4 p-4 text-neutral-600">
                <h1 className="text-lg font-normal">{project.title}</h1>
                <Link href={""}>
                  <ArrowUpRight className="w-4 h-4 group-hover:scale-125 transition-all duration-150" />
                </Link>
              </header>
              <div className="w-full h-full overflow-hidden">
                <Image
                  width={1000}
                  height={700}
                  src={project.cover_img}
                  alt={project.description}
                  className="w-full h-full object-cover object-left-top rounded-tl-[0.270rem] shadow-xl shadow-neutral-400 group-hover:shadow-neutral-500 translate-x-6 translate-y-10 group-hover:translate-y-6 transition-all duration-300"
                />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
