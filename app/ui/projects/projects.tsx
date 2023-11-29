"use client";

import { PROJECTS } from "@/app/lib/data";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import clsx from "clsx";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true });

	return (
		<div id="projects" className="m-auto mb-20 max-w-5xl">
			<h3
				ref={ref}
				className={clsx("mb-14", { after: inView, initial: !inView })}
			>
				Projects
			</h3>
			<div className="grid md:grid-cols-2 gap-x-5 gap-y-10">
				{PROJECTS.map((project, key) => (
					<ProjectCard key={key} index={key} project={project} />
				))}
			</div>
		</div>
	);
}
