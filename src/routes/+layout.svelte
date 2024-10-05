<script>
    import "../app.css";
</script>

<svelte:head >
    <title>Erik Klokk</title>
</svelte:head>

<html lang="en" class=" bg-black max-w-screen min-h-screen flex justify-center">
    <div class=" max-w-[1200px] breakpoint:max-w-[600px]">
        <slot />
    </div>
</html>
