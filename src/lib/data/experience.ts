export interface Experience {
	role: string;
	company: string;
	dates: string;
	description: string[];
}

export const experience: Experience[] = [
	{
		role: 'UX Engineer',
		company: 'Independent Consultant',
		dates: '2024-present',
		description: [
			'Consulting for startups and product teams on design system architecture, component library development, and interaction patterns.',
			'Focus areas include accessible interfaces, responsive layouts, and data visualization tools.'
		]
	},
	{
		role: 'Senior UX Engineer',
		company: 'DataScale AI',
		dates: '2021-2024',
		description: [
			'Led development of user-facing dashboards and analytics tools. Designed and implemented A/B testing infrastructure for UX evaluation.',
			'Mentored junior engineers on accessibility best practices, component architecture, and experimental design.'
		]
	},
	{
		role: 'UX Engineer',
		company: 'NLP Labs Amsterdam',
		dates: '2019-2021',
		description: [
			'Built interactive tools for document processing and information extraction. Worked on responsive web interfaces with emphasis on accessibility.',
			'Contributed to open-source component libraries including custom interaction patterns and efficient rendering utilities.'
		]
	}
];