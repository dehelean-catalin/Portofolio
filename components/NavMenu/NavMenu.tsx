"use client";

import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import LogoSVG from "@/components/NavMenu/LogoSVG";
import useScrollDirection from "@/hooks/useScrollDirection";
import clsx from "clsx";
import { useInView } from "framer-motion";
import Link from "next/link";
import { RefObject, useEffect, useRef, useState } from "react";
import { NAV_TABS } from "../../app/lib/data";
import styles from "./NavMenu.module.css";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";

export default function NavMenu() {
	const scrollDirection = useScrollDirection();
	const navMenu = useRef<HTMLElement>(null);
	const logoRef = useRef<HTMLAnchorElement | null>(null);
	const inView = useInView(logoRef, { once: true, amount: 0.2 });
	const changeColor = useSwitchColor(navMenu);

	const navClassName = clsx(styles["nav-menu"], changeColor, {
		[styles.down]: scrollDirection === "down",
	});

	const listClassName = clsx(`${styles.tabs} hidden font-mono md:flex`, {
		"initial-tab delay-100": !inView,
		"after delay-100": inView,
	});

	return (
		<header>
			<a className={styles["skip-content"]} href="#experience">
				Skip to content
			</a>
			<nav ref={navMenu} className={navClassName}>
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
				<div className="flex gap-4 items-center">
					<ThemeSwitch />
					<BurgerMenu />
				</div>
			</nav>
		</header>
	);
}

function useSwitchColor(navMenuRef: RefObject<HTMLElement>) {
	const THRESHOLD = 300;
	const [changeColor, setChangeColor] = useState("");

	useEffect(() => {
		const element = navMenuRef.current?.classList;
		const className = styles["start-menu"];

		const handleScroll = () => {
			if (window.scrollY > THRESHOLD && !element?.contains(className)) {
				setChangeColor(className);
			} else if (window.scrollY <= THRESHOLD && element?.contains(className)) {
				setChangeColor("");
			}
		};

		document.addEventListener("scroll", handleScroll);

		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, [changeColor]);

	return changeColor;
}
