<script lang="ts">
    import Skill from "$lib/components/skill.svelte";
    import Project from "$lib/components/project.svelte";
    import Expandedu from "$lib/components/expandedu.svelte";
    import SideProfile from "$lib/components/sideProfile.svelte";

    export let data;

</script>

<main class=" text-white py-56 flex w-full h-full px-3 relative breakpoint:flex-col breakpoint:items-center breakpoint:py-10">
    <SideProfile />
    <div class=" flex flex-col items-start w-1/2 h-full px-5 breakpoint:w-fit breakpoint:items-center">
        <div class=" flex w-fit items-center flex-col">
            <h2 class=" text-4xl text-yellow-500 mb-6 text-center">Experience & Education</h2>
            <Expandedu title="Statens Pensjonskasse" desc="Working fulltime as a frontend web developer/apprentice." learned="Git, React, Teamwork, Jira" date="August 2024 - Today"/>
            <Expandedu title="Elvebakken VGS" desc="Student at Elvebakken VGS, Informational technology (IT2)" learned="Svelte, TypeScript, NextJS" date="August 2023 - June 2024"/>
            <Expandedu isLast={true} title="Kuben VGS" desc="Student at Kuben VGS, Informational technology & Media production (IM1)" learned="HTML, CSS, JavaScript, Video editing" date="August 2022 - June 2023"/>
        </div>
        <div class=" flex w-full items-center flex-col mt-10">
            <h2 class=" text-4xl text-yellow-500 mb-6 text-center">Skills and competence</h2>
            <div class=" w-full relative pb-5 flex gap-2 flex-wrap">
                <Skill skill="Svelte" imgURL="/svelte.svg" />
                <Skill skill="HTML" imgURL="/html.svg" />
                <Skill skill="NextJS" imgURL="/nextjs.svg" />
                <Skill skill="JavaScript" imgURL="/javascript.svg" />
                <Skill skill="CSS" imgURL="/css.svg" />
                <Skill skill="Tailwind CSS" imgURL="/tailwind.svg" />
                <Skill skill="React" imgURL="/react.svg" />
                <Skill skill="TypeScript" imgURL="/typescript.svg" />
            </div>
        </div>
        <div class=" flex w-full items-center flex-col mt-10">
            <h2 class=" text-4xl text-yellow-500 mb-6">About me</h2>
            <div class=" w-full relative pb-5 flex gap-2 flex-wrap">
                <p class=" text-lg">Right now im a frontend web developer at Statens Pensjonskasse in Oslo, Norway. I am an IT nerd who loves problem solving and difficult tasks. In my free time i play videogames (mainly FPS games), Strength training and watch shows. Feel free to contact me: eaklokk@gmail.com</p>
            </div>
        </div>
        <div class=" flex w-full items-center flex-col mt-10">
            <h2 class=" text-4xl text-yellow-500 mb-6">Projects</h2>
            <div class=" w-full relative pb-5 flex gap-2 flex-col breakpoint:w-fit breakpoint:items-center">
                {#await data.streamed.projects}
                    <p>Loading projects...</p>
                {:then projects}
                    {#each projects as project}
                        {#if project.name !== "ErikAndreasKlokk"}
                            <Project project={project}/>
                        {/if}
                    {/each}
                {/await}
            </div>
        </div>
    </div>
    <div class=" fixed bottom-5 left-5 text-sm text-white/70 breakpoint:static breakpoint:mt-10">
        <p>Erik Andreas Klokk © 2024</p>
        <p>Contact: eaklokk@gmail.com</p>
    </div>
</main>