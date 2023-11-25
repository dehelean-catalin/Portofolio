"use client";

import { EXPERTISE } from "@/app/lib/data";
import { useScrollInView } from "@/hooks/useScrollInView";
import Image from "next/image";
import styles from "./expertise.module.css";

export default function Expertise() {
	const scroll = useScrollInView();
	console.log(window.scrollY);
	return (
		<div id="expertise" className="px-5 m-auto mb-20">
			<h3 className="mb-14">What I do?</h3>
			<div className="flex flex-wrap gap-10 m-auto md:gap-0">
				{EXPERTISE.map((item, key) => (
					<article key={key} className={`${styles.card} sm:w-full lg:w-6/12`}>
						<div className="flex items-start gap-5">
							<Image src={item.icon} width="55" height="55" alt="" />
							<h4>
								<span
									className={`${styles[`gradient-${key}`]} ${styles.title}`}
								>
									{item.title}
								</span>
								<br />
								{item.subtitle}
							</h4>
						</div>

						<div className={styles["desc-wrapper"]}>
							<p className={styles.description}>{item.description}</p>
						</div>
					</article>
				))}
			</div>
		</div>
	);
}
