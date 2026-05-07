<script lang="ts">
    import Skill from "$lib/components/skill.svelte";
    import Project from "$lib/components/project.svelte";
    import Expandedu from "$lib/components/expAndEdu.svelte";

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

    // Skill-grupper med kategori-labels
    const skillGroups = [
        {
            label: "FRONTEND",
            skills: [
                { name: "Svelte",       img: imgUrlSvelte },
                { name: "React",        img: imgUrlReact },
                { name: "Tailwind CSS", img: imgUrlTailwind },
                { name: "TypeScript",   img: imgUrlTypeScript },
            ]
        },
        {
            label: "BACKEND",
            skills: [
                { name: "Java",         img: imgUrlJava },
                { name: "TypeScript",   img: imgUrlTypeScript },
            ]
        },
        {
            label: "INFRA",
            skills: [
                { name: "Docker",       img: imgUrlDocker },
                { name: "Kubernetes",   img: imgUrlKubernetes },
                { name: "Git",          img: imgUrlGit },
            ]
        },
    ];
</script>

<div class="flex flex-col items-start w-1/2 h-full px-5 breakpoint:w-full breakpoint:items-center">

    <!-- Om meg -->
    <div class="flex w-full flex-col">
        <h2 class="text-4xl text-yellow-500 mb-1 text-center">About Me</h2>
        <p class="text-white/40 text-xs tracking-[0.35em] mb-8 text-center">WHO I AM</p>

        <p class="text-lg leading-relaxed mb-8">
            I'm a nerd who loves problem solving and difficult tasks. In my free time I play
            <span class="text-yellow-500">Valorant</span> and <span class="text-yellow-500">Rocket League</span>,
            watch some shows and movies, and enjoy strength training.
        </p>

        <!-- Nå-seksjonen -->
        <div class="w-full flex flex-col">
            <div class="flex items-center gap-3 mb-4">
                <span class="text-xs tracking-[0.45em] text-yellow-500">RIGHT NOW</span>
                <div class="flex-1 h-px bg-white/15"></div>
            </div>
            <div class="flex flex-col">
                <div class="flex items-baseline gap-4 py-3 border-b border-white/10">
                    <span class="text-xs tracking-[0.35em] text-white/40 w-20 shrink-0">PLAYING</span>
                    <span class="text-base text-white/80">Valorant · Rocket League</span>
                </div>
                <div class="flex items-baseline gap-4 py-3 border-b border-white/10">
                    <span class="text-xs tracking-[0.35em] text-white/40 w-20 shrink-0">BUILDING</span>
                    <span class="text-base text-white/80">Homelab cluster · This site</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Erfaring og utdanning -->
    <div class="flex w-full flex-col mt-16">
        <h2 class="text-4xl text-yellow-500 mb-1 text-center">Experience & Education</h2>
        <p class="text-white/40 text-xs tracking-[0.35em] mb-8 text-center">TIMELINE</p>
        <div class="w-full ml-7">
            <Expandedu title="Statens Pensjonskasse" desc="Working fulltime as a fullstack web developer/apprentice." learned="Git, React, Java, Jira" date="August 2024 - Today"/>
            <Expandedu title="Elvebakken VGS" desc="Student at Elvebakken VGS, Informational technology (IT2)" learned="Svelte, TypeScript, NextJS" date="August 2023 - June 2024"/>
            <Expandedu isLast={true} title="Kuben VGS" desc="Student at Kuben VGS, Informational technology & Media production (IM1)" learned="HTML, CSS, JavaScript" date="August 2022 - June 2023"/>
        </div>
    </div>

    <!-- Ferdigheter — gruppert etter kategori -->
    <div class="flex w-full flex-col mt-16">
        <h2 class="text-4xl text-yellow-500 mb-1 text-center">Skills</h2>
        <p class="text-white/40 text-xs tracking-[0.35em] mb-8 text-center">TECHNOLOGIES</p>

        <div class="flex flex-col gap-8 w-full">
            {#each skillGroups as group}
                <div>
                    <div class="flex items-center gap-3 mb-4">
                        <span class="text-xs tracking-[0.45em] text-yellow-500">{group.label}</span>
                        <div class="flex-1 h-px bg-white/15"></div>
                        <span class="text-xs text-white/30">{group.skills.length} SKILLS</span>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        {#each group.skills as skill}
                            <Skill skill={skill.name} imgURL={skill.img} />
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <!-- Prosjekter -->
    <div class="flex w-full flex-col mt-16 mb-16">
        <h2 class="text-4xl text-yellow-500 mb-1 text-center">Projects</h2>
        <p class="text-white/40 text-xs tracking-[0.35em] mb-8 text-center">PINNED · {data.projects.length} REPOS</p>
        <div class="w-full relative pb-5 flex flex-col ml-7 breakpoint:ml-0">
            {#each data.projects as project, i}
                <Project {project} isLast={i === data.projects.length - 1}/>
            {/each}
        </div>
    </div>

</div>