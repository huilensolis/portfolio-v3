import { ClockLocal } from "@/components/feature/clock-local";
import { Box } from "@/components/ui/box/box.component";
import { Dot } from "@/components/ui/dot";
import { DotWithChildren } from "@/components/ui/dot-with-children";
import { getDictionary } from "@/utils/dictionaries";

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: "en" | "es" };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold text-orange-600">Huilén Solís</h1>
        <p className="text-neutral-500 text-pretty">{dictionary.biography}</p>
      </section>
      <section className="md:grid gap-6 grid-cols-3 grid-rows-2">
        <Box className="col-span-1 row-span-2 flex flex-col gap-4">
          <h1 className="text-neutral-400">{dictionary.education.title}</h1>
          <ul className="flex flex-col gap-4">
            {dictionary.education.items.map((item, i) => (
              <li key={i}>
                <article className="flex gap-2">
                  <Dot />
                  <section>
                    <h1 className="font-bold text-lg">{item.title}</h1>
                    <span className="text-neutral-400">{item.description}</span>
                  </section>
                </article>
              </li>
            ))}
          </ul>
        </Box>
        <Box className="col-span-1 row-span-4 flex flex-col gap-4">
          <h1 className="text-neutral-400">{dictionary.projects.title}</h1>
          <ul className="flex flex-col gap-4">
            {dictionary.projects.items.map((project, i) => (
              <li key={i}>
                <article className="flex gap-2">
                  <DotWithChildren>
                    <span className="text-sm">{i + 1}</span>
                  </DotWithChildren>
                  <section>
                    <h1 className="font-bold">{project.title}</h1>
                    <span className="text-neutral-400">
                      {project.description}
                    </span>
                  </section>
                </article>
              </li>
            ))}
          </ul>
        </Box>
        <Box className="col-span-1 row-span-2 flex flex-col justify-between gap-4">
          <section className="flex flex-col gap-4">
            <h1 className="text-neutral-400">{dictionary.tech_stack.title}</h1>
            <h2>{dictionary.tech_stack.role}</h2>
          </section>
          <ul className="flex flex-wrap gap-1">
            {dictionary.tech_stack.items.map((tech, i) => (
              <li key={i}>
                <article className="py-1.5 px-3 rounded-full border border-neutral-800">
                  <span>{tech}</span>
                </article>
              </li>
            ))}
          </ul>
        </Box>
        <Box className="col-span-1 row-span-2">
          <h1>{dictionary.misc.title}</h1>
          <ul className="flex flex-col gap-2">
            {dictionary.misc.items.map((miscItem, i) => (
              <li key={i}>{miscItem}</li>
            ))}
          </ul>
        </Box>
        <Box className="col-span-1 row-span-2">
          <h1>{dictionary.localization.title}</h1>
          <section className="flex flex-col gap-2">
            <span>{dictionary.localization.time_zone}</span>
            <ClockLocal />
          </section>
        </Box>
      </section>
    </div>
  );
}
