export const EXPERTISE = [
	{
		title: "Software",
		subtitle: "Engineer",
		description:
			"Experienced in both functional  and OOP, including programming languages such as Javascript, TypeScript and Java.",
		icon: "computer",
	},
	{
		title: "Full-Stack Dev",
		subtitle: "React, Node Js",
		description:
			"Over 2 years of professional experience in building and mantaining applications using React, Node JS, Next JS, and Spring.",
		icon: "javascript",
	},
	{
		title: "Mobile Dev",
		subtitle: "React Native",
		description:
			"Passionate about building cross-platform applications using React Native.",
		icon: "react",
	},
];

export const NAV_TABS = ["expertise", "experience", "projects", "contact"];

export const EXPERIENCES = [
	{
		title: "Full-Stack Development Bootcamp",
		company: "Betfair",
		companyURL: "https://www.betfair.ro",
		period: "Oct 2023 - Feb 2024",
		descriptions: [
			"A great experience that helped me improve my knowledge of computer science, browser engines and keep up with the latest updates of programming languages and frameworks",
		],
		projects: [],
		skills: ["Javascript", "TypeScript", "React", "Node Js", "Java", "Spring"],
	},
	{
		title: "Frontend Developer",
		company: "IT Perspectives",
		companyURL: "https://www.itperspectives.ro",
		period: "Aug 2022 - Apr 2023",
		descriptions: [
			"Contributed to the frontend team of the Concrete Management platform, a solution facilitating quality verification, ordering, and reporting.",
			"Refactored core components, aligning them with emerging business requirements.The result: significantly improved code reusability and maintainability.",
			"Implemented new interfaces with a focus on achieving seamless integration, utilizing React.js and Redux.",
			"Enhanced frontend team productivity by automating library organization and import processes.",
		],
		projects: [{ name: "Sequello", url: "https://sequello.com/en/" }],
		skills: [
			"React",
			"TypeScript",
			"Javascript",
			"Redux",
			"Primefaces",
			"SCSS",
		],
	},
	{
		title: "Web Developer Intern",
		company: "IT Perspectives",
		companyURL: "https://www.itperspectives.ro",
		period: "Jun - Aug 2022",
		descriptions: [
			"Learned the fundamentals of web development and how to apply them in real projects.",
			"The final project consisted of a web application for managing the orders of a bookshop.",
			"I turned the provided layouts into web pages, developed a REST API, and integrated third-party libraries.",
			"Achieved a record internship completion and initiated collaboration with a Scrum team to develop a Concrete Management Platform.",
		],
		projects: [],
		skills: ["HTML", "CSS", "Javascript", "React", "TypeScript", "Firebase"],
	},
];

export const PROJECTS = [
	{
		name: "Smarald E-Learning App",
		description:
			"A video-based platform that facilitates collaboration between teachers and students through features such as course sharing, activity monitoring, caption generation using NLP models, statistics generation, and multi-vendor authentication.",
		imageURL: "/projects/e_learning.webp",
		githubURL:
			"https://github.com/dehelean-catalin/react-express-e-learning-app",
		demoURL: "https://www.youtube.com/watch?v=H7NIkVRMfHQ",
		projectURL: null,
		skills: ["React", "TypeScript", "Express", "Google Cloud", "Deepgram API"],
	},
	{
		name: "Coach AI",
		description:
			"CoachAi's mission is to help people achieve their dream physique by providing a personalized fitness journey that can replace a personal trainer. I built this product using React-native and Redux, focusing on offline functionalities and Spring Boot with PostgreSQL on the backend.",
		imageURL: "/projects/couch_ai.webp",
		githubURL: "https://github.com/dehelean-catalin/CouchAi",
		demoURL: null,
		projectURL: null,
		skills: ["React Native", "Expo", "TypeScript", "Spring Boot", "PostgreSQL"],
	},
	{
		name: "Next Dashboard",
		description:
			"An introductory Next Js and Tailwind css project to learn basic concepts like automatic routing, server side rendering and prefetching.",
		imageURL: "/projects/next_dashboard.png",
		githubURL: "https://github.com/dehelean-catalin/NextJs-Dashboard",
		demoURL: null,
		projectURL:
			"https://next-js-dashboard-jm0gcfyem-dehelean-rares-catalins-projects.vercel.app/dashboard",
		skills: ["Next Js", "Tailwind CSS", "PostgreSQL"],
	},
	{
		name: "Digital Classroom",
		description:
			"Digital Classroom is a modern solution for the SINU platform with a focus on user experience and grade distribution.",
		imageURL: "/projects/digital_classroom.webp",
		githubURL: "https://github.com/dehelean-catalin/Digital_Classroom",
		demoURL: null,
		projectURL: null,
		skills: ["React", "ASP .NET", "SQL Server"],
	},
];
