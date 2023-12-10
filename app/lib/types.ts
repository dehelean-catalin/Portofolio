export type Expertise = {
	title: string;
	subtitle: string;
	description: string;
	icon: string;
};

export type Project = {
	name: string;
	description: string;
	imageURL: string;
	githubURL: string;
	demoURL: string | null;
	projectURL: string | null;
	skills: string[];
};

export type Experience = {
	title: string;
	company: string;
	companyURL: string;
	period: string;
	descriptions: string[];
	projects: ExperienceProject[];
	skills: string[];
};

type ExperienceProject = {
	name: string;
	url: string;
};
