"use client";

import LinkButton from "@/components/LinkButton/LinkButton";
import clsx from "clsx";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, amount: 0.2 });

	return (
		<div
			ref={ref}
			id="contact"
			className={clsx("m-auto flex items-center flex-col mb-48", {
				initial: !inView,
				after: inView,
			})}
		>
			<h3 className="mb-14">Get in touch</h3>
			<p className="text-center max-w-xl mb-10">
				Open to new work opportunities and willing to help you with any
				technical issues related to my expertise. My inbox is always open and I
				will try to get back to you.
			</p>
			<LinkButton href="mailto:drcatalin00@gmail.com" content="Contact" />
		</div>
	);
}
