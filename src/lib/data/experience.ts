export interface Experience {
	role: string;
	company: string;
	dates: string;
	type?: string;
	location?: string;
	summary?: string;
	description: string[];
}

export const experience: Experience[] = [
	{
		role: 'UX Engineer',
		company: 'Fizyr',
		type: 'Full-time',
		location: 'Delft, Netherlands',
		dates: 'Jun 2025 — Present',
		description: [
			'Bridging the gap between design and development by engineering robust, scalable UI components for Fizyr OS and operator interfaces.',
			'Designing and implementing intuitive dashboards and configuration tools that simplify human-robot interaction on the warehouse floor.',
			'Analyzing user feedback and interaction data to streamline complex workflows for deploying and monitoring automated robotic cells.'
		]
	},
	{
		role: 'UX Designer',
		company: 'Salesdock',
		type: 'Full-time',
		location: 'Enschede, Netherlands',
		dates: 'Dec 2022 — Jun 2025',
		summary: 'Multi-platform CRM platform oriented to sales.',
		description: [
			'Executing all aspects of the design process, be it research or design.',
			'Analyzing and planning the strategy of the design team and working on increasing the UX maturity of the company as a whole.',
			'In charge of the Knowledge Management aspect both externally as a platform and for internal use.'
		]
	},
	{
		role: 'Junior UX Researcher',
		company: 'Awaves',
		location: 'Enschede, Netherlands',
		dates: 'Jun 2022 — Dec 2022',
		description: [
			'Designing and conducting user research studies to understand the target audience.',
			'Analyzing user data and feedback to validate and enhance the existing product.',
			'Working with other engineers and designers to create new features for the product.',
			'Creating prototypes and user flows that capture user expectations and alleviate their pains.'
		]
	},
	{
		role: 'UX Research Intern — Personal Knowledge Management',
		company: 'RemNote',
		type: 'Internship',
		location: 'Berlin, Germany',
		dates: 'Feb 2022 — Oct 2022',
		description: [
			'Carrying out extensive qualitative user interaction research in collaboration with other researchers and designers to detect usability flaws.',
			'Giving nuance to target audiences for the core product through context-of-use research.',
			'Output paper: "From Personal Knowledge to Community Knowledge: Stimulating Knowledge Sharing among Student Groups in Knowledge Management Platforms through Interaction Design".'
		]
	},
	{
		role: 'Marketing Automation Intern',
		company: 'Accenture Song',
		type: 'Internship',
		location: 'Madrid, Spain',
		dates: 'Sep 2020 — Jul 2021',
		description: [
			'Worked hand in hand with a Digital Business Integration Consultant.',
			'Specialized in Adobe Campaign Classic/Standard.',
			"Gained expertise with Adobe's Marketing and Experience Cloud.",
			'Worked with Scrum/Agile frameworks (Jira, Confluence).'
		]
	},
	{
		role: 'Chairman',
		company: 'Hive01 Enschede',
		location: 'Greater Enschede Area, Netherlands',
		dates: 'Jan 2020 — Aug 2020',
		description: [
			'Leading and managing a culturally, ideologically and religiously diverse team.',
			'Planning of big picture strategy and responsibility of compliance with long-term goals.',
			'Organizing and distributing workloads and seeking synergies between subordinates.',
			'Controlling and supervising the quality of the program.'
		]
	},
	{
		role: 'Head of Marketing',
		company: 'Hive01 Enschede',
		location: 'Greater Enschede Area, Netherlands',
		dates: 'Jan 2020 — Aug 2020',
		description: [
			'In charge of Marketing and Branding in Hive01 Enschede.',
			'Design and implementation of full marketing campaigns to promote the program and different events.',
			'In charge of both digital and physical marketing as well as the company image and branding.'
		]
	},
	{
		role: 'Winner, Season 5',
		company: 'Hive01 Enschede',
		type: 'Program award',
		location: 'Enschede, Netherlands',
		dates: 'Feb 2019 — Jul 2019',
		description: [
			'Participated in the Hive01 Enschede program, working on an eHealth app for the early detection and diagnosis of mental health problems among students and young adults.',
			'Presented the idea and business model in front of investors and was given the "Best Startup Idea" award.'
		]
	}
];
