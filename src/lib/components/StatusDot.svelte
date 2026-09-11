<script lang="ts">
	let status = 'active';
</script>

<span class={`inline-block w-2 h-2 rounded-full ${status === 'active' ? 'bg-accent' : status === 'completed' ? 'bg-muted-foreground' : 'bg-border'}`}></span>