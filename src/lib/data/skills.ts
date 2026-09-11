export interface SkillCategory {
	header: string;
	skills: string[];
}

export const skills: SkillCategory[] = [
	{
		header: 'ux design',
		skills: ['interaction design', 'user research', 'usability testing', 'design systems', 'accessibility']
	},
	{
		header: 'frontend engineering',
		skills: ['react', 'vue', 'svelte', 'typescript', 'css', 'html']
	},
	{
		header: 'visualization',
		skills: ['d3.js', 'chart libraries', 'data visualization', 'svg manipulation']
	},
	{
		header: 'tools & workflows',
		skills: ['figma', 'prototyping', 'version control', 'component architecture', 'design tokens']
	}
];