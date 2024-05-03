import { Box } from "@/components/ui/box/box.component";
import { Dot } from "@/components/ui/dot";
import { DotWithChildren } from "@/components/ui/dot-with-children";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold text-orange-600">Huilén Solís</h1>
        <p className="text-neutral-500 text-pretty">
          Full-Stack Developer, this is a description I&apos;ll thing about in
          the future, but for now I&apos;ll fill up the space with some space to
          see how the design looks!
        </p>
      </section>
      <section className="md:grid gap-6 grid-cols-3 grid-rows-2">
        <Box className="col-span-1 row-span-2 flex flex-col gap-2">
          <h1 className="text-neutral-400">Education</h1>
          <ul className="flex flex-col gap-4">
            <li>
              <article className="flex gap-2">
                <Dot />
                <section>
                  <h1 className="font-bold text-lg">X Academy </h1>
                  <span className="text-neutral-400">Full Stack bootcamp</span>
                </section>
              </article>
            </li>
            <li>
              <article className="flex gap-2">
                <Dot />
                <section>
                  <h1 className="font-bold text-lg">Platzi </h1>
                  <span className="text-neutral-400">
                    Web Development courses
                  </span>
                </section>
              </article>
            </li>
            <li>
              <article className="flex gap-2">
                <Dot />
                <section>
                  <h1 className="font-bold text-lg">English private lessons</h1>
                  <span className="text-neutral-400">C1 Advanced</span>
                </section>
              </article>
            </li>
          </ul>
        </Box>
        <Box className="col-span-1 row-span-4 flex flex-col gap-2">
          <h1 className="text-neutral-400">Projects</h1>
          <ul className="flex flex-col gap-4">
            <li>
              <article className="flex gap-2">
                <DotWithChildren>1</DotWithChildren>
                <section>
                  <h1 className="font-bold">Pictura</h1>
                  <span className="text-neutral-400">Images social media</span>
                </section>
              </article>
            </li>
            <li>
              <article className="flex flex-col">
                <h1 className="font-bold">Memoir</h1>
                <span>Images social media</span>
              </article>
            </li>
            <li>
              <article className="flex flex-col">
                <h1 className="font-bold">Interestelar</h1>
                <span>Images social media</span>
              </article>
            </li>
            <li>
              <article className="flex flex-col">
                <h1 className="font-bold">Interestelar</h1>
                <span>Images social media</span>
              </article>
            </li>
          </ul>
        </Box>
        <Box className="col-span-1 row-span-2">
          <h1>Tech Stack</h1>
          <ul>
            <li>
              <article>
                <h1>X Academy </h1>
                <span>Full Stack bootcamp</span>
              </article>
            </li>
          </ul>
        </Box>
        <Box className="col-span-1 row-span-2">
          <h1>Misc</h1>
          <ul>
            <li>
              <article>
                <h1>X Academy </h1>
                <span>Full Stack bootcamp</span>
              </article>
            </li>
          </ul>
        </Box>
        <Box className="col-span-1 row-span-2">
          <h1>Localization</h1>
          <ul>
            <li>
              <article>
                <h1>X Academy </h1>
                <span>Full Stack bootcamp</span>
              </article>
            </li>
          </ul>
        </Box>
      </section>
    </div>
  );
}
