import projectList from "@/data/dictionary/projects.json";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export async function ProjectsSection() {
	return projectList.map((project, i) => (
		<>
			<li
				key={i}
				className="lg:block hidden bg-gray-200/30 border border-gray-200 rounded-md"
				style={{
					gridColumn: `span ${project["grid-cols"]}`,
					gridRow: `span ${project["grid-rows"]}`,
				}}
			>
				<Link href={`/project/${project.title.trim().replaceAll(" ", "-")}`}>
					<article className="h-full w-full flex flex-col group">
						<header className="flex justify-between items-center gap-4 p-4 text-neutral-600">
							<h2 className="text-lg font-normal">Project / {project.label}</h2>
							<ArrowUpRight className="w-4 h-4 group-hover:scale-125 transition-all duration-150" />
						</header>
						<div className="w-full h-72 overflow-hidden flex items-center justify-center">
							<h1 className="text-4xl font-fraunces font-medium">
								{project.title}
							</h1>
						</div>
					</article>
				</Link>
			</li>
			<li
				key={project.title}
				className="lg:hidden block bg-gray-200/30 border border-gray-200 rounded-md"
			>
				<Link href={`/project/${project.title.trim().replaceAll(" ", "-")}`}>
					<article className="h-full w-full flex flex-col group">
						<header className="flex justify-between items-center gap-4 p-4 text-neutral-600">
							<h2 className="text-lg font-normal">Project / {project.label}</h2>
							<ArrowUpRight className="w-4 h-4 group-hover:scale-125 transition-all duration-150" />
						</header>
						<div className="w-full h-72 overflow-hidden flex items-center justify-center">
							<h1 className="text-4xl font-fraunces font-medium">
								{project.title}
							</h1>
						</div>
					</article>
				</Link>
			</li>
		</>
	));
}
