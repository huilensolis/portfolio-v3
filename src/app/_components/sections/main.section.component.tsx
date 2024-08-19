export function MainSection() {
  return (
    <>
      <main>
        <section className="pb-32 flex flex-col gap-5 max-w-5xl font-fraunces">
          <h1 className="font-medium text-6xl tracking-tight text-balance text-stone-600 dark:text-neutral-400">
            I&apos;m{" "}
            <span className="text-amber-500 font-semibold">Huilen</span>, <br />
            <span className="text-indigo-400 font-semibold">
              Software Engineer{" "}
            </span>
          </h1>
          <h2 className=" text-5xl w-full max-w-3xl tracking-tight text-balance text-stone-600 dark:text-neutral-400">
            Developing and Architecturing{" "}
            <span className="dark:text-neutral-200 text-zinc-800 font-semibold">
              Accessible
            </span>
            ,{" "}
            <span className="dark:text-neutral-200 text-neutral-800 font-semibold">
              Responsive
            </span>{" "}
            and{" "}
            <span className="dark:text-neutral-200 text-neutral-800 font-semibold">
              Reactive
            </span>{" "}
            aplications with{" "}
            <span className="dark:text-neutral-200 text-neutral-800 font-semibold">
              State-Of-Art{" "}
            </span>
            technologies
          </h2>
        </section>
      </main>
    </>
  );
}
