export default function Contact() {
	return (
		<div id="contact" className="m-auto flex items-center flex-col py-12">
			<h2 className="text-5xl my-12">Get in touch</h2>
			<p
				className="text-lg text-center text-gray-400 m-width-30"
				style={{ maxWidth: "456px" }}
			>
				Open to new work opportunities and willing to help you with any
				technical issues related to my expertise. My inbox is always open and I
				will try to get back to you.
			</p>
			<a
				href="mailto:drcatalin00@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
				className="p-3 border border-white self-center mt-5"
			>
				Contact
			</a>
		</div>
	);
}
