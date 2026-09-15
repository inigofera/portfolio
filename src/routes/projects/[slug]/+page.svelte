<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import SectionLabel from '../../../lib/components/SectionLabel.svelte';
	import StatusDot from '../../../lib/components/StatusDot.svelte';
	import Tag from '../../../lib/components/Tag.svelte';
	import Lightbox from '../../../lib/components/Lightbox.svelte';

	const project = page.data.project;
	const html = page.data.html;
	const images = page.data.images ?? [];

	let lightboxIndex = $state<number | null>(null);
	let contentEl: HTMLDivElement | undefined = $state();

	onMount(() => {
		const el = contentEl;
		if (!el) return;
		const handleClick = (e: MouseEvent) => {
			const button = (e.target as Element | null)?.closest('button.case-study-image');
			const img = button?.querySelector('img');
			if (!img) return;
			const i = images.indexOf(img.getAttribute('src') ?? '');
			if (i !== -1) lightboxIndex = i;
		};
		el.addEventListener('click', handleClick);
		return () => el.removeEventListener('click', handleClick);
	});
</script>

<svelte:head>
	<title>{project ? `${project.title} | Iñigo Artolozaga` : 'Project not found'}</title>
</svelte:head>

{#if !project}
	<section class="mb-16">
		<h1 class="text-4xl font-bold mb-4">Project not found</h1>
		<p class="text-muted-foreground">The requested project does not exist.</p>
	</section>
{:else}
	<!-- Back link -->
	<a href="/projects" class="font-mono text-sm tracking-wide text-muted-foreground hover:text-accent transition-colors duration-150 mb-8 inline-block">← All projects</a>

	<section class="mb-16">
		<div class="flex items-center gap-2 mb-4">
			<StatusDot status={project.status} />
			<span class="font-mono text-xs tracking-wide text-muted-foreground">{project.year}</span>
		</div>

		<h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">{project.title}</h1>

		<div class="flex flex-wrap gap-2 mb-8">
			{#each project.tags as tag}
				<Tag label={tag} />
			{/each}
		</div>

		<!-- Render detailed HTML content if available -->
		{#if html}
			<div class="case-study-content" bind:this={contentEl}>{@html html}</div>
		{:else}
			{#each project.description as paragraph}
				<p class="text-lg leading-relaxed text-muted-foreground mb-4">{paragraph}</p>
			{/each}
		{/if}
	</section>

	{#if lightboxIndex !== null}
		<Lightbox
			images={images}
			index={lightboxIndex}
			onclose={() => (lightboxIndex = null)}
			onnavigate={i => (lightboxIndex = i)}
		/>
	{/if}
{/if}
