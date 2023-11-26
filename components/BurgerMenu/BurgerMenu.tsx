"use client";

import clsx from "clsx";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "./BurgerMenu.module.css";

export default function BurgerMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const handleMenu = () => setIsOpen((prev) => !isOpen);
	const handleTabPress = () => setIsOpen(false);

	return (
		<div className="md:hidden">
			<button
				type="button"
				title="Menu"
				onClick={handleMenu}
				className={clsx({ [styles.close]: isOpen })}
			>
				<div className={clsx(styles["ham-btn"])}>
					<div className={styles["ham-btn-inner"]}></div>
				</div>
			</button>
			<MobileMenu isOpen={isOpen} onTabPress={handleTabPress} />
		</div>
	);
}
