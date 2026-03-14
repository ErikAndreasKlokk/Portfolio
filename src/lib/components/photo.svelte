<script lang="ts">
    import type { Picture } from 'vite-imagetools';
    import closeIcon from '$lib/assets/close.svg';

    interface Props {
        landscape?: boolean;
        src: Picture;
    }

    let { src, landscape = false }: Props = $props();
    let open = $state(false);

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
        <div onclick={(e) => e.stopPropagation()} class="max-w-[90vw] max-h-[90vh]">
            <img
                loading="lazy"
                src={src.img.src}
                alt="image1"
                class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />
        </div>
    </div>
{/if}
