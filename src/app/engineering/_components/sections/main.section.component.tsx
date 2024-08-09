import Link from "next/link";

export function MainSection() {
  return (
    <>
      <div
        aria-hidden
        className="w-full h-96 pointer-events-none absolute top-0 left-0 mx-auto bg-[linear-gradient(to_bottom,_rgb(29_23_56/0.15)_0%,_transparent_100%)] dark:bg-[linear-gradient(to_bottom,_rgb(229_229_229_/0.05)_0%,_transparent_100%)]"
      ></div>
      <main>
        <section className="py-32 flex flex-col gap-5 max-w-5xl">
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
