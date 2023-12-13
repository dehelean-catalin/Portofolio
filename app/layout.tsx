import "@/app/ui/globals.css";
import "@/app/ui/utils.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "./ui/Theme/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Personal Portfolio",
	description:
		"Explore the portfolio of a skilled software developer. View a collection of innovative projects, showcasing expertise in coding, web development, and more. Discover the technical skills and passion that drive my work",
	authors: [{ name: "Dehelean Catalin" }],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.png" />
			</head>
			<body>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
