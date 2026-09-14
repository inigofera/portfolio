<script lang="ts">
	import { projects } from '../../lib/data/projects';
	import { projectThumbnails } from '../../lib/content';
	import ProjectCard from '../../lib/components/ProjectCard.svelte';
	import SectionLabel from '../../lib/components/SectionLabel.svelte';
</script>

<svelte:head>
	<title>Projects — Iñigo Artolozaga</title>
</svelte:head>

<section class="mb-16">
	<SectionLabel>Work</SectionLabel>
	<h1 class="text-4xl md:text-5xl font-bold leading-tight mt-2 mb-4">Projects</h1>
	<p class="text-lg text-muted-foreground max-w-2xl leading-relaxed">Selected work spanning design systems, data visualization, and UX research.</p>
</section>

<section>
	<div class="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2">
		{#each projects as project}
			<ProjectCard project={project} thumbnail={projectThumbnails[project.slug]} />
		{/each}
	</div>
</section>