"use client";

import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import LinkButton from "@/components/LinkButton/LinkButton";
import LogoSVG from "@/components/NavMenu/LogoSVG";
import useScrollDirection from "@/hooks/useScrollDirection";
import clsx from "clsx";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { NAV_TABS } from "../../app/lib/data";
import styles from "./NavMenu.module.css";

export default function NavMenu() {
	const scrollDirection = useScrollDirection();
	const logoRef = useRef<HTMLAnchorElement | null>(null);
	const inView = useInView(logoRef, { once: true, amount: 0.2 });

	const navClassName = clsx(styles["nav-menu"], {
		[styles.down]: scrollDirection === "down",
	});

	const listClassName = clsx(`${styles.tabs} hidden font-mono md:flex`, {
		"initial-tab delay-100": !inView,
		"after delay-100": inView,
	});

	const resumeContainer = clsx("hidden md:block", {
		"initial-tab": !inView,
		"after delay-200": inView,
	});

	return (
		<header>
			<a className={styles["skip-content"]} href="#experience">
				Skip to content
			</a>
			<nav className={navClassName}>
				<Link
					ref={logoRef}
					href="/"
					title="home"
					className={clsx(styles.logo, { "opacity-0": !inView, after: inView })}
				>
					<LogoSVG />
				</Link>

				<ul className={listClassName}>
					{NAV_TABS.map((tab, key) => (
						<li key={key} className={styles["nav-tab"]}>
							<Link href={`/#${tab}`} className={styles["nav-link"]}>
								{tab}
							</Link>
						</li>
					))}
				</ul>
				<div className={resumeContainer}>
					<LinkButton href={"/resume.pdf"} content="Resume" />
				</div>
				<BurgerMenu />
			</nav>
		</header>
	);
}
