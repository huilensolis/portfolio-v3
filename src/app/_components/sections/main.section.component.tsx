import Image from "next/image";
import { SpqrFlag } from "@/components/icons/spqr-flag";
import { AtticGreekFlag } from "@/components/icons/attic-greek-flag";
import { Typescript } from "@/components/icons/typescript";

export function MainSection() {
	return (
		<main className="col-span-8">
			<section className="flex flex-col gap-4 font-fraunces">
				<h1 className="font-normal text-5xl tracking-tight text-balance">
					I&apos;m{" "}
					<span className="text-violet-500">Solís Huilén</span>.
				</h1>
				<h2 className="text-3xl w-full tracking-tight text-pretty">
					A <strong>Polymath</strong>, interested in
                    Full Stack Development, 
                    Latin <SpqrFlag className="inline" />,
                    Attic Greek <AtticGreekFlag className="inline" />,
                    Philosophy,
                    Medieval & Classical History and Book-binding. 
				</h2>
				<p className="tracking-tight text-3xl">
                    Stack: 
					<strong> Typescript</strong>
                    <Typescript width={29} className="inline" />
                    , Next js,
					Tailwind CSS, Node js, DrizzleORM,{" "}
					<strong> PostgreSQL </strong>{" "}
					<strong>Rust </strong>
					<Image
						src="/cuddlyferris.svg"
						width={40}
						height={36}
						alt="curstacean emoji"
						className="inline mx-1"
					/>
					.
				</p>
			</section>
		</main>
	);
}
