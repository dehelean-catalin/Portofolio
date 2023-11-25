"use client";

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_TABS } from "../lib/data";
import styles from "./nav-menu.module.css";

export default function NavMenu() {
	const [hideOnScroll, setHideOnScroll] = useState(0);

	const handleScroll = () => {
		setHideOnScroll(window.scrollY);
	};

	useEffect(() => {
		setHideOnScroll(window.scrollY);
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={clsx(
				{
					"-sticky": hideOnScroll > 100,
					"showed text-cyan-400": hideOnScroll > 400,
				},
				styles["nav-menu"]
			)}
		>
			<h1 className="uppercase text-2xl md:hidden lg:block">{`</>`} Catalin</h1>
			<ul className="tabs hidden m-auto font-mono md:flex">
				{NAV_TABS.map((tab, key) => (
					<li key={key} className={styles["nav-tab"]}>
						<Link href={`#${tab.name}`} className={styles["nav-link"]}>
							0{key + 1} {tab.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
