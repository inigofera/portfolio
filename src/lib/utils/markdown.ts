import MarkdownIt from 'markdown-it';
import anchorPlugin from 'markdown-it-anchor';

const md = new MarkdownIt({
	html: true,
	breaks: true,
	linkify: true,
	typographer: true
});

// Custom slugify to match GitHub-style slugs (no URL encoding of special chars)
function githubSlugify(text: string): string {
	return text
		.toLowerCase()
		.replace(/[&]/g, '-')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^[-]+|[-]+$/g, '');
}

md.use(anchorPlugin, { slugify: githubSlugify });

/**
 * Returns the `src` of the first image in a markdown document, if there is one.
 * Used to derive project thumbnails from the case-study content.
 */
export function getFirstImage(text: string): string | undefined {
	return text.match(/!\[[^\]]*\]\(\s*<?([^)\s>]+)/)?.[1];
}

export function renderMarkdown(text: string): string {
	// Remove the trailing newline that markdown-it adds.
	// Styling is handled by the `.case-study-content` rules in `app.css`.
	return md.render(text).trim();
}