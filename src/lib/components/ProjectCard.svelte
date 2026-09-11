<script lang="ts">
	import type { Project } from '../data/projects';
	import StatusDot from './StatusDot.svelte';
	import Tag from './Tag.svelte';

	let { project }: { project: Project } = $props();
</script>

<a href={`/projects/${project.slug}`} class="block group">
	<div class="bg-card border border-border rounded-[0.75rem] p-6 transition-colors duration-150 hover:border-accent">
		<div class="flex items-center gap-2 mb-3">
			<StatusDot status={project.status} />
			<span class="font-mono text-xs tracking-wide text-muted-foreground">{project.year}</span>
		</div>

		<h3 class="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-150">
			{project.title}
		</h3>

		<p class="text-sm text-muted-foreground leading-relaxed line-clamp-2">
			{project.description[0]}
		</p>

		<div class="flex flex-wrap gap-1 mt-4">
			{#each project.tags as tag}
				<Tag label={tag} />
			{/each}
		</div>
	</div>
</a>