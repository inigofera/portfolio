<script lang="ts">
	import { site } from '../lib/data/site';
	import { projects, FEATURED_PROJECT_COUNT } from '../lib/data/projects';
	import ProjectCard from '../lib/components/ProjectCard.svelte';
	import StatusDot from '../lib/components/StatusDot.svelte';

	const featuredProjects = projects.slice(0, FEATURED_PROJECT_COUNT);

	const HERO_IMAGE = '/actionshot.jpg';
</script>

<svelte:head>
	<title>{site.name} | UX Engineer</title>
	<link rel="preload" as="image" href={HERO_IMAGE} />
</svelte:head>

<!-- Hero -->
<section class="relative -mt-8 mb-16 w-[100vw] max-h-[100svh] left-1/2 -translate-x-1/2 overflow-hidden" style:aspect-ratio="3 / 2">
	<img
		src={HERO_IMAGE}
		alt="Action shot"
		class="absolute inset-0 w-full h-full object-cover"
		draggable={false}
	/>
	<div class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

	<div class="absolute inset-x-0 bottom-0">
		<div class="max-w-5xl mx-auto px-6 pb-16">
			<div class="flex items-center gap-2 mb-4">
				<span class="font-mono text-xs tracking-widest uppercase text-white/70">{site.roleLabel}</span>
				<StatusDot status="active" />
			</div>
			<h1 class="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">{site.name}</h1>
			<p class="text-lg text-white/80 max-w-2xl leading-relaxed">{site.bioShort}</p>

			<div class="flex items-center gap-4 mt-8">
				<a href={site.githubUrl} target="_blank" rel="noopener noreferrer" class="font-mono text-sm tracking-wide text-accent hover:underline">GitHub</a>
				<a href={`mailto:${site.email}`} class="font-mono text-sm tracking-wide text-accent hover:underline">Email</a>
			</div>
		</div>
	</div>

	<div class="absolute bottom-0 right-0 hidden sm:flex flex-col items-end gap-1 px-5 py-4 pointer-events-none">
		<span class="font-mono text-xs tracking-widest text-white/60">// action shot</span>
		<span class="font-mono text-xs tracking-wide text-white/40">ILCE-7M4 · 7008 × 4672</span>
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
