import { getProjectBySlug } from '../../../lib/data/projects';
import type { PageLoad } from './$types';
import { renderMarkdown, getAllImages, wrapImagesInButtons } from '../../../lib/utils/markdown';
import { getProjectContent } from '../../../lib/content';

export const load: PageLoad = async ({ params }) => {
	const slug = params.slug ?? '';
	const project = getProjectBySlug(slug);

	if (!project) {
		return { project: null };
	}

	// Load detailed content if available for this project
	let html = undefined;
	let images: string[] = [];
	const content = getProjectContent(slug);
	if (project.hasDetailedContent && content) {
		html = wrapImagesInButtons(renderMarkdown(content));
		images = getAllImages(content);
	}

	return { project, html, images };
}