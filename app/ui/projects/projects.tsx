import { PROJECTS } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import GitHubSVG from "../githubSVG";
import LinkSVG from "../linkSVG";
import Tab from "../tab";
import styles from "./projects.module.css";

export default function projects() {
	return (
		<div id="projects" className="m-auto mb-20 max-w-5xl">
			<h3 className="mb-14">Projects</h3>
			<div className="grid md:grid-cols-2 gap-x-5 gap-y-10">
				{PROJECTS.map((project, key) => (
					<>
						<article
							key={key}
							className={`${styles["project-card"]} card flex flex-col gap-4`}
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
									{project.skills.map((skill, key) => (
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
					</>
				))}
			</div>
		</div>
	);
}
