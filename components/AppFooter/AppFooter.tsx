import Link from "next/link";
import GitHubSVG from "../GithubSVG/GithubSVG";
import styles from "./AppFooter.module.css";
import LinkedinSVG from "./LinkedinSVG";

export default function AppFooter() {
	return (
		<footer className={styles.footer}>
			<div className="flex gap-2 justify-center mb-2">
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

			<p className="text-sm font-mono text-center mb-5">
				Developed by Dehelean Rares Catalin
			</p>
		</footer>
	);
}
