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
 * Returns the `src` of every image in a markdown document, in order of appearance.
 */
export function getAllImages(text: string): string[] {
	return [...text.matchAll(/!\[[^\]]*\]\(\s*<?([^)\s>]+)/g)].map(m => m[1]);
}

/**
 * Wraps every image in a button so it is focusable and can be activated from the keyboard.
 */
export function wrapImagesInButtons(html: string): string {
	return html.replace(/<img [^>]*>/g, '<button type="button" class="case-study-image">$&</button>');
}

export function renderMarkdown(text: string): string {
	// Remove the trailing newline that markdown-it adds.
	// Styling is handled by the `.case-study-content` rules in `app.css`.
	return md.render(text).trim();
}