import Package from "$lib/components/Package.svelte";
import type { SboxPackage } from "$lib/types/SboxPackages";

export async function load({params, url})
{
    try {
        const link = url.pathname;

        let links = link.split('/').filter( x => x.length > 0 );

        let org = links[1];
        let name = links[2];

        console.log( links );

        const res = await fetch(`https://services.facepunch.com/sbox/package/get/${org}.${name}`);
        if (!res.ok) {
            throw new Error('Failed to fetch quote');
        }

        const body = await res.json();


        const pkg: SboxPackage = body;

        return {
            Package: pkg,
        };

    } catch (error) {
        console.error('Fetch error:', error);
        return {
            post: 'Failed to fetch quote',
        };
    }
}