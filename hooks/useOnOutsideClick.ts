"use client";

import { RefObject, useEffect } from "react";

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>,
	action: (state: boolean) => void
) {
	useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (!ref.current?.contains(event.target)) {
				action(false);
			}
		};
		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [action]);
}
