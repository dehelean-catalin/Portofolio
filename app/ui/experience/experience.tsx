"use client";

import { EXPERIENCES } from "@/app/lib/data";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import clsx from "clsx";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true });

	return (
		<div id="experience" className="mb-20">
			<h3 ref={ref} className={clsx("initial mb-14", { after: inView })}>
				Professional Experience
			</h3>
			{EXPERIENCES.map((experience, key) => (
				<ExperienceCard key={key} experience={experience} />
			))}
		</div>
	);
}
