<script lang="ts">
    export let Routes: App.Route[] = [
        { name: 'Home', href: '/' },
        { name: 'Browse', href: '/about' },
    ];
</script>

<nav class="w-full flex px-5">
    {#each Routes as route}
        <a class="mx-5" href={route.href} aria-label={route.name}>{route.name}</a>
    {/each}
</nav>