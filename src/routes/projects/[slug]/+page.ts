import { getProjectBySlug } from '../../../lib/data/projects';
import type { PageLoadEvent } from '@sveltejs/kit';
import { renderMarkdown } from '../../../lib/utils/markdown';
import { getProjectContent } from '../../../lib/content';

export async function load({ params }: PageLoadEvent) {
	const slug = params.slug ?? '';
	const project = getProjectBySlug(slug);

	if (!project) {
		return { project: null };
	}

	// Load detailed content if available for this project
	let html = undefined;
	const content = getProjectContent(slug);
	if (project.hasDetailedContent && content) {
		html = renderMarkdown(content);
	}

	return { project, html };
}