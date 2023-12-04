import { Project } from "@/app/lib/types";
import Tab from "@/components/Tab/Tab";
import clsx from "clsx";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import TextLink from "../TextLink/TextLink";
import GitHubSVG from "../GithubSVG/GithubSVG";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
	project,
	index,
}: {
	project: Project;
	index: number;
}) {
	const cardRef = useRef(null);
	const inView = useInView(cardRef, { once: true, amount: 0.2 });

	return (
		<article
			ref={cardRef}
			className={clsx(`card flex flex-col gap-4 tr-delay-${index % 2} `, {
				after: inView,
				initial: !inView,
			})}
		>
			<Image
				src={project.imageURL}
				width={854}
				height={480}
				alt="Project"
				className="object-cover rounded"
			/>
			<div>
				{project.demoURL ? (
					<TextLink href={project.demoURL} title="Demo">
						{project.name}
					</TextLink>
				) : project.projectURL ? (
					<TextLink href={project.projectURL}>{project.name}</TextLink>
				) : (
					<h4>{project.name}</h4>
				)}
			</div>

			<p className="flex-1">{project.description}</p>
			<div className="flex justify-between mt-2 items-end">
				<div className="flex flex-wrap gap-2">
					{project.skills.map((skill: string, key: number) => (
						<Tab key={key} name={skill} />
					))}
				</div>
				<Link
					href={project.githubURL}
					className={styles.link}
					target="_blank"
					title="GitHub"
				>
					<GitHubSVG />
				</Link>
			</div>
		</article>
	);
}
