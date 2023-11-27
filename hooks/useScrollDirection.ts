"use client";

import { useEffect, useState } from "react";

export const useScrollInView = () => {
	const [scroll, setScroll] = useState(0);
	useEffect(() => {
		console.log(window.scrollX);
	}, [window.screenX]);

	return scroll;
};
