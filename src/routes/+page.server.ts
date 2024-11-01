import { FetchSboxPackages } from '$lib/types/SboxPackages';

export async function load( { params }) {
	let packages = await FetchSboxPackages();

    if(packages == null) 
    {
        return {
            status: 404,
            error: new Error("Failed to fetch package data")
        };
    }

    return {
        packages
    };
}