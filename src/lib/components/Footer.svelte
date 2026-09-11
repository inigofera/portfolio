<script lang="ts">
	import { site } from '../data/site';
</script>

<footer class="border-t border-border mt-16">
	<div class="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
		<span class="font-mono text-sm tracking-wide text-muted-foreground">// ux engineer</span>
		<div class="flex items-center gap-4">
			<a href={site.githubUrl} target="_blank" rel="noopener noreferrer" class="font-mono text-sm tracking-wide text-muted-foreground hover:text-accent transition-colors duration-150">GitHub</a>
			<a href={`mailto:${site.email}`} class="font-mono text-sm tracking-wide text-muted-foreground hover:text-accent transition-colors duration-150">Email</a>
		</div>
	</div>
</footer>