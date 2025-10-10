<script lang="ts">
  import type { Project } from "$lib/types";
  import { onMount } from "svelte";

  import githubImg from "$lib/assets/github.svg"
  import arrowImg from "$lib/assets/arrow.svg"
  import starImg from "$lib/assets/star.svg"

  interface Props {
    projectName: string;
    isLast?: boolean;
  }

  let { projectName, isLast = false }: Props = $props();
    let project: Project | undefined = $state();

    onMount(async () => {
        const res = await fetch(`https://api.github.com/repos/ErikAndreasKlokk/${projectName}`)
        const resJson = await res.json() as Project;
        project = resJson;
    });

</script>

{#if !project || !project.name}
    <div class=" w-full relative {isLast ? "" : "pb-7"}">
        <div class=" after:content-[''] after:bg-yellow-500 after:absolute after:block after:w-3 after:h-3 after:-left-6 after:top-2 after:border-[2px] after:border-white before:content-[''] before:absolute before:w-[2px] before:bg-white before:block before:h-full before:top-2 before:-left-[19px]">
            <div class=" flex justify-between items-center mb-2">
                <div>
                    <div class=" w-40 h-7 animate-pulse bg-zinc-900 rounded-md mb-2"></div>
                    <div class=" w-32 h-4 animate-pulse bg-zinc-900 rounded-md"></div>
                </div>
                <div class=" flex gap-3">
                    <div class=" h-8 w-8 animate-pulse bg-zinc-900 rounded-md"></div>
                    <div class=" h-8 w-8 animate-pulse bg-zinc-900 rounded-md"></div>
                    <div class=" h-8 w-8 animate-pulse bg-zinc-900 rounded-md"></div>
                </div>
            </div>
            <div class=" h-12 animate-pulse bg-zinc-900 rounded-md"></div>
        </div>
    </div>
{:else}
    <div class=" w-full relative {isLast ? "" : "pb-7"}">
        <div class=" after:content-[''] after:bg-yellow-500 after:absolute after:block after:w-3 after:h-3 after:-left-6 after:top-2 after:border-[2px] after:border-white before:content-[''] before:absolute before:w-[2px] before:bg-white before:block before:h-full before:top-2 before:-left-[19px]">
            <div class=" flex justify-between items-center">
                <div>
                    <h3 class=" text-lg font-semibold">{project.name}</h3>
                    <p class=" text-sm text-white/60">
                        <time dateTime={project.created_at}>
                            {new Date(project.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            day: "numeric",
                            month: "short",
                            })}
                        </time>
                    </p>
                </div>
                <div class=" flex gap-3">
                    <a target="_blank" href={project.html_url}>
                        <img class=" h-7" src={githubImg} alt="github logo">
                    </a>
                    {#if project.homepage !== null && project.homepage !== undefined && project.homepage !== ""}
                        <a href={project.homepage} target="_blank">
                            <img class=" h-7" src={arrowImg} alt="page for website">
                        </a>
                    {/if}
                    <div class=" flex relative justify-center items-center w-7">
                        <p class=" text-sm absolute mt-[4px] mr-[2px] text-black z-50">{project.stargazers_count}</p>
                        <img class=" min-h-8 min-w-8 absolute" src={starImg} alt="rating">
                    </div>
                </div>
            </div>
            <p class=" text-lg">{project.description}</p>
        </div>
    </div>
{/if}