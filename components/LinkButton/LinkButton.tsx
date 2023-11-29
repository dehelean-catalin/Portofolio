import Link from "next/link";
import styles from "./LinkButton.module.css";

export default function LinkButton({
	href,
	content,
	target = "_blank",
	className,
}: {
	href: string;
	content: string;
	target?: string;
	className?: string;
}) {
	return (
		<Link
			href={href}
			target={target}
			className={`${styles["link-btn"]} ${
				className ?? ""
			} py-2 px-3 border border-teal-300 rounded`}
		>
			{content}
		</Link>
	);
}
