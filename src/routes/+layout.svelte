<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import "../app.css";
    import { injectAnalytics } from '@vercel/analytics/sveltekit'
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();

    injectSpeedInsights();
    injectAnalytics();
</script>

<svelte:head >
    <title>Erik Andreas Klokk</title>
    <meta name="description" content="Erik Andreas Klokk's personal website. Learn about my interests, hobbies and projects!">
</svelte:head>

<div class=" max-w-[1200px] w-full breakpoint:max-w-[600px]">
    <Navbar />
    {@render children?.()}
</div>
