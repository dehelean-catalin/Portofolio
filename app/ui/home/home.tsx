import styles from "./home.module.css";

export default function Home() {
	return (
		<div
			id="home"
			className={`flex items-center flex-col justify-center px-5 ${styles["home-wrapper"]}`}
		>
			<div className={styles["background-overlay"]}></div>
			<h1 className={`${styles["title"]} text-center`}>Dehelean Catalin</h1>
			<h2 className="text-2xl uppercase text-center">
				Software Engineer, Web & Mobile Developer
			</h2>
		</div>
	);
}
