"use client";

import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import LinkButton from "@/components/LinkButton/LinkButton";
import LogoSVG from "@/components/NavMenu/LogoSVG";
import useScrollDirection from "@/hooks/useScrollDirection";
import clsx from "clsx";
import Link from "next/link";
import { NAV_TABS } from "../../app/lib/data";
import styles from "./NavMenu.module.css";

export default function NavMenu() {
	const scrollDirection = useScrollDirection();

	return (
		<nav
			className={clsx(styles["nav-menu"], {
				[styles.down]: scrollDirection === "down",
			})}
		>
			<Link href="/" title="home" className={styles.logo}>
				<LogoSVG />
			</Link>
			<ul className={`${styles.tabs} hidden m-auto font-mono md:flex`}>
				{NAV_TABS.map((tab, key) => (
					<li key={key} className={styles["nav-tab"]}>
						<Link href={`#${tab}`} className={styles["nav-link"]}>
							{tab}
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
