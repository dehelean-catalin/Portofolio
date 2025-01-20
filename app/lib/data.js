export const EXPERTISE = [
	{
		title: "Software Engineer",
		subtitle: "Java, AWS",
		description:
			"Experienced in data design and real time application architecture.",
		icon: "computer",
	},
	{
		title: "Full-Stack Dev",
		subtitle: "React, Spring Boot",
		description:
			"Over 2 years of professional experience in building and maintaining applications using React, Spring Boot and AWS",
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
		title: "Software Engineer",
		company: "Betfair",
		companyURL: "https://www.betfair.ro",
		period: "Mar 2024 - Current",
		descriptions: [
			"Collaborated with risk and trading teams to develop multiple applications that help traders and managers to identify potential" +
			"money losses and generate better odds.",
			"Migrated a project that monitors bets and issues alerts in real time if odds are incorrect or bet selections become too popular and" +
			"exceed risk thresholds." ,
			"Built front-end architecture, designed back-end and data workflows that process and group bets in real time."
		],
		projects: [],
		skills: ["Java", "SQL", "Spring Boot", "AWS", "Kafka"],
	},
	{
		title: "Frontend Developer",
		company: "IT Perspectives",
		companyURL: "https://www.itperspectives.ro",
		period: "Aug 2022 - Apr 2023",
		descriptions: [
			"Contributed to the development of an international SaaS product, that enhance document management processes, saving up to 8 mins per document for over 30 construction companies.",
			"Collaborated in the development of the desktop version of the app, implementing compatible features for both platforms, using React, TypeScript and Redux.",
			"Rebuilt the core UI components and fixed technical issues within our UI library, resulting in better code reuse and maintenance."
		],
		projects: [{ name: "Sequello", url: "https://sequello.com/en/" }],
		skills: [
			"React",
			"TypeScript",
			"Redux",
			"Primefaces",
			"SCSS",
		],
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
