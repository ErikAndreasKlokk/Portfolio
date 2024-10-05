<script lang="ts">
    export let project;
</script>

<div class=" w-full relative pb-7">
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
                    <img class=" h-7" src="/github.svg" alt="github logo">
                </a>
                {#if project.homepage !== null && project.homepage !== undefined && project.homepage !== ""}
                    <a href={project.homepage} target="_blank">
                        <img class=" h-7" src="arrow.svg" alt="page for website">
                    </a>
                {/if}
                <div class=" flex">
                    <p class=" text-xl">{project.stargazers_count}</p>
                    <img class=" h-5" src="star.svg" alt="rating">
                </div>
            </div>
        </div>
        <p class=" text-lg">{project.description}</p>
    </div>
</div>