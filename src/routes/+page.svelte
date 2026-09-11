<script lang="ts">
	import { site } from '../lib/data/site';
	import { projects, FEATURED_PROJECT_COUNT } from '../lib/data/projects';
	import ProjectCard from '../lib/components/ProjectCard.svelte';
	import SectionLabel from '../lib/components/SectionLabel.svelte';
	import StatusDot from '../lib/components/StatusDot.svelte';

	const featuredProjects = projects.slice(0, FEATURED_PROJECT_COUNT);
</script>

<svelte:head>
	<title>{site.name} — ML Engineer</title>
</svelte:head>

<!-- Hero -->
<section class="mb-16">
	<div class="flex items-center gap-2 mb-4">
		<SectionLabel>{site.roleLabel}</SectionLabel>
		<StatusDot status="active" />
	</div>
	<h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">{site.name}</h1>
	<p class="text-lg text-muted-foreground max-w-2xl leading-relaxed">{site.bioShort}</p>

	<div class="flex items-center gap-4 mt-8">
		<a href={site.githubUrl} target="_blank" rel="noopener noreferrer" class="font-mono text-sm tracking-wide text-accent hover:underline">GitHub</a>
		<a href={`mailto:${site.email}`} class="font-mono text-sm tracking-wide text-accent hover:underline">Email</a>
	</div>
</section>

<!-- Featured Projects -->
<section>
	<div class="flex items-center justify-between mb-6">
		<h2 class="text-2xl font-bold">Featured Projects</h2>
		<a href="/projects" class="font-mono text-sm tracking-wide text-muted-foreground hover:text-accent transition-colors duration-150">All projects →</a>
	</div>

	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each featuredProjects as project}
			<ProjectCard project={project} />
		{/each}
	</div>
</section>