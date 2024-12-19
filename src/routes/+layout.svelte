<script>
    import Navbar from "$lib/components/navbar.svelte";
    import "../app.css";
</script>

<svelte:head >
    <title>Erik Klokk</title>
</svelte:head>

<div class=" max-w-[1200px] w-full breakpoint:max-w-[600px]">
    <Navbar />
    <slot />
</div>
