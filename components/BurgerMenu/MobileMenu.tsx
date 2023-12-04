"use client";

import { NAV_TABS } from "@/app/lib/data";
import { useOnClickOutside } from "@/hooks/useOnOutsideClick";
import clsx from "clsx";
import Link from "next/link";
import { useRef } from "react";
import LinkButton from "../LinkButton/LinkButton";
import styles from "./MobileMenu.module.css";

export default function MobileMenu({
	isOpen,
	onTabPress,
}: {
	isOpen: boolean;
	onTabPress: () => void;
}) {
	const sidebarRef = useRef<HTMLElement>(null);

	useOnClickOutside(sidebarRef, onTabPress);

	return (
		<aside
			id="side-bar"
			ref={sidebarRef}
			className={clsx(styles["mobile-menu"], { [styles.open]: isOpen })}
			tabIndex={isOpen ? 1 : -1}
		>
			<ul className="mb-4">
				{NAV_TABS.map((tab, key) => (
					<li className="p-2 mb-2 font-mono" key={key}>
						<Link href={`#${tab}`} onClick={onTabPress}>
							{tab}
						</Link>
					</li>
				))}
			</ul>
			<LinkButton href={"/resume.pdf"} content="Resume" />
		</aside>
	);
}
