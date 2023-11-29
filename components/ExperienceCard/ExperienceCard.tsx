"use client";

import { Experience } from "@/app/lib/types";
import Tab from "@/app/ui/tab";
import clsx from "clsx";
import { useInView } from "framer-motion";
import { useRef } from "react";
import TextLink from "../TextLink/TextLink";
import styles from "./ExperienceCard.module.css";

export default function ExperienceCard({
	experience,
}: {
	experience: Experience;
}) {
	const cardRef = useRef(null);
	const inView = useInView(cardRef, { once: true, amount: 0.2 });

	return (
		<article
			ref={cardRef}
			className={clsx(`${styles.experience} initial card m-auto mb-10`, {
				after: inView,
			})}
		>
			<div className="grid gap-x-2 sm:grid-cols-7">
				<span className="flex-1 mt-1 text-gray-400 uppercase sm:col-start-1 sm:col-end-3 mb-4">
					{experience.period}
				</span>
				<div className="sm:col-start-3 sm:col-end-8">
					<TextLink href={experience.companyURL}>
						<span>
							{experience.title} | {experience.company}
						</span>
					</TextLink>

					<ul className="mt-2 text-xl text-gray-400">
						{experience.descriptions.map((desc, key) => (
							<li key={key} className="mt-2 before:text-teal-300">
								{desc}
							</li>
						))}
					</ul>
					<div className="mt-4">
						{experience.projects.map((project, key) => (
							<TextLink key={key} href={project.url}>
								<span className="text-xl">{project.name}</span>
							</TextLink>
						))}
					</div>
					<div className="flex flex-wrap gap-2 mt-4">
						{experience.skills.map((skill, key) => (
							<Tab key={key} name={skill} />
						))}
					</div>
				</div>
			</div>
		</article>
	);
}
