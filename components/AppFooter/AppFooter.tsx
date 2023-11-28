import GitHubSVG from "@/app/ui/githubSVG";
import LinkedinSVG from "@/app/ui/linkedinSVG";
import Link from "next/link";
import styles from "./AppFooter.module.css";

export default function AppFooter() {
	return (
		<footer className={styles.footer}>
			<div className="flex gap-2 justify-center mb-2">
				<Link
					href="https://www.linkedin.com/in/catalin-dehelean/"
					target="_blank"
					className="text-gray-400"
				>
					<LinkedinSVG />
				</Link>

				<Link
					href="https://github.com/dehelean-catalin"
					target="_blank"
					className="text-gray-400"
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
