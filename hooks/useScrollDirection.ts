import { useEffect, useRef, useState } from "react";

const THRESHOLD = 0;

export default function useScrollDirection() {
	const [scrollDirection, setScrollDirection] = useState("up");

	const prevScrollY = useRef(0);

	useEffect(() => {
		let blocking = false;
		prevScrollY.current = window.scrollY;

		const updateScrollDirection = () => {
			const scrollY = window.scrollY;

			if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
				const newScrollDirection =
					scrollY > prevScrollY.current ? "down" : "up";

				setScrollDirection(newScrollDirection);

				prevScrollY.current = scrollY > 0 ? scrollY : 0;
			}

			blocking = false;
		};

		const handleScroll = () => {
			if (!blocking) {
				blocking = true;
				window.requestAnimationFrame(updateScrollDirection);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollDirection]);

	return scrollDirection;
}
