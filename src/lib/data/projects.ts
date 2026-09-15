export interface Project {
	slug: string;
	title: string;
	thumbnail: string;
	year: number;
	status: 'active' | 'completed' | 'archived';
	tags: string[];
	description: string[];
	demo?: string;
	hasDetailedContent?: boolean;
}

export const projects: Project[] = [
	{
		slug: 'buylocal',
		title: 'BuyLocal',
		thumbnail: '/work/thumbs/buylocal.webp',
		year: 2020,
		status: 'completed',
		tags: ['case study', 'hyperlocal delivery', 'user research'],
		description: [
			'Hyperlocal delivery solution to help customers buy products from nearby stores and supermarkets easily while supporting the local economy.',
			'Developed during the pandemic when local businesses struggled due to lockdowns. Envisions a way for people to be digitally connected to local businesses with the same convenience as big corporations.'
		],
		hasDetailedContent: true
	},
	{
		slug: 'cashpool',
		title: 'CashPool',
		thumbnail: '/work/thumbs/cashpool.webp',
		year: 2019,
		status: 'completed',
		tags: ['case study', 'money pooling', 'group finance'],
		description: [
			'Money pooling app that lets users create groups and pool money towards shared goals with easy and transparent bookkeeping.',
			'Followed design thinking process including focus group workshops, individual interviews, user journey mapping, and iterative prototyping.'
		],
		hasDetailedContent: true
	},
	{
		slug: 'shoppersmap',
		title: 'ShoppersMap',
		thumbnail: '/work/thumbs/shoppersmap.webp',
		year: 2019,
		status: 'completed',
		tags: ['case study', 'supermarket navigation', 'shared shopping'],
		description: [
			'Engaging new way for users to shop at their supermarket with shared shopping lists and in-store navigation.',
			'Solves problems of group shopping coordination, item location, and efficient collection through user research and design sprint methodology.'
		],
		hasDetailedContent: true
	},
	{
		slug: 'buylocal-design-system',
		title: 'BuyLocal Design System',
		thumbnail: '/work/thumbs/buylocal-design-system.webp',
		year: 2020,
		status: 'completed',
		tags: ['design system', 'mobile design', 'component library'],
		description: [
			'Mobile design system created as part of the BuyLocal application.',
			'Establishes consistent visual language and component patterns for the hyperlocal delivery platform.'
		],
		hasDetailedContent: true
	}
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find(p => p.slug === slug);
}

export const FEATURED_PROJECT_COUNT = 3;