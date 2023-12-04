export default function Tab({ name }: { name: string }) {
	return (
		<span className="rounded-full bg-teal-900 text-teal-300 px-3 py-1">
			{name}
		</span>
	);
}