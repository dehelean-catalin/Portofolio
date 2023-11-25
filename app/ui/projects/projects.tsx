import { PROJECTS } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import GitHubSVG from "../githubSVG";
import LinkSVG from "../linkSVG";
import styles from "./projects.module.css";

export default function projects() {
	return (
		<div id="projects" style={{ maxWidth: "1024px" }} className="m-auto">
			<h2 className="text-5xl text-center mb-10">Projects</h2>
			<div className="grid md:grid-cols-2 gap-5">
				{PROJECTS.map((project, key) => (
					<>
						<article key={key} className={`${styles["project-card"]}`}>
							<Image
								src={project.imageURL}
								width={540}
								height={330}
								alt=""
								className="object-contain max-h-56 bg-gray-300"
							/>
							<h3 className="text-xl my-2">{project.name}</h3>
							<p className="text-gray-400 my-2">{project.description}</p>
							<div className="flex justify-between">
								<div>
									{project.skills.map((skill, key) => (
										<span key={key} className="text-sm mr-2 text-gray-400">
											{skill}
										</span>
									))}
								</div>
								<div className="flex gap-2">
									<Link href={project.githubURL} target="_blank" title="GitHub">
										<GitHubSVG />
									</Link>
									{project.demoURL && (
										<Link href={project.demoURL} target="_blank" title="Demo">
											<LinkSVG />
										</Link>
									)}
									{project.projectURL && (
										<Link
											href={project.projectURL}
											target="_blank"
											title="External Link"
										>
											<LinkSVG />
										</Link>
									)}
								</div>
							</div>
						</article>
					</>
				))}
			</div>
		</div>
	);
}
