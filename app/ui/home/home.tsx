"use client";

import LinkButton from "@/components/LinkButton/LinkButton";
import Image from "next/image";
import { useRef } from "react";
import styles from "./home.module.css";

export default function Home() {
	const ref = useRef(null);
	// const inView = useInView(ref, { once: true });

	// const titleClassName = clsx(styles.title, {
	// 	"opacity-0": !inView,
	// 	"after delay-300": inView,
	// });

	// const descClassName = clsx({
	// 	"opacity-0": !inView,
	// 	"after": inView,
	// });

	// TODO: check delay for home items
	// TODO: change color of the burger menu.
	// TODO: ADD SOME THREE JS ANIMATIONS, ICON-LINK

	// const resumeContainer = clsx("hidden md:block mt-3", {
	// 	"initial-tab": !inView,
	// 	"after delay-200": inView,
	// });

	return (
		<div ref={ref} id="home" className={`${styles["home-wrapper"]} px-5 mb-20`}>
			<div className={styles.wrapper}>
				<span>Software Developer</span>
				<h1 className={styles.title}>Dehelean Catalin</h1>
				<p className={styles.desc}>
					I'm all about turning lines of code into something awesome. Whether
					it's crafting beautiful interfaces or building behind-the-scenes
					magic, I'm here to make tech feel like a friendly conversation. Let's
					create cool things together and sprinkle a bit of friendliness into
					the world of coding!
				</p>
				{/* <div className={resumeContainer}> */}

				<LinkButton
					href="/resume.pdf"
					content="Resume"
					className={styles.actions}
				/>

				<div className={styles.container}>
					<div className={styles["container-inner"]}>
						<span className={styles.clip}></span>
						<Image
							src="/catalin.png"
							alt="Profile"
							width={200}
							height={200}
							className={styles.profile}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
