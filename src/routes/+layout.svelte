<script>
    import Navbar from "$lib/components/navbar.svelte";
    import "../app.css";
    import { injectAnalytics } from '@vercel/analytics/sveltekit'
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

    injectSpeedInsights();
    injectAnalytics();
</script>

<svelte:head >
    <title>Erik Klokk</title>
</svelte:head>

<div class=" max-w-[1200px] w-full breakpoint:max-w-[600px]">
    <Navbar />
    <slot />
</div>
