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
	const menuRef = useRef<HTMLElement>(null);

	useOnClickOutside(menuRef, onTabPress);

	return (
		<aside
			ref={menuRef}
			className={clsx(styles["mobile-menu"], { [styles.open]: isOpen })}
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
