"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "white";

export default function useTheme() {
	const [theme, setTheme] = useState<Theme>("dark");

	function handleChangeTheme(value: Theme) {
		setTheme(value);
		localStorage.setItem("theme", value);
		document.body.setAttribute("data-theme", value);
	}

	useEffect(() => {
		const localTheme = localStorage.getItem("theme") as Theme;
		const defaultTheme = window?.matchMedia("(prefers-color-scheme: dark)")
			.matches
			? "dark"
			: "white";

		if (defaultTheme == null && theme == null) {
			handleChangeTheme("dark");
		} else if (localTheme) {
			handleChangeTheme(localTheme);
		} else if (defaultTheme) {
			handleChangeTheme(defaultTheme);
		}
	}, []);

	return { theme, handleChangeTheme };
}
