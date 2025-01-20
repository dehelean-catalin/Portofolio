"use client";

import LinkedinSVG from "@/components/AppFooter/LinkedinSVG";
import GitHubSVG from "@/components/GithubSVG/GithubSVG";
import LinkButton from "@/components/LinkButton/LinkButton";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { HexagonSVG } from "./HexagonSVG";
import styles from "./home.module.css";

export default function Home() {
	const ref = useRef(null);
	const cubes = new Array(6);
	return (
		<div ref={ref} id="home" className="px-5 mb-20">
			<div className={styles.wrapper}>
				<span className={styles.info}>Software Developer</span>
				<h1 className={styles.title}>Dehelean Catalin</h1>
				<h2 className={styles.subtitle}>I build user-friendly apps.</h2>
				<p className={styles.desc}>
					I&apos;m a Software Engineer with a specialization in
					constructing high-performance and real-time applications. Don&apos;t hesitate to
					reach out if you have an exciting project that could benefit from my
					expertise.
				</p>

				<LinkButton
					href="/resume.pdf"
					content="Resume"
					className={styles.actions}
				/>

				<div className={styles.socials}>
					<p>Check out my:</p>
					<Link
						href="https://www.linkedin.com/in/catalin-dehelean/"
						target="_blank"
						className={styles.link}
						title="Linkedin Link"
					>
						<LinkedinSVG />
					</Link>

					<Link
						href="https://github.com/dehelean-catalin"
						target="_blank"
						className={styles.link}
						title="Github Link"
					>
						<GitHubSVG />
					</Link>
				</div>

				<div className={styles.container}>
					<div className={styles["container-inner"]}>
						<span className={styles.clip}></span>
						<Image
							src="/catalin.png"
							alt="Profile"
							width={340}
							height={340}
							className={styles.profile}
						/>
					</div>
					{[1, 2].map((_, key) => (
						<div key={key} className={styles.hexagon}>
							<HexagonSVG />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
