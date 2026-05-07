<script lang="ts">
    type WishType = 'audio' | 'monitor' | 'keyboard' | 'mouse' | 'storage' | 'camera' | 'control' | 'other';

    interface WishItem {
        type: WishType;
        title: string;
        desc: string;
        link?: string;
        date?: string;
    }

    interface WishSection {
        title: string;
        items: WishItem[];
    }

    const wishlist: WishSection[] = [
        {
            title: "Audio & Streaming",
            items: [
                { type: 'audio', title: "Shure SM7B", date: "Okt 2025", desc: "Dynamic broadcast microphone · XLR" },
            ],
        },
    ];

    const iconPaths: Record<WishType, string> = {
        audio:    `<rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v4M9 22h6"/>`,
        monitor:  `<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>`,
        keyboard: `<rect x="2" y="8" width="20" height="12" rx="2"/><path d="M6 12h.01M9 12h.01M12 12h.01M15 12h.01M18 12h.01M7 16h10"/>`,
        mouse:    `<path d="M12 2a7 7 0 00-7 7v6a7 7 0 0014 0V9a7 7 0 00-7-7z"/><path d="M12 2v7M5 9h14"/>`,
        storage:  `<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M15 11h4M15 13h4"/><circle cx="9" cy="12" r="2"/>`,
        camera:   `<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>`,
        control:  `<rect x="2" y="2" width="20" height="20" rx="3"/><rect x="5" y="5" width="4" height="4" rx="1"/><rect x="10" y="5" width="4" height="4" rx="1"/><rect x="15" y="5" width="4" height="4" rx="1"/><rect x="5" y="15" width="14" height="4" rx="1"/>`,
        other:    `<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>`,
    };

    const typeLabels: Record<WishType, string> = {
        audio: 'AUDIO', monitor: 'DISPLAY', keyboard: 'KBD', mouse: 'MOUSE',
        storage: 'SSD', camera: 'CAM', control: 'CTRL', other: 'ITEM',
    };

    const totalItems = wishlist.reduce((acc, s) => acc + s.items.length, 0);
</script>

{#snippet renderItem(item: WishItem)}
    <div class="w-5 h-5 mt-0.5 flex-shrink-0 text-yellow-500/60 group-hover:text-yellow-400/90 transition-colors">
        {@html `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%">${iconPaths[item.type]}</svg>`}
    </div>
    <div class="flex-1 min-w-0">
        <div class="flex items-baseline gap-2 flex-wrap">
            <span class="font-mono text-[10px] tracking-widest text-yellow-500/60 group-hover:text-yellow-400/90 transition-colors uppercase">{typeLabels[item.type]}</span>
            <span class="text-base text-white/90 font-medium">{item.title}</span>
            {#if item.date}
                <span class="font-mono text-[10px] text-white/50">// {item.date}</span>
            {/if}
        </div>
        <div class="font-mono text-xs text-white/55 mt-0.5 leading-relaxed">{item.desc}</div>
    </div>
{/snippet}

<div class="flex flex-col items-start w-7/12 h-full px-5 breakpoint:w-full breakpoint:items-center">
    <div class="flex w-full items-center flex-col">
        <h2 class="text-4xl text-yellow-500 mb-1 text-center">Wishlist</h2>
        <p class="text-white/40 text-xs tracking-[0.35em] mb-10">ITEMS I WANT · {totalItems} TOTAL</p>

        {#each wishlist as section, sectionIndex}
            <div class="w-full {sectionIndex < wishlist.length - 1 ? 'mb-16' : ''}">
                <div class="flex items-center gap-3 mb-4">
                    <span class="font-mono text-xs tracking-[0.45em] text-yellow-500 uppercase">{section.title}</span>
                    <div class="flex-1 h-px bg-white/15"></div>
                    <span class="font-mono text-xs text-white/40">{section.items.length} ITEMS</span>
                </div>

                <div class="flex flex-col">
                    {#each section.items as item}
                        {#if item.link}
                            <a href={item.link} target="_blank"
                               class="group flex items-start gap-3 py-3 border-b border-white/10 last:border-0 hover:bg-white/[0.04] -mx-2 px-2 rounded transition-colors">
                                {@render renderItem(item)}
                                <svg class="w-3 h-3 mt-1.5 flex-shrink-0 text-white/20 group-hover:text-yellow-500/70 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M7 17L17 7M7 7h10v10"/>
                                </svg>
                            </a>
                        {:else}
                            <div class="flex items-start gap-3 py-3 border-b border-white/10 last:border-0 -mx-2 px-2">
                                {@render renderItem(item)}
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>
