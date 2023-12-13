"use client";

import { ReactNode } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
	return <div id="theme-provider">{children}</div>;
}
