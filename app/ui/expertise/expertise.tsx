"use client";

import { EXPERTISE } from "@/app/lib/data";
import clsx from "clsx";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import styles from "./expertise.module.css";

export default function Expertise() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	return (
		<div
			id="expertise"
			ref={ref}
			className={clsx("px-5 m-auto mb-20", {
				[styles.show]: isInView,
				[styles.hidden]: !isInView,
			})}
		>
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
