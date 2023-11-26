"use client";

import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import LinkButton from "@/components/LinkButton/LinkButton";
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
		<nav className={styles["nav-menu"]}>
			<h2 className="uppercase text-2xl md:hidden lg:block">{`</>`} Catalin</h2>
			<ul className="tabs hidden m-auto font-mono md:flex">
				{NAV_TABS.map((tab, key) => (
					<li key={key} className={styles["nav-tab"]}>
						<Link href={`#${tab.name}`} className={styles["nav-link"]}>
							0{key + 1} {tab.name}
						</Link>
					</li>
				))}
			</ul>

			<div className="hidden md:block">
				<LinkButton href={"/resume.pdf"} content="Resume" />
			</div>

			<BurgerMenu />
		</nav>
	);
}
