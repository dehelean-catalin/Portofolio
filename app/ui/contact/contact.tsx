import LinkButton from "@/components/LinkButton/LinkButton";

export default function Contact() {
	return (
		<div id="contact" className="m-auto flex items-center flex-col mb-20">
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
