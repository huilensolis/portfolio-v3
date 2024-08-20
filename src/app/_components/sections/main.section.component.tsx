export function MainSection() {
  return (
    <main className="col-span-8">
      <section className="flex flex-col gap-5 font-fraunces">
        <h1 className="font-medium text-5xl tracking-tight text-balance text-stone-600">
          I&apos;m <span className="text-amber-500 font-semibold">Huilen</span>,{" "}
        </h1>
        <h2 className="text-3xl w-full tracking-tight text-balance text-stone-600">
          A Software Engineer, developing Full Stack aplications with
          Typescript, Next js, Node js, DrizzleORM, PostgreSQL and Rust.
          <br />
          <br />
          On my free time, I learn Latin, read history books, go mountain
          hiking, and draw.
        </h2>
      </section>
    </main>
  );
}
