"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "white";

export default function useTheme() {
	const [theme, setTheme] = useState<Theme>(handleDefaultTheme);

	function handleChangeTheme(value: Theme) {
		setTheme(value);
		localStorage.setItem("theme", value);
	}

	useEffect(() => {}, []);

	useEffect(() => {
		const themeElement = document?.querySelector("#theme-provider");
		themeElement?.setAttribute("data-theme", theme);
	}, [theme]);

	return { theme, handleChangeTheme };
}

function handleDefaultTheme() {
	if (typeof window === "undefined") {
		return "dark";
	}
	const localTheme = localStorage.getItem("theme") as Theme;
	const systemTheme = window?.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "white";

	if (localTheme) {
		return localTheme;
	} else if (systemTheme) {
		return systemTheme;
	}
	return "dark";
}
