import { markdown as buylocal } from './buylocal';
import { markdown as cashpool } from './cashpool';
import { markdown as shoppersmap } from './shoppersmap';
import { markdown as buylocalDesignSystem } from './buylocal_design_system';

/** Detailed case-study markdown, keyed by project slug. */
export const projectContent: Record<string, string> = {
	buylocal,
	cashpool,
	shoppersmap,
	'buylocal-design-system': buylocalDesignSystem
};

export function getProjectContent(slug: string): string | undefined {
	return projectContent[slug];
}
