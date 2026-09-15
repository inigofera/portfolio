<script lang="ts">
	import { projects } from '../../lib/data/projects';
	import ProjectCard from '../../lib/components/ProjectCard.svelte';
	import SectionLabel from '../../lib/components/SectionLabel.svelte';

	// Track is two identical halves so translating -50% loops seamlessly.
	// Each half repeats the projects twice so the row feels full.
	const half = [...projects, ...projects];
	const track = [...half, ...half];
</script>

<svelte:head>
	<title>Projects | Iñigo Artolozaga</title>
</svelte:head>

<section class="mb-16">
	<SectionLabel>Work</SectionLabel>
	<h1 class="text-4xl md:text-5xl font-bold leading-tight mt-2 mb-4">Projects</h1>
	<p class="text-lg text-muted-foreground max-w-2xl leading-relaxed">Selected work spanning design systems, data visualization, and UX research.</p>
</section>

<section class="relative w-[100vw] left-1/2 -translate-x-1/2">
	<div class="marquee">
		<div class="marquee-track">
			{#each track as project, i (i)}
				{@const duplicate = i >= half.length}
				<div class="marquee-item{duplicate ? ' marquee-item--dup' : ''}">
					<ProjectCard project={project} thumbnail={project.thumbnail} decorative={duplicate} />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.marquee {
		overflow: hidden;
		-webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
		mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
	}

	.marquee-track {
		display: flex;
		width: max-content;
		will-change: transform;
		animation: marquee 80s linear infinite;
	}

	.marquee-item {
		width: 320px;
		margin-right: 1.5rem;
	}

	@media (min-width: 640px) {
		.marquee-item {
			width: 360px;
		}
	}

	.marquee:hover .marquee-track,
	.marquee:focus-within .marquee-track {
		animation-play-state: paused;
	}

	@keyframes marquee {
		to {
			transform: translateX(-50%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee {
			overflow-x: auto;
			-webkit-mask-image: none;
			mask-image: none;
		}

		.marquee-track {
			animation: none;
		}

		.marquee-item--dup {
			display: none;
		}
	}
</style>
