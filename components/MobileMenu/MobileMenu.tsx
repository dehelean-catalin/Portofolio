import { NAV_TABS } from "@/app/lib/data";
import clsx from "clsx";
import Link from "next/link";
import LinkButton from "../LinkButton/LinkButton";
import styles from "./MobileMenu.module.css";

export default function MobileMenu({
	isOpen,
	onTabPress,
}: {
	isOpen: boolean;
	onTabPress: () => void;
}) {
	return (
		<>
			<aside className={clsx(styles["mobile-menu"], { [styles.open]: isOpen })}>
				<ul>
					{NAV_TABS.map((tab, key) => (
						<li className="p-2 mb-2" key={key}>
							<Link href={`#${tab.name}`} onClick={onTabPress}>
								0{key + 1} {tab.name}
							</Link>
						</li>
					))}
				</ul>
				<LinkButton href={"/resume.pdf"} content="Resume" />
			</aside>
			{isOpen && <div className={styles.backdrop}></div>}
		</>
	);
}
