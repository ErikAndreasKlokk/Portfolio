<script lang="ts">
    import { onMount } from 'svelte';

    interface Heading {
        id: string;
        title: string;
    }

    let headings = $state<Heading[]>([]);
    let activeId = $state('');

    onMount(() => {
        // Finn alle h3-elementer med ID (generert av Undertitle-komponenten)
        headings = [...document.querySelectorAll('h3[id]')].map(el => ({
            id: el.id,
            title: el.textContent?.trim() ?? ''
        }));

        if (headings.length === 0) return;

        // Bruk IntersectionObserver for å markere riktig seksjon
        const observer = new IntersectionObserver(
            entries => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        activeId = entry.target.id;
                    }
                }
            },
            { rootMargin: '-80px 0px -55% 0px', threshold: 0 }
        );

        document.querySelectorAll('h3[id]').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    });
</script>

{#if headings.length > 0}
    <!-- Innholdsfortegnelse \u2014 skjules p\u00e5 mobil (sidebar tar seg av navigasjon der) -->
    <nav class="breakpoint:hidden sticky top-20 self-start pl-8 pt-20 flex-1 min-w-0">
        <div class="border-l border-white/15 pl-4">
            <p class="text-yellow-500 text-xs tracking-[0.35em] mb-4">CONTENTS</p>
            <ul class="space-y-3">
                {#each headings as h}
                    <li>
                        <a
                            href="#{h.id}"
                            class="block text-xs leading-snug transition-colors duration-150
                                {activeId === h.id
                                    ? 'text-yellow-500'
                                    : 'text-white/35 hover:text-white/70'}"
                        >
                            {h.title}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    </nav>
{/if}
