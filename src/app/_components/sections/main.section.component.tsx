import Image from "next/image";
import cuddlyFerris from "../../../../public/cuddlyferris.svg";

export function MainSection() {
    return (
        <main className="col-span-8">
            <section className="flex flex-col gap-4 font-fraunces text-stone-500">
                <h1 className="font-medium text-5xl tracking-tight text-balance">
                    I&apos;m{" "}
                    <span className="text-stone-700 font-semibold">Solis Huilen</span>.
                </h1>
                <h2 className="text-3xl w-full tracking-tight text-pretty">
                    A <span className="text-stone-700">Software Engineer</span>,
                    developing Full Stack aplications with Typescript, Next js, Tailwind
                    CSS, Node js, DrizzleORM, PostgreSQL and Rust
                    <Image
                        src={cuddlyFerris}
                        width={40}
                        height={36}
                        alt="curstacean emoji"
                        className="inline mx-1"
                    />
                    .
                </h2>
                <p className="tracking-tight text-3xl">
                    On my free time, I learn ancient Latin and Greek; read Classical Literature; go mountain hiking; enjoy coffee; and write.
                </p>
            </section>
        </main>
    );
}
