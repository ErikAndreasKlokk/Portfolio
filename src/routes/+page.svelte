<script lang="ts">
    import Skill from "$lib/components/skill.svelte";
    import Project from "$lib/components/project.svelte";
    import Expandedu from "$lib/components/expandedu.svelte";
    import SideProfile from "$lib/components/sideProfile.svelte";

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
        <div class=" flex w-full items-center flex-col mt-10">
            <h2 class=" text-4xl text-yellow-500 mb-6 text-center">Skills and technologies</h2>
            <div class=" w-full relative pb-5 flex gap-2 flex-wrap">
                <Skill skill="Svelte" imgURL="/svelte.svg" />
                <Skill skill="Tailwind CSS" imgURL="/tailwind.svg" />
                <Skill skill="React" imgURL="/react.svg" />
                <Skill skill="TypeScript" imgURL="/typescript.svg" />
                <Skill skill="Java" imgURL="/java.svg" />
                <Skill skill="Git" imgURL="/git.svg" />
                <Skill skill="Kubernetes" imgURL="/kubernetes.svg" />
                <Skill skill="Docker" imgURL="/docker.svg" />
            </div>
        </div>
        <div class=" flex w-full items-center flex-col mt-10">
            <h2 class=" text-4xl text-yellow-500 mb-6">About me</h2>
            <div class=" w-full relative pb-5 flex gap-2 flex-wrap">
                <p class=" text-lg">Right now im a fullstack web developer at Statens Pensjonskasse in Oslo, Norway. Im a nerd who loves problem solving and difficult tasks. In my free time i play videogames such as Valorant and CS2, i watch some shows and movies, and i enjoy strength training.</p>
            </div>
        </div>
        <div class=" flex w-full items-center flex-col mt-10">
            <h2 class=" text-4xl text-yellow-500 mb-6">Projects</h2>
            <div class=" w-full relative pb-5 flex flex-col breakpoint:w-fit breakpoint:items-center">
                <Project projectName="Budgeting" />
                <Project projectName="homelab" />
                <Project projectName="Portfolio" />
                <Project projectName="RomBooking" />
                <Project projectName="Gammel-Portfolio" isLast={true} />
            </div>
        </div>
    </div>
    <div class=" fixed bottom-5 left-5 text-sm text-white/70 breakpoint:static breakpoint:mt-10">
        <p>Erik Andreas Klokk © 2024</p>
        <p>Contact: eaklokk@gmail.com</p>
    </div>
</main>