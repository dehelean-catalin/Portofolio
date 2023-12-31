"use client";

import { useHamburgerMenu } from "@/hooks/useHamburgerMenu";
import clsx from "clsx";
import { RefObject, useEffect, useRef } from "react";
import styles from "./BurgerMenu.module.css";
import MobileMenu from "./MobileMenu";

export default function BurgerMenu() {
	const { isOpen, handleToggle } = useHamburgerMenu();
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.addEventListener("keydown", (e) => handleKeyDown(e, menuRef));

		return () => {
			document.removeEventListener("keydown", (e) => handleKeyDown(e, menuRef));
		};
	}, []);

	function handleClick() {
		handleToggle(!isOpen);
	}

	function handleTabPressed() {
		handleToggle(false);
	}

	return (
		<div className="md:hidden" ref={menuRef}>
			<button
				type="button"
				title="Menu"
				onClick={handleClick}
				className={clsx({ [styles.close]: isOpen }, styles.menu)}
			>
				<div className={styles["ham-btn"]}>
					<div className={styles["ham-btn-inner"]}></div>
				</div>
			</button>
			<MobileMenu isOpen={isOpen} onTabPress={handleTabPressed} />
		</div>
	);
}

function handleKeyDown(e: KeyboardEvent, menuRef: RefObject<HTMLElement>) {
	if (e.key === "Tab") {
		const focusableElements = menuRef.current?.querySelectorAll(
			"a, button, input, textarea, select"
		);

		if (!focusableElements) return;
		if (focusableElements.length < 2) return;

		const firstElement = focusableElements[0] as HTMLElement;
		const lastElement = focusableElements[
			focusableElements.length - 1
		] as HTMLElement;

		if (!e.shiftKey && document.activeElement === lastElement) {
			e.preventDefault();
			firstElement.focus();
		} else if (e.shiftKey && document.activeElement === firstElement) {
			e.preventDefault();
			lastElement.focus();
		}
	}
}
