"use client";

import clsx from "clsx";
import { useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./home.module.css";

export default function Home() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true });

	const titleClassName = clsx(styles.title, {
		"opacity-0": !inView,
		"after delay-300": inView,
	});

	const descClassName = clsx("uppercase", {
		"opacity-0": !inView,
		"after delay-500": inView,
	});

	return (
		<div
			ref={ref}
			id="home"
			className={`${styles["home-wrapper"]} flex items-center flex-col justify-center px-5 mb-20`}
		>
			<div className={styles["background-overlay"]}></div>
			<h1 className={titleClassName}>Dehelean Catalin</h1>
			<h2 className={descClassName}>
				Software Engineer, Web & Mobile Developer
			</h2>
		</div>
	);
}
