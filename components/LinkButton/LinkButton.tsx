import Link from "next/link";
import styles from "./LinkButton.module.css";

export default function LinkButton({
	href,
	content,
	target = "_blank",
}: {
	href: string;
	content: string;
	target?: string;
}) {
	return (
		<Link
			href={href}
			target={target}
			className={`${styles["link-btn"]} py-2 px-3 text-teal-300 border border-teal-300 rounded`}
		>
			{content}
		</Link>
	);
}
