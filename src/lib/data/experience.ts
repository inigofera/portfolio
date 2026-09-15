export interface Experience {
	role: string;
	company: string;
	dates: string;
	location?: string;
	description: string[];
}

export const experience: Experience[] = [
	{
		role: 'User Experience Engineer',
		company: 'Fizyr',
		dates: 'Jun 2025 - Present',
		location: 'Delft, South Holland, Netherlands',
		description: [
			'Designing and engineering interfaces for robotics vision software, turning complex perception data into clear, usable tools.',
			'Working closely with computer vision engineers to shape how camera feeds, models, and detection results are presented to end users.',
			'Balancing real-time performance constraints with usability when designing interactive visualizations for live video streams.'
		]
	},
	{
		role: 'UX Designer',
		company: 'Salesdock',
		dates: 'Dec 2022 - Jun 2025',
		location: 'Enschede, Overijssel, Netherlands',
		description: [
			'Multi-platform CRM platform oriented to sales.',
			'Executing all aspects of the design process, be it research or design.',
			'Analyzing and planning the strategy of the design team and working on increasing the UX maturity of the company as a whole.',
			'In charge of the Knowledge Management aspect both externally as a platform and for internal use.'
		]
	},
	{
		role: 'Junior UX Researcher',
		company: 'Awaves',
		dates: 'Jun 2022 - Dec 2022',
		location: 'Enschede, Overijssel, Netherlands',
		description: [
			'Designing and conducting User Research studies to understand the target audience.',
			'Analyzing user data and feedback to validate and enhance the existing product.',
			'Working with other engineers and designers to create new features for the product.',
			'Creating prototypes and user flows that capture user expectations and alleviate their pains.'
		]
	},
	{
		role: 'UX Research Intern, Personal Knowledge Management',
		company: 'RemNote',
		dates: 'Feb 2022 - Oct 2022',
		location: 'Berlin, Germany',
		description: [
			'Carrying out extensive qualitative user interaction research in collaboration with other researchers and designers to detect usability flaws.',
			'Giving nuance to target audiences for the core product through context-of-use research.',
			'Output paper: "From Personal Knowledge to Community Knowledge: Stimulating Knowledge Sharing among Student Groups in Knowledge Management Platforms through Interaction Design".'
		]
	},
	{
		role: 'Marketing Automation Intern',
		company: 'Accenture Song',
		dates: 'Sep 2020 - Jul 2021',
		location: 'Madrid, Community of Madrid, Spain',
		description: [
			'Worked hand in hand with a Digital Business Integration Consultant.',
			'Specialized in Adobe Campaign Classic/Standard.',
			'Gained expertise with Adobe\'s Marketing and Experience Cloud.',
			'Worked with Scrum/Agile frameworks (Jira, Confluence).'
		]
	},
	{
		role: 'Chairman & Head of Marketing',
		company: 'Hive01 Enschede',
		dates: 'Jan 2020 - Aug 2020',
		location: 'Greater Enschede Area',
		description: [
			'Leading and managing a culturally, ideologically and religiously diverse team.',
			'Planning of big picture strategy and responsibility of compliance with long-term goals.',
			'Organizing and distributing workloads and seeking synergies between subordinates.',
			'Controlling and supervising the quality of the program.',
			'In charge of Marketing and Branding: design and implementation of full marketing campaigns to promote the program and different events, across digital and physical channels, as well as the company image and branding.'
		]
	},
	{
		role: 'Winner Season 5, "Best Startup Idea"',
		company: 'Hive01 Enschede',
		dates: 'Feb 2019 - Jul 2019',
		location: 'Enschede, Overijssel, Netherlands',
		description: [
			'Participated in the Hive01 Enschede program, working on an eHealth app for the early detection and diagnosis of Mental Health problems among students and young adults.',
			'Presented my idea and business model in front of investors and was given the "Best Startup Idea" award.'
		]
	}
];
