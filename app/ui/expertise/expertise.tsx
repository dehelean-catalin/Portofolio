"use client";

import { EXPERTISE } from "@/app/lib/data";
import clsx from "clsx";
import { useInView } from "framer-motion";
import { useRef } from "react";
import IconSVG from "./IconSVG";
import styles from "./expertise.module.css";

export default function Expertise() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	const sectionClassName = clsx("m-auto mb-20", {
		[styles.show]: isInView,
		[styles.hidden]: !isInView,
	});

	return (
		<div id="expertise" ref={ref} className={sectionClassName}>
			<h3 className="mb-14">What I do?</h3>
			<div className="flex flex-wrap gap-10 m-auto md:gap-0">
				{EXPERTISE.map((item, key) => (
					<article key={key} className={`${styles.card} sm:w-full lg:w-6/12`}>
						<div className="flex items-start gap-5">
							<IconSVG name={item.icon} />
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
