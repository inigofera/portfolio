<script lang="ts">
	let { children } = $props();
</script>

<span class="font-mono text-xs tracking-widest uppercase text-muted-foreground">
	{@render children()}
</span>