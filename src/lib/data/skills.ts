export interface SkillCategory {
	header: string;
	skills: string[];
}

export const skills: SkillCategory[] = [
	{
		header: 'ux design',
		skills: ['interaction design', 'design systems', 'user flows', 'prototyping', 'visual design']
	},
	{
		header: 'design engineering',
		skills: ['ui components', 'component libraries', 'design tokens', 'typescript', 'html & css', 'accessibility']
	},
	{
		header: 'research & strategy',
		skills: ['user research', 'usability testing', 'contextual inquiry', 'journey mapping', 'design sprints', 'ux maturity']
	},
	{
		header: 'knowledge management',
		skills: ['knowledge sharing', 'information architecture', 'documentation', 'internal platforms']
	},
	{
		header: 'human-robot interaction',
		skills: ['operator interfaces', 'configuration tooling', 'dashboards', 'workflow analysis']
	},
	{
		header: 'marketing automation',
		skills: ['adobe campaign classic', 'adobe experience cloud', 'jira', 'confluence', 'scrum/agile']
	}
];
