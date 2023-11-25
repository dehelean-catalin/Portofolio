import { EXPERIENCES } from "@/app/lib/data";
import Link from "next/link";
import Tab from "../tab";
import styles from "./experience.module.css";

export default function Experience() {
	return (
		<div id="experience" className="mb-20">
			<h3 className="mb-14">Professional Experience</h3>
			{EXPERIENCES.map((experience, key) => (
				<article key={key} className={`${styles.experience} card m-auto mb-10`}>
					<div className="grid gap-x-2 sm:grid-cols-7">
						<span className="flex-1 mt-1 text-gray-400 uppercase sm:col-start-1 sm:col-end-3 mb-4">
							{experience.period}
						</span>
						<div className="sm:col-start-3 sm:col-end-8">
							<h4 className={`${styles.title} text-2xl`}>
								<Link href={experience.companyURL} target="_blank">
									{experience.title}
									<span className={styles.company}>{experience.company}</span>
								</Link>
							</h4>

							<ul className="mt-2 text-xl text-gray-400">
								{experience.descriptions.map((desc, key) => (
									<li key={key} className="mt-2 before:text-teal-300">
										{desc}
									</li>
								))}
							</ul>
							<div className="mt-4">
								{experience.projects.map((project, key) => (
									<Link key={key} href={project.url} className={styles.project}>
										{project.name}
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
			))}
		</div>
	);
}
