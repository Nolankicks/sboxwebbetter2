<script lang="ts">
	import type { SboxPackage } from '$lib/types/SboxPackages';

	let { SboxPackage: pkg }: { SboxPackage: SboxPackage } = $props();

	console.log(`/game/${pkg.FullIdent}`);
</script>

<a href="/game/{pkg.Org.Ident}/{pkg.Ident}">
	<div class="my-5 flex h-20 items-center justify-start rounded-md bg-blue-600 p-2 font-mono text-white transition-all hover:scale-[1.01] active:scale-[0.99] flex-row">
        <div class="flex-col mx-5">
            <p class="text-lg">{pkg.Title}</p>
            <p>{pkg.Org.Title}</p>
        </div>
        <img src={pkg.Thumb} alt={pkg.Title} class="h-full w-auto rounded-md shadow-sm shadow-black" />
    </div>
</a>
