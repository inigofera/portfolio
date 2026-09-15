<script lang="ts">
	import { site } from '../../lib/data/site';
	import { experience } from '../../lib/data/experience';
	import { education } from '../../lib/data/education';
	import { skills } from '../../lib/data/skills';
	import SectionLabel from '../../lib/components/SectionLabel.svelte';
	import StatusDot from '../../lib/components/StatusDot.svelte';
	import Tag from '../../lib/components/Tag.svelte';

	const ABOUT_IMAGE = '/anotherpic.jpg';
</script>

<svelte:head>
	<title>About | Iñigo Artolozaga</title>
	<link rel="preload" as="image" href={ABOUT_IMAGE} />
</svelte:head>

<!-- Hero -->
<section class="relative -mt-8 mb-16 w-[100vw] max-h-[100svh] left-1/2 -translate-x-1/2 overflow-hidden" style:aspect-ratio="3 / 2">
	<img
		src={ABOUT_IMAGE}
		alt="About"
		class="absolute inset-0 w-full h-full object-cover"
		draggable={false}
	/>
	<div class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
	<div class="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-black/80 via-black/40 to-transparent lg:block"></div>

	<div class="absolute inset-x-0 bottom-0">
		<div class="max-w-5xl mx-auto px-6 pb-16">
			<div class="flex items-center gap-2 mb-4">
				<span class="font-mono text-xs tracking-widest uppercase text-white/70">About</span>
				<StatusDot status="active" />
			</div>
			<h1 class="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">{site.name}</h1>
			<p class="font-mono text-sm tracking-wide text-white/70">{site.location}</p>
		</div>
	</div>

	<div class="absolute inset-y-0 right-0 hidden lg:block">
		<div class="max-w-5xl mx-auto h-full px-6 flex">
			<div class="ml-auto max-w-xl flex h-full flex-col justify-between space-y-4 py-24">
				{#each site.bioLong as paragraph, i}
					<p class="bio-fade text-lg md:text-xl xl:text-2xl leading-relaxed text-white/80" style:animation-delay="{i * 1000}ms">{paragraph}</p>
				{/each}
			</div>
		</div>
	</div>

	<div class="absolute top-0 right-0 hidden sm:flex flex-col items-end gap-1 px-5 py-4 pointer-events-none">
		<span class="font-mono text-xs tracking-widest text-white/60">// about</span>
		<span class="font-mono text-xs tracking-wide text-white/40">ILCE-7M4 · 7008 × 4672</span>
	</div>
</section>

<!-- Bio (small screens) -->
<section class="mb-16 lg:hidden">
	{#each site.bioLong as paragraph, i}
		<p class="bio-fade text-lg leading-relaxed text-muted-foreground mb-4" style:animation-delay="{i * 1000}ms">{paragraph}</p>
	{/each}
</section>

<!-- Experience -->
<section class="mb-16">
	<SectionLabel>Experience</SectionLabel>
	<h2 class="text-2xl font-bold mt-2 mb-8">Work History</h2>

	{#each experience as exp}
		<div class="bg-card border border-border rounded-[0.75rem] p-6 mb-4 transition-colors duration-150 hover:border-accent">
			<h3 class="text-lg font-semibold">{exp.role}</h3>
			<p class="font-mono text-sm tracking-wide text-muted-foreground mt-1">{exp.company} | {exp.dates}</p>
			{#if exp.location}
				<p class="font-mono text-xs tracking-wide text-muted-foreground/70 mt-1">{exp.location}</p>
			{/if}

			{#each exp.description as desc}
				<p class="text-sm leading-relaxed text-muted-foreground mt-4">{desc}</p>
			{/each}
		</div>
	{/each}
</section>

<!-- Education -->
<section class="mb-16">
	<SectionLabel>Education</SectionLabel>
	<h2 class="text-2xl font-bold mt-2 mb-8">Academic Background</h2>

	{#each education as edu}
		<div class="bg-card border border-border rounded-[0.75rem] p-6 mb-4 transition-colors duration-150 hover:border-accent">
			<h3 class="text-lg font-semibold">{edu.degree}</h3>
			<p class="font-mono text-sm tracking-wide text-muted-foreground mt-1">{edu.institution} | {edu.dates}</p>
			{#if edu.details}
				<p class="text-sm leading-relaxed text-muted-foreground mt-4">{edu.details}</p>
			{/if}
		</div>
	{/each}
</section>

<!-- Skills -->
<section class="mb-16">
	<SectionLabel>Skills</SectionLabel>
	<h2 class="text-2xl font-bold mt-2 mb-8">Capabilities</h2>

	{#each skills as category}
		<div class="mb-6">
			<p class="font-mono text-sm tracking-wide text-muted-foreground mb-3">// {category.header}</p>
			<div class="flex flex-wrap gap-2">
				{#each category.skills as skill}
					<Tag label={skill} />
				{/each}
			</div>
		</div>
	{/each}
</section>

<!-- Contact -->
<section>
	<SectionLabel>Contact</SectionLabel>
	<h2 class="text-2xl font-bold mt-2 mb-8">Get in Touch</h2>

	<p class="text-lg leading-relaxed text-muted-foreground mb-4">Open to consulting, collaboration, and interesting conversations.</p>

	<div class="flex items-center gap-4">
			<a href={site.githubUrl} target="_blank" rel="noopener noreferrer" class="font-mono text-sm tracking-wide text-accent hover:underline">GitHub</a>
			<a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" class="font-mono text-sm tracking-wide text-accent hover:underline">LinkedIn</a>
			<a href={`mailto:${site.email}`} class="font-mono text-sm tracking-wide text-accent hover:underline">Email</a>
	</div>
</section>

<style>
	@keyframes bio-fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.bio-fade {
		animation: bio-fade-in 0.8s ease-out both;
	}

	@media (prefers-reduced-motion: reduce) {
		.bio-fade {
			animation: none;
		}
	}
</style>