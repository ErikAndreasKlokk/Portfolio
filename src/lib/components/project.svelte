<script lang="ts">
    import type { Project } from "$lib/types";

    import githubImg from "$lib/assets/github.svg"
    import arrowImg from "$lib/assets/arrow.svg"

    interface Props {
        project: Project;
        isLast?: boolean;
    }

    let { project, isLast = false }: Props = $props();
</script>

<div class="w-full relative {isLast ? '' : 'pb-8'}">
    <div class="after:content-[''] after:bg-yellow-500 after:absolute after:block after:w-3 after:h-3 after:-left-6 after:top-2 after:border-[2px] after:border-white before:content-[''] before:absolute before:w-[2px] before:bg-white before:block before:h-full before:top-2 before:-left-[19px]">

        <!-- 1. Tittel -->
        <h3 class="text-lg font-semibold">{project.name}</h3>

        <!-- 2. Dato + lenker -->
        <div class="flex items-center gap-3 justify-between">
            <span class="text-xs tracking-[0.2em] text-white/55">
                <time dateTime={project.created_at}>{new Date(project.created_at).toLocaleDateString("en-US", { year: "numeric", month: "short" }).toUpperCase()}</time>
            </span>
            <div class=" flex gap-3">
                {#if project.stargazers_count > 0}
                    <span class="text-xs text-white/70">★ {project.stargazers_count}</span>
                {/if}
                <a target="_blank" href={project.html_url} class="opacity-50 hover:opacity-100 transition-opacity">
                    <img class="h-5" src={githubImg} alt="GitHub" />
                </a>
                {#if project.homepage}
                    <a href={project.homepage} target="_blank" class="opacity-50 hover:opacity-100 transition-opacity">
                        <img class="h-5" src={arrowImg} alt="Nettside" />
                    </a>
                {/if}
            </div>
        </div>

        <!-- 3. Beskrivelse -->
        <p class="text-base text-white/90 leading-relaxed">{project.description}</p>
    </div>
</div>