import fs from 'node:fs';
import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';

const contentDir = new URL('../src/lib/content/', import.meta.url);
const files = ['buylocal.ts', 'cashpool.ts', 'shoppersmap.ts', 'buylocal_design_system.ts'];

// Same slugify as src/lib/utils/markdown.ts
function githubSlugify(text) {
	return text
		.toLowerCase()
		.replace(/[&]/g, '-')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^[-]+|[-]+$/g, '');
}

let overall = true;

for (const file of files) {
	const src = fs.readFileSync(new URL(file, contentDir), 'utf8');
	const mdText = src.slice(src.indexOf('`') + 1, src.lastIndexOf('`'));

	// Same pipeline as src/lib/utils/markdown.ts
	const md = new MarkdownIt({ html: true, breaks: true, linkify: true, typographer: true }).use(anchor, {
		slugify: githubSlugify
	});
	const html = md.render(mdText);
	const headings = [...html.matchAll(/<h([1-6])[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g)].map((m) => ({
		level: Number(m[1]),
		id: m[2],
		text: m[3].replace(/<[^>]+>/g, '').trim()
	}));

	const anchors = [...mdText.matchAll(/\]\(#([^)]+)\)/g)].map((m) => m[1]);
	const ids = headings.map((h) => h.id);
	const dupes = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
	const idSet = new Set(ids);
	const missing = anchors.filter((a) => !idSet.has(a));
	const maxLevel = headings.length ? Math.max(...headings.map((h) => h.level)) : 0;
	const pass = missing.length === 0 && dupes.length === 0;
	overall = overall && pass;

	console.log(`\n=== ${file} ===`);
	console.log(headings.map((h) => `${'#'.repeat(h.level)} ${h.text}  ->  #${h.id}`).join('\n'));
	console.log(
		`anchors=${anchors.length}  maxDepth=${maxLevel}  dupes=${dupes.length ? dupes.join(', ') : 'none'}  missing=${missing.length ? missing.join(', ') : 'none'}  =>  ${pass ? 'PASS' : 'FAIL'}`
	);
}

console.log(`\nOVERALL: ${overall ? 'PASS' : 'FAIL'}`);
