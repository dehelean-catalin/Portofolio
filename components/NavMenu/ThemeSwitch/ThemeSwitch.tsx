"use client";

import useTheme from "@/hooks/useTheme";
import MoonSvg from "./MoonSVG";
import SunSVG from "./SunSVG";
import styles from "./ThemeSwitch.module.css";

export default function ThemeSwitch() {
	const { theme, handleChangeTheme } = useTheme();

	function handleChange() {
		handleChangeTheme(theme == "dark" ? "white" : "dark");
	}
	return (
		<label
			htmlFor="theme"
			className={styles["switch-theme"]}
			aria-label="Change theme"
		>
			<input
				type="checkbox"
				id="theme"
				name="theme"
				className={styles.btn}
				value={theme}
				checked={theme === "white"}
				onChange={handleChange}
			/>{" "}
			<span className={styles.slider}></span>
			<MoonSvg />
			<SunSVG />
		</label>
	);
}
