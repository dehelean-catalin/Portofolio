import Experience from "./ui/experience/experience";
import Expertise from "./ui/expertise/expertise";
import Home from "./ui/home/home";
import Projects from "./ui/projects/projects";

export default function HomePage() {
	return (
		<main className="min-h-screen">
			<Home />
			<div className="flex flex-col gap-12 px-10">
				<Expertise />
				<Experience />
				<Projects />
				<div id="contact"></div>
			</div>
		</main>
	);
}
