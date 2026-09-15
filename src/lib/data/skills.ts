export interface SkillCategory {
	header: string;
	skills: string[];
}

export const skills: SkillCategory[] = [
	{
		header: 'ux design',
		skills: ['user experience (ux)', 'interaction design', 'user research', 'usability testing', 'prototyping', 'user flows']
	},
	{
		header: 'design engineering',
		skills: ['design engineering', 'design strategy', 'knowledge management']
	},
	{
		header: 'marketing & automation',
		skills: ['marketing automation', 'adobe campaign classic/standard', 'adobe experience cloud', 'branding', 'marketing campaigns']
	},
	{
		header: 'tools & workflows',
		skills: ['figma', 'jira', 'confluence', 'scrum / agile']
	}
];
