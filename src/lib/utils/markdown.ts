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

export function renderMarkdown(text: string): string {
	// Remove the trailing newline that markdown-it adds.
	// Styling is handled by the `.case-study-content` rules in `app.css`.
	return md.render(text).trim();
}