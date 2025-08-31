import Image from "next/image";
import cuddlyFerris from "../../../../public/cuddlyferris.svg";
import typescript from "../../../../public/typescript.svg";
import { Spqr } from "@/components/icons/spqr";

export function MainSection() {
	return (
		<main className="col-span-8">
			<section className="flex flex-col gap-4 font-fraunces text-stone-500">
				<h1 className="font-medium text-5xl tracking-tight text-balance">
					I&apos;m{" "}
					<span className="text-stone-700 font-semibold">Solís Huilén</span>.
				</h1>
				<h2 className="text-3xl w-full tracking-tight text-pretty">
					A <span className="text-stone-700">Polymath</span>, interested in
                    Full Stack Development, 
                    Latin <Spqr className="inline" />,
                    Attic Greek,
                    Philosophy,
                    Medieval & Classical History and Book-binding. 
				</h2>
				<p className="tracking-tight text-3xl">
                    Stack: 
					<span className="text-stone-700"> Typescript</span>
					<Image
						src={typescript}
						width={29}
						alt="typescript logo"
						className="inline mx-1"
					/>
                    , Next js,
					Tailwind CSS, Node js, DrizzleORM,{" "}
					<span className="text-stone-700"> PostgreSQL </span>{" "}
					<span className="text-stone-700">Rust </span>
					<Image
						src={cuddlyFerris}
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
