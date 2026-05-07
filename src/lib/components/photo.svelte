<script lang="ts">
    import type { Picture } from 'vite-imagetools';
    import closeIcon from '$lib/assets/close.svg';

    interface Props {
        landscape?: boolean;
        src: Picture;
        location?: string;
        who?: string;
        camera?: string;
        lat?: number;
        lon?: number;
        analog?: boolean;
    }

    let { src, landscape = false, location, who, camera, lat, lon, analog = false }: Props = $props();
    let open = $state(false);

    // Bygg Google Maps-lenke fra koordinater
    const mapsUrl = $derived(
        lat != null && lon != null
            ? `https://maps.google.com/?q=${lat},${lon}`
            : undefined
    );

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === 'Escape') open = false;
    }
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class={landscape ? 'col-span-2' : ''}>
    <enhanced:img
        loading="lazy"
        src={src}
        alt="image1"
        class="rounded-lg shadow-lg w-full h-auto cursor-pointer"
        draggable="false"
        onclick={() => (open = true)}
    />
    {#if who || analog}
        <!-- Kun fotograf (eller analog-merke) vises i rutenett-visning -->
        <div class="pt-1.5 pb-2 px-0.5 text-xs border-t border-white/15 mt-1">
            {#if analog}
                <span class="text-white/40">ANALOG</span>
            {:else}
                <span class="text-yellow-500">BY</span>&nbsp;<span class="text-white/70">{who}</span>
            {/if}
        </div>
    {/if}
</div>

{#if open}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onclick={() => (open = false)}
    >
        <button
            class="absolute top-4 right-4 hover:opacity-70 cursor-pointer z-10"
            onclick={() => (open = false)}
        >
            <img src={closeIcon} alt="Close" class="w-8 h-8" />
        </button>
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div onclick={(e) => e.stopPropagation()} class="flex flex-col items-center max-w-[90vw] max-h-[90vh]">
            <img
                loading="lazy"
                src={src.img.src}
                alt="image1"
                class="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
            />
            {#if location || who || camera || analog}
                <!-- Metadata i lysbildevisning -->
                <div class="flex flex-wrap justify-center gap-x-5 gap-y-1 mt-3 text-xs">
                    {#if analog}
                        <span class="text-white/40">ANALOG FILM</span>
                    {:else}
                        {#if location}
                            <span>
                                <span class="text-yellow-500">WHERE</span>&nbsp;
                                {#if mapsUrl}
                                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
                                       class="text-white/70 underline underline-offset-2 decoration-white/30 hover:text-yellow-400 hover:decoration-yellow-400 transition-colors">
                                        {location}
                                    </a>
                                {:else}
                                    <span class="text-white/70">{location}</span>
                                {/if}
                            </span>
                        {/if}
                        {#if who}
                            <span><span class="text-yellow-500">BY</span>&nbsp;<span class="text-white/70">{who}</span></span>
                        {/if}
                        {#if camera}
                            <span><span class="text-yellow-500">CAM</span>&nbsp;<span class="text-white/70">{camera}</span></span>
                        {/if}
                    {/if}
                </div>
            {/if}
        </div>
    </div>
{/if}
