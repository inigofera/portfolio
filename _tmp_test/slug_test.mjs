import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({ html: true, breaks: true, linkify: true, typographer: true });

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

let usedSlugs = new Set();

md.renderer.rules['heading_open'] = function (tokens, i) {
  const token = tokens[i];
  // Standard pattern: heading text is in the following inline token's raw content.
  let rawText = '';
  for (let j = i + 1; j < tokens.length && tokens[j].type !== 'heading_close'; j++) {
    if (tokens[j].content) rawText += tokens[j].content;
  }
  const base = slugify(rawText);
  let slug = base;
  let count = usedSlugs.has(base) ? 1 : 0;
  while (usedSlugs.has(slug)) {
    count++;
    slug = `${base}-${count}`;
  }
  usedSlugs.add(slug);
  return `<${token.tag} id="${slug}">`;
};

function renderMarkdown(text) {
  usedSlugs = new Set(); // reset per document
  return md.render(text);
}

const { markdown } = await import('../src/lib/content/buylocal.ts');
const html = renderMarkdown(markdown);

const idMatches = [...html.matchAll(/<h(\d) id="([^"]+)"/g)];
console.log('Total headings with IDs:', idMatches.length);

const ids = idMatches.map(m => m[2]);
const dupes = ids.filter((id, idx) => ids.indexOf(id) !== idx);
console.log('Duplicate IDs (should be none):', [...new Set(dupes)]);

const tocAnchors = [];
for (const line of markdown.split('\n')) {
  const m = line.match(/\]\(#([^)]+)\)/);
  if (m) tocAnchors.push(m[1]);
}
console.log('TOC anchors count:', tocAnchors.length);

const idSet = new Set(ids);
const missing = tocAnchors.filter(a => !idSet.has(a));
console.log('Missing TOC targets:', missing);
console.log('All TOC anchors resolve:', missing.length === 0 ? 'YES' : 'NO');

console.log('\nSample heading IDs:');
for (const m of idMatches.slice(0, 30)) {
  console.log(`  h${m[1]} -> ${m[2]}`);
}
