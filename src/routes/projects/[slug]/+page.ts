import { getProjectBySlug } from '../../../lib/data/projects';
import type { PageLoadEvent } from '@sveltejs/kit';

export async function load({ params }: PageLoadEvent) {
	const slug = params.slug ?? '';
	const project = getProjectBySlug(slug);

	if (!project) {
		return { project: null };
	}

	return { project };
}