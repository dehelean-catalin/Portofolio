import { Project } from "@/app/lib/types";
import GitHubSVG from "@/app/ui/githubSVG";
import Tab from "@/app/ui/tab";
import Image from "next/image";
import Link from "next/link";
import TextLink from "../TextLink/TextLink";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<article className={`${styles.card} card flex flex-col gap-4`}>
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
