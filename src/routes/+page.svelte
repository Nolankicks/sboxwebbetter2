<script lang="ts">
	import Package from '$lib/components/Package.svelte';
	import type { SboxPackage } from '$lib/types/SboxPackages';

	let { data } = $props();
</script>

<div class="min-h-screen flex flex-col">
{#if data.packages}
	{#each data.packages as pkg}
		<Package SboxPackage={pkg} />
	{/each}
{/if}
</div>
