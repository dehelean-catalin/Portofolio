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
					<li key={key} className="nav-tab">
						<Link href={`#${tab.name}`} className="nav-link">
							<span className="relative before:content-['01'] before:absolute before:right-0 before:bottom-5 before:font-bold before:opacity-70">
								{`<>`} {tab.name}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
