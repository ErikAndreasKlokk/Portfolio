<script lang="ts">
    import Skill from "$lib/components/skill.svelte";
    import Project from "$lib/components/project.svelte";
    import Expandedu from "$lib/components/expAndEdu.svelte";
    import SideProfile from "$lib/components/sideProfile.svelte";

    import imgUrlSvelte from "$lib/assets/svelte.svg"
    import imgUrlTailwind from "$lib/assets/tailwind.svg"
    import imgUrlReact from "$lib/assets/react.svg"
    import imgUrlTypeScript from "$lib/assets/typescript.svg"
    import imgUrlJava from "$lib/assets/java.svg"
    import imgUrlGit from "$lib/assets/git.svg"
    import imgUrlKubernetes from "$lib/assets/kubernetes.svg"
    import imgUrlDocker from "$lib/assets/docker.svg"

    import type { PageProps } from './$types';

	let { data }: PageProps = $props();

</script>

<main class=" text-white py-20 flex w-full h-full px-3 relative breakpoint:flex-col breakpoint:items-center breakpoint:py-10">
    <SideProfile />
    <div class=" flex flex-col items-start w-1/2 h-full px-5 breakpoint:w-fit breakpoint:items-center">
        <div class=" flex w-fit items-center flex-col">
            <h2 class=" text-4xl text-yellow-500 mb-6 text-center">Experience & Education</h2>
            <Expandedu title="Statens Pensjonskasse" desc="Working fulltime as a fullstack web developer/apprentice." learned="Git, React, Java, Jira" date="August 2024 - Today"/>
            <Expandedu title="Elvebakken VGS" desc="Student at Elvebakken VGS, Informational technology (IT2)" learned="Svelte, TypeScript, NextJS" date="August 2023 - June 2024"/>
            <Expandedu isLast={true} title="Kuben VGS" desc="Student at Kuben VGS, Informational technology & Media production (IM1)" learned="HTML, CSS, JavaScript, Video editing" date="August 2022 - June 2023"/>
        </div>
        <div class=" flex w-full items-center flex-col mt-16">
            <h2 class=" text-4xl text-yellow-500 mb-6 text-center">Skills and technologies</h2>
            <div class=" w-full relative pb-5 flex gap-2 flex-wrap">
                <Skill skill="Svelte" imgURL={imgUrlSvelte} />
                <Skill skill="Tailwind CSS" imgURL={imgUrlTailwind} />
                <Skill skill="React" imgURL={imgUrlReact} />
                <Skill skill="TypeScript" imgURL={imgUrlTypeScript} />
                <Skill skill="Java" imgURL={imgUrlJava} />
                <Skill skill="Git" imgURL={imgUrlGit} />
                <Skill skill="Kubernetes" imgURL={imgUrlKubernetes} />
                <Skill skill="Docker" imgURL={imgUrlDocker} />
            </div>
        </div>
        <div class=" flex w-full items-center flex-col mt-16">
            <h2 class=" text-4xl text-yellow-500 mb-6">About me</h2>
            <div class=" w-full relative pb-5 flex gap-2 flex-wrap">
                <p class=" text-lg">Right now I'm a fullstack web developer at Statens Pensjonskasse in Oslo, Norway. I'm a nerd who loves problem solving and difficult tasks. In my free time I play videogames such as Valorant and CS2, I watch some shows and movies, and I enjoy strength training.</p>
            </div>
        </div>
        <div class=" flex w-full items-center flex-col mt-16">
            <h2 class=" text-4xl text-yellow-500 mb-6">Projects</h2>
            <div class=" w-full relative pb-5 flex flex-col breakpoint:w-fit breakpoint:items-center">
                {#each data.projects as project, i}
                    {#if data.projects.length === 0}
                        <div class=" w-full relative">
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
                    {/if}
                    <Project {project} isLast={i === data.projects.length-1 ? true : false}/>
                {/each}
            </div>
        </div>
    </div>
    <div class=" fixed bottom-5 left-5 text-sm text-white/70 breakpoint:static breakpoint:mt-10">
        <p>Erik Andreas Klokk © {new Date().getFullYear()}</p>
        <p>Contact: eaklokk@gmail.com</p>
    </div>
</main>