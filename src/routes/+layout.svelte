<script lang="ts">
    import Sidebar from "$lib/components/sidebar.svelte";
    import "../app.css";
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();
</script>

<svelte:head >
    <title>Erik Andreas Klokk</title>
    <meta name="description" content="Erik Andreas Klokk's personal website. Learn about my interests, hobbies and projects!">
    <link rel="icon" href="/favicon.png" />    
</svelte:head>

<div class="max-w-[1200px] w-full breakpoint:max-w-[600px]">
    <main class=" text-white py-20 flex w-full h-full px-3 relative breakpoint:flex-col breakpoint:items-center breakpoint:py-10">
        <Sidebar />
        {@render children?.()}
    </main>
    <div class=" fixed bottom-5 left-5 text-sm text-white/70 breakpoint:static breakpoint:flex breakpoint:items-center breakpoint:flex-col breakpoint:mt-10 breakpoint:pb-7">
        <p>Erik Andreas Klokk © {new Date().getFullYear()}</p>
        <p>Contact: eaklokk@gmail.com</p>
    </div>
</div>
