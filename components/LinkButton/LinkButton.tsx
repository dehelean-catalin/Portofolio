import Link from "next/link";

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
			className="py-2 px-3 text-teal-300 border border-teal-300 rounded"
		>
			{content}
		</Link>
	);
}
