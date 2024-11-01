export const FetchSboxPackages = async function(): Promise<SboxPackage[] | null> {
    let res = await fetch("https://services.facepunch.com/sbox/package/list");

    if (!res.ok)
        return null;

    const body = await res.json();

    if (body == null || !body.Groupings)
        return null;

    const packages: SboxPackage[] = body.Groupings.flatMap((group: any) => group.Packages);

    return packages;
}

export const GetPackage = async function(): Promise<SboxPackage | null> {
    let res = await fetch(`https://services.facepunch.com/sbox/package/get/facepunch.ss1`);

    if (!res.ok)
        return null;

    const body = await res.json();

    if (body == null)
        return null;

    const pkg: SboxPackage = body;

    return pkg;
}

export interface SboxPackage {
    Ident: string;
    Title: string;
    Summary: string;
    FullIdent: string;
    Org: SboxOrg;
    Thumb: string;
}

export interface SboxOrg {
    Ident: string;
    Title: string;
    Description: string;
}