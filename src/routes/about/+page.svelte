<script lang="ts">
	import { site } from '../../lib/data/site';
	import { experience } from '../../lib/data/experience';
	import { education } from '../../lib/data/education';
	import { skills } from '../../lib/data/skills';
	import SectionLabel from '../../lib/components/SectionLabel.svelte';
	import Tag from '../../lib/components/Tag.svelte';
</script>

<svelte:head>
	<title>About | Iñigo Artolozaga</title>
</svelte:head>

<!-- About -->
<section class="mb-16">
	<SectionLabel>About</SectionLabel>
	<h1 class="text-4xl md:text-5xl font-bold leading-tight mt-2 mb-4">{site.name}</h1>
	<p class="font-mono text-sm tracking-wide text-muted-foreground mb-8">{site.location}</p>

	{#each site.bioLong as paragraph}
		<p class="text-lg leading-relaxed text-muted-foreground mb-4">{paragraph}</p>
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
		<a href={`mailto:${site.email}`} class="font-mono text-sm tracking-wide text-accent hover:underline">Email</a>
	</div>
</section>