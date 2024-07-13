import projectList from "@/data/dictionary/projects.json";

export async function ProjectsSection() {
  return (
    <section className="flex flex-col gap-10">
      <h3 className="text-4xl font-medium">Projects</h3>
      <ul className="flex gap-10">
        {projectList.map((project, i) => (
          <li key={i}>
            <article className="relative bg-neutral-800/40 p-4 rounded-lg border-2 border-neutral-200/20 dark:border-neutral-800/20 flex flex-col gap-10 w-96">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-medium">{project.title}</h1>
                <p className="font-medium">{project.description}</p>
              </div>
              <img
                src={project.cover_img}
                alt={project.description}
                className="w-full w-fll h-96 object-cover object-left rounded-md"
              />
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
