import GitHubSVG from "@/app/ui/githubSVG";
import LinkSVG from "@/app/ui/linkSVG";
import Tab from "@/app/ui/tab";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
	index,
	project,
}: {
	index: number;
	project: any;
}) {
	const [cardRef, isVisible] = useInView({
		triggerOnce: true,
	});

	return (
		<article
			ref={cardRef}
			className={`${styles["project-card"]} container ${
				isVisible ? `appear` : ""
			} card flex flex-col gap-4`}
		>
			<Image
				src={project.imageURL}
				width={768}
				height={768}
				alt=""
				className="object-contain aspect-video bg-gray-600"
			/>
			<div>
				<h5 className="text-xl">
					{project.name}
					{project.demoURL && (
						<Link
							href={project.demoURL}
							className="inline-block ml-2"
							target="_blank"
							title="Demo"
						>
							<LinkSVG />
						</Link>
					)}
					{project.projectURL && (
						<Link
							href={project.projectURL}
							target="_blank"
							className="inline-block ml-2"
							title="External Link"
						>
							<LinkSVG />
						</Link>
					)}
				</h5>
			</div>

			<p className="flex-1">{project.description}</p>
			<div className="flex justify-between mt-2 items-start">
				<div className="flex flex-wrap gap-2">
					{project.skills.map((skill: string, key: number) => (
						<Tab key={key} name={skill} />
					))}
				</div>
				<Link
					href={project.githubURL}
					className="mt-1"
					target="_blank"
					title="GitHub"
				>
					<GitHubSVG />
				</Link>
			</div>
		</article>
	);
}
