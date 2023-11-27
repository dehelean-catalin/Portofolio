"use client";

import { useRef } from "react";
import styles from "./home.module.css";

export default function Home() {
	const ref = useRef(null);

	return (
		<div
			id="home"
			className={`${styles["home-wrapper"]} flex items-center flex-col justify-center px-5 mb-20`}
		>
			<div className={styles["background-overlay"]}></div>
			<h1 ref={ref} className={`${styles["title"]} title`}>
				Dehelean Catalin
			</h1>
			<h2 className="uppercase">Software Engineer, Web & Mobile Developer</h2>
		</div>
	);
}
