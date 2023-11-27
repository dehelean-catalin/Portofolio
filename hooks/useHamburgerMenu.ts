"use client";

import { useEffect, useState } from "react";

function addStyleToElements() {
	document.body.classList.add("overflow-h");
	document.getElementsByTagName("main")[0].classList.add("blur");
}
function removeStyleFromElements() {
	document.body.classList.remove("overflow-h");
	document.getElementsByTagName("main")[0].classList.remove("blur");
}

export const useHamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [windowSize, setWindowSize] = useState(0);

	const handleToggle = (state: boolean) => {
		if (state) {
			addStyleToElements();
		} else {
			removeStyleFromElements();
		}
		setIsOpen((prev) => state);
	};

	const handleMobileView = () => {
		setWindowSize(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleMobileView);
		return () => {
			window.removeEventListener("resize", handleMobileView);
		};
	}, []);

	useEffect(() => {
		if (windowSize > 760 && isOpen) {
			setIsOpen(false);
			removeStyleFromElements();
			console.log("alunel");
		}
		return () => {
			removeStyleFromElements();
		};
	}, [windowSize]);

	return { isOpen, handleToggle };
};
