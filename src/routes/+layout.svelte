<script lang="ts">
	import '../app.css';
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';

	let { children, title } = $props();
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased">
	<Header />
	<main class="flex-1 max-w-5xl mx-auto w-full px-6 py-8 animate-fade-in">
		{@render children()}
	</main>
	<Footer />
</div>