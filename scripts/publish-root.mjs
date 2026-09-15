import { cpSync, readdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
const buildDirectory = resolve(projectRoot, 'build');

for (const entry of readdirSync(buildDirectory)) {
	const source = resolve(buildDirectory, entry);
	const destination = resolve(projectRoot, entry);
	rmSync(destination, { recursive: true, force: true });
	cpSync(source, destination, { recursive: true });
}

console.log('Published static site to the project root.');
