"use client";

import { PROJECTS } from "@/app/lib/data";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { useInView } from "react-intersection-observer";

export default function Projects() {
	const [projectsRef, isVisible] = useInView({
		triggerOnce: true,
	});

	return (
		<div id="projects" className="m-auto mb-20 max-w-5xl">
			<h3
				className={`container ${isVisible ? "appear-header" : ""} mb-14`}
				ref={projectsRef}
			>
				Projects
			</h3>
			<div className="grid md:grid-cols-2 gap-x-5 gap-y-10">
				{PROJECTS.map((project, key) => (
					<ProjectCard key={key} index={key + 1} project={project} />
				))}
			</div>
		</div>
	);
}
