"use client";

import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import LogoSVG from "@/components/NavMenu/LogoSVG";
import useScrollDirection from "@/hooks/useScrollDirection";
import clsx from "clsx";
import Link from "next/link";
import { useRef } from "react";
import { NAV_TABS } from "../../app/lib/data";
import styles from "./NavMenu.module.css";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";

export default function NavMenu() {
	const scrollDirection = useScrollDirection();
	const navMenu = useRef<HTMLElement>(null);
	const logoRef = useRef<HTMLAnchorElement | null>(null);

	const navClassName = clsx(styles["nav-menu"], {
		[styles.down]: scrollDirection === "down",
	});

	const listClassName = `${styles.tabs} hidden font-mono md:flex`;

	return (
		<header>
			<a className={styles["skip-content"]} href="#home">
				Skip to content
			</a>
			<nav ref={navMenu} className={navClassName}>
				<Link ref={logoRef} href="/" title="home" className={styles.logo}>
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
				<div className="flex gap-4 items-center">
					<ThemeSwitch />
					<BurgerMenu />
				</div>
			</nav>
		</header>
	);
}
