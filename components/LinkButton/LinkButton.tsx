import Link from "next/link";

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
			className={`btn btn-primary ${className ?? ""}`}
		>
			{content}
		</Link>
	);
}
