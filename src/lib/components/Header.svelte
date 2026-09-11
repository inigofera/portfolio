<script lang="ts">
	import { site } from '../data/site';

	let active = $state('');
	let mobileOpen = $state(false);

	function setActive(page: string) {
		active = page;
		mobileOpen = false;
	}
</script>

<header class="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
	<div class="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
		<a href="/" onclick={() => setActive('home')} class="font-mono text-sm tracking-wide">
			<span class="text-accent">//</span> {site.name}
		</a>

		<!-- Desktop nav -->
		<nav class="hidden md:flex items-center gap-6">
			<a href="/" onclick={() => setActive('home')} class={`font-mono text-sm tracking-wide transition-colors duration-150 ${active === 'home' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'}`}>Home</a>
			<a href="/projects" onclick={() => setActive('projects')} class={`font-mono text-sm tracking-wide transition-colors duration-150 ${active === 'projects' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'}`}>Projects</a>
			<a href="/about" onclick={() => setActive('about')} class={`font-mono text-sm tracking-wide transition-colors duration-150 ${active === 'about' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'}`}>About</a>
		</nav>

		<!-- Mobile hamburger -->
		<button onclick={() => mobileOpen = !mobileOpen} class="md:hidden text-foreground" aria-label="Toggle menu">
			{mobileOpen ? '✕' : '☰'}
		</button>
	</div>

	<!-- Mobile nav -->
	{#if mobileOpen}
		<div class="md:hidden bg-background border-b border-border">
			<nav class="flex flex-col gap-2 px-6 py-4">
				<a href="/" onclick={() => setActive('home')} class={`font-mono text-sm tracking-wide transition-colors duration-150 ${active === 'home' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'}`}>Home</a>
				<a href="/projects" onclick={() => setActive('projects')} class={`font-mono text-sm tracking-wide transition-colors duration-150 ${active === 'projects' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'}`}>Projects</a>
				<a href="/about" onclick={() => setActive('about')} class={`font-mono text-sm tracking-wide transition-colors duration-150 ${active === 'about' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'}`}>About</a>
			</nav>
		</div>
	{/if}
</header>