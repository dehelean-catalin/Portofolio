"use client";

import { useEffect } from "react";
import styles from "./Cursor.module.css";

export default function Cursor() {
	useEffect(() => {
		const cursor = document.querySelector("[data-cursor]");

		const handleMouseMove = () => {
			document.addEventListener("mousemove", (e) => {
				cursor?.setAttribute(
					"style",
					"top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
				);
			});
		};

		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);
	return <circle className={styles.cursor} data-cursor></circle>;
}
