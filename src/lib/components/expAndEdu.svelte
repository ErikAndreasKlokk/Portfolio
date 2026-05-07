<script lang="ts">
    /** @type {{title: string, date: any, learned: any, desc: any, isLast?: boolean}} */
    let {
        title,
        date,
        learned,
        desc,
        isLast = false
    } = $props();

    // Del opp kommaseparert string til en liste med teknologier
    const techs: string[] = learned.split(', ').map((t: string) => t.trim());
</script>

<div class="w-full relative {isLast ? '' : 'pb-8'}">
    <div class="after:content-[''] after:bg-yellow-500 after:absolute after:block after:w-3 after:h-3 after:-left-6 after:top-2 after:border-[2px] after:border-white before:content-[''] before:absolute before:w-[2px] before:bg-white before:block before:h-full before:top-2 before:-left-[19px]">

        <!-- 1. Tittel -->
        <h3 class="text-lg font-semibold">{title}</h3>

        <!-- 2. Dato + teknologier -->
        <div class="flex items-center gap-3 justify-between mt-1 mb-2">
            <span class="text-xs tracking-[0.2em] text-white/55">{date}</span>
            <div class=" flex gap-3">
                {#each techs as tech}
                    <span class="text-[10px] tracking-[0.3em] text-yellow-500/80 border border-yellow-500/20 px-2 py-0.5">{tech.toUpperCase()}</span>
                {/each}
            </div>
        </div>

        <!-- 3. Beskrivelse -->
        <p class="text-base text-white/90 leading-relaxed">{desc}</p>
    </div>
</div>
