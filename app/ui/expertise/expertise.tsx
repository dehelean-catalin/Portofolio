import { EXPERTISE } from "@/app/lib/data";
import Image from "next/image";
import styles from "./expertise.module.css";

export default function Expertise() {
	return (
		<div id="expertise" className="px-5 m-auto">
			<h2 className="text-5xl text-center mb-10">What I do?</h2>
			<div className="flex flex-wrap gap-10 m-auto md:gap-0">
				{EXPERTISE.map((item, key) => (
					<article key={key} className={`${styles.card} sm:w-full lg:w-6/12`}>
						<div className="flex items-start gap-5">
							<Image src={item.icon} width="55" height="55" alt="" />
							<h3 className="text-3xl font-bold">
								<span
									className={`${styles[`gradient-${key}`]} ${styles.title}`}
								>
									{item.title}
								</span>
								<br />
								{item.subtitle}
							</h3>
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
