import projectList from "@/data/dictionary/projects.json";
import Image from "next/image";

export async function ProjectsSection() {
  return (
    <section className="flex flex-col gap-10">
      <h3 className="text-4xl font-medium">Projects</h3>
      <ul className="flex flex-col gap-10 relative min-h-screen">
        {projectList.map((project, i) => (
          <li
            key={i}
            className="w-full sticky dark:bg-cm-indigo-bg"
            style={{
              top: i * 100 + 100,
              transform: `rotate(${i % 2 === 0 ? Math.round(Math.random()) * 2 : -Math.round(Math.random()) * 2}deg)`,
            }}
          >
            <article className="h-full bg-gray-100 dark:bg-neutral-800/40 p-4 rounded-lg border-2 border-gray-200 dark:border-neutral-700/60 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-medium">{project.title}</h1>
                <p className="font-medium">{project.description}</p>
              </div>
              <Image
                width={1000}
                height={700}
                src={project.cover_img}
                alt={project.description}
                className="w-full aspect-video object-cover object-left rounded-md"
              />
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
