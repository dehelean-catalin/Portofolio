"use client";

import { useHamburgerMenu } from "@/hooks/useHamburgerMenu";
import clsx from "clsx";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "./BurgerMenu.module.css";

export default function BurgerMenu() {
	const { isOpen, handleToggle } = useHamburgerMenu();

	return (
		<div className="md:hidden">
			<button
				type="button"
				title="Menu"
				onClick={() => handleToggle(!isOpen)}
				className={clsx({ [styles.close]: isOpen })}
			>
				<div className={clsx(styles["ham-btn"])}>
					<div className={styles["ham-btn-inner"]}></div>
				</div>
			</button>
			<MobileMenu isOpen={isOpen} onTabPress={() => handleToggle(false)} />
		</div>
	);
}
