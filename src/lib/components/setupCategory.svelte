<script lang="ts">
    import type { Picture } from 'vite-imagetools';
    import Borderbox from './borderbox.svelte';

    interface Props {
        num: string;
        title: string;
        itemCount: number;
        src?: Picture;
        children?: import('svelte').Snippet;
    }

    let { num, title, itemCount, src, children }: Props = $props();
</script>

<Borderbox widthFull={true} marginY="my-6">
    <div class="w-full">
        <!-- Kategori-header med valgfritt bilde eller rutemønster-bakgrunn -->
        <div class="relative w-full overflow-hidden min-h-[4.5rem]">
            {#if src}
                <enhanced:img {src} alt={title} class="absolute inset-0 w-full h-full object-cover object-center" draggable="false" />
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10"></div>
            {:else}
                <div class="absolute inset-0 bg-zinc-950"></div>
                <div class="absolute inset-0 opacity-[0.04]"
                     style="background-image: repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(255,255,255,0.5) 31px, rgba(255,255,255,0.5) 32px), repeating-linear-gradient(90deg, transparent, transparent 31px, rgba(255,255,255,0.5) 31px, rgba(255,255,255,0.5) 32px);">
                </div>
            {/if}
            <div class="relative z-10 px-6 py-5">
                <div class="text-yellow-500 text-xs tracking-[0.4em] mb-1">{num}</div>
                <h2 class="text-3xl text-white">{title}</h2>
            </div>
        </div>
        <!-- Metadata-strip -->
        <div class="flex items-center px-4 py-2.5 border-y border-white/15 text-xs">
            <span class="text-yellow-500">ITEMS</span>
            <span class="ml-2 text-white/55">{itemCount}</span>
        </div>
        <!-- Innhold — px-12 gir nok plass til Wish-komponentens timeline-prikker -->
        <div class="px-12 py-5">
            {@render children?.()}
        </div>
    </div>
</Borderbox>
