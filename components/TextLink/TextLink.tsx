import Link from "next/link";
import { ReactNode } from "react";
import LinkSVG from "./LinkSVG";
import styles from "./TextLink.module.css";

export default function TextLink({
	href,
	title = "External Link",
	children,
}: {
	href: string;
	title?: string;
	children: ReactNode;
}) {
	return (
		<h4>
			<Link
				href={href}
				className={styles.link}
				target="_blank"
				title={title}
				rel="noreferrer"
			>
				<span className="absolute -inset-x-0 -inset-y-0 rounded w-full h-full"></span>
				{children}
				<LinkSVG />
			</Link>
		</h4>
	);
}
