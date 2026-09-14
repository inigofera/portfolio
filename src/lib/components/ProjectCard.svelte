<script lang="ts">
	import type { Project } from '../data/projects';
	import StatusDot from './StatusDot.svelte';
	import Tag from './Tag.svelte';

	let { project, thumbnail }: { project: Project; thumbnail?: string } = $props();
</script>

<a
	href={`/projects/${project.slug}`}
	class="group flex flex-col overflow-hidden rounded-[0.75rem] border border-border bg-card transition-colors duration-150 hover:border-accent"
>
	{#if thumbnail}
		<div class="aspect-square shrink-0 overflow-hidden border-b border-border bg-muted">
			<img
				src={thumbnail}
				alt={`Preview of ${project.title}`}
				loading="lazy"
				decoding="async"
				class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
			/>
		</div>
	{/if}

	<div class="flex flex-1 flex-col p-6">
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

		<div class="flex flex-wrap gap-1 mt-auto pt-4">
			{#each project.tags as tag}
				<Tag label={tag} />
			{/each}
		</div>
	</div>
</a>