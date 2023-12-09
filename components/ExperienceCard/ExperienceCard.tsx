"use client";

import { Experience } from "@/app/lib/types";
import Tab from "@/components/Tab/Tab";
import clsx from "clsx";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import TextLink from "../TextLink/TextLink";
import ChainSVG from "./ChainSVG";
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
				<span
					className={`${styles.desc} flex-1 mt-1 uppercase sm:col-start-1 sm:col-end-3 mb-4`}
				>
					{experience.period}
				</span>
				<div className="sm:col-start-3 sm:col-end-8">
					<TextLink href={experience.companyURL}>
						<span>
							{experience.title} | {experience.company}
						</span>
					</TextLink>

					<ul className={`${styles.desc} mt-2 text-xl`}>
						{experience.descriptions.map((desc, key) => (
							<li key={key} className="mt-2 before:text-teal-300">
								{desc}
							</li>
						))}
					</ul>
					<div className="mt-4">
						{experience.projects.map((project, key) => (
							<Link
								key={key}
								href={project.url}
								className={styles.link}
								target="_blank"
							>
								<ChainSVG />
								<span className="text-xl">{project.name}</span>
							</Link>
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
