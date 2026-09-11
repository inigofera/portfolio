export interface Project {
	slug: string;
	title: string;
	year: number;
	status: 'active' | 'completed' | 'archived';
	tags: string[];
	description: string[];
	demo?: string;
}

export const projects: Project[] = [
	{
		slug: 'design-system-architecture',
		title: 'Design System Architecture',
		year: 2025,
		status: 'active',
		tags: ['design systems', 'component library', 'accessibility'],
		description: [
			'Architectural patterns for scalable design systems. Explores token-based theming, component composition strategies, and documentation-driven development.',
			'Benchmarked against industry standards including Material Design and Ant Design. Achieves consistent visual language across web and mobile platforms.'
		],
		demo: 'component-explorer'
	},
	{
		slug: 'data-visualization-toolkit',
		title: 'Data Visualization Toolkit',
		year: 2025,
		status: 'active',
		tags: ['visualization', 'd3', 'interactive charts'],
		description: [
			'Browser-based visualization toolkit using D3 and SVG. Supports dynamic data binding, responsive layouts, and accessible chart types.',
			'Designed for embedding in analytics dashboards with emphasis on performance and interaction patterns.'
		],
		demo: 'chart-explorer'
	},
	{
		slug: 'ux-case-study-ecommerce',
		title: 'E-commerce UX Case Study',
		year: 2024,
		status: 'completed',
		tags: ['case study', 'user research', 'conversion optimization'],
		description: [
			'Systematic study of checkout flow usability across multiple e-commerce platforms. Analyzes friction points, cognitive load, and conversion metrics.',
			'Findings suggest that progressive disclosure reduces abandonment rates while maintaining perceived simplicity.'
		]
	},
	{
		slug: 'responsive-layout-system',
		title: 'Responsive Layout System',
		year: 2024,
		status: 'completed',
		tags: ['css', 'grid', 'flexbox'],
		description: [
			'Layout system for complex responsive interfaces. Implements CSS Grid and Flexbox patterns with fallback strategies for legacy browsers.',
			'Used to evaluate layout stability under varying content lengths and viewport sizes.'
		]
	},
	{
		slug: 'ux-case-study-mobile-app',
		title: 'Mobile App UX Case Study',
		year: 2023,
		status: 'archived',
		tags: ['case study', 'mobile', 'interaction design'],
		description: [
			'Mobile interaction patterns for task-oriented applications. Explores gesture-based navigation and touch target optimization.',
			'Explored instruction-tuning strategies to improve answer coherence and reduce hallucination on out-of-distribution questions.'
		]
	},
	{
		slug: 'visual-software-prototyping',
		title: 'Visual Software Prototyping',
		year: 2023,
		status: 'archived',
		tags: ['prototyping', 'figma', 'interaction design'],
		description: [
			'Prototyping workflow for rapid visual software iteration. Explored component-based design with live preview and version control.',
			'Resulting prototypes achieve competitive fidelity at significantly reduced development time.'
		]
	}
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find(p => p.slug === slug);
}

export const FEATURED_PROJECT_COUNT = 3;