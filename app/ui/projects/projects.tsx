import { PROJECTS } from "@/app/lib/data";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

export default function Projects() {
	return (
		<div id="projects" className="m-auto mb-20 max-w-5xl">
			<h3 className="mb-14">Projects</h3>
			<div className="grid md:grid-cols-2 gap-x-5 gap-y-10">
				{PROJECTS.map((project, key) => (
					<ProjectCard key={key} project={project} />
				))}
			</div>
		</div>
	);
}
