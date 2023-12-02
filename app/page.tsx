import AppFooter from "@/components/AppFooter/AppFooter";
import NavMenu from "@/components/NavMenu/NavMenu";
import Contact from "./ui/contact/contact";
import Experience from "./ui/experience/experience";
import Expertise from "./ui/expertise/expertise";
import Home from "./ui/home/home";
import Projects from "./ui/projects/projects";

export default function HomePage() {
	console.log("render");
	return (
		<>
			<NavMenu />
			<main className="min-h-screen">
				<Home />
				<div className="flex flex-col gap-12 px-5">
					<Expertise />
					<Experience />
					<Projects />
					<Contact />
				</div>
			</main>
			<AppFooter />
			{/* <Cursor /> */}
		</>
	);
}
