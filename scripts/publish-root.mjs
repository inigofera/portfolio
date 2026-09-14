import { cpSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
const buildDirectory = resolve(projectRoot, 'build');

for (const entry of readdirSync(buildDirectory)) {
	cpSync(resolve(buildDirectory, entry), resolve(projectRoot, entry), { recursive: true });
}

console.log('Published static site to the project root.');
