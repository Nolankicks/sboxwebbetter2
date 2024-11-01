<script lang="ts">
	import Package from '$lib/components/Package.svelte';
import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="flex flex-col p-4 w-full items-start">
    {#if data.Package}
        <div class="flex flex-col w-full my-5">
            <h3 class="text-5xl font-bold">{data.Package.Title}</h3>
            <p class="text-xl">{data.Package.Org.Title}</p>
            <p>{data.Package.Summary}</p>
        </div>
        <img src={data.Package.Thumb} alt={data.Package.Title} class="rounded-md w-72" />
    {/if}
</div>