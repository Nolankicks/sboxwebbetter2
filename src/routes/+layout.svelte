<script lang="ts">
	import '../app.css';
    import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<Header />

<div class="container mx-auto">
{@render children()}
</div>
