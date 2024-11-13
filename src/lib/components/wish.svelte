<script lang="ts">
    export let title: string;
    export let desc: string;
    export let link: string = "";
    export let date: string | Date = "";
    export let isLast: boolean = false;
</script>

<div class=" w-full relative {isLast ? "" : "pb-5"}">
    <div class=" after:content-[''] after:bg-yellow-500 after:absolute after:block after:w-3 after:h-3 after:-left-6 after:top-2 after:border-[2px] after:border-white before:content-[''] before:absolute before:w-[2px] before:bg-white before:block before:h-full before:top-2 before:-left-[19px]">
        <div class=" flex justify-between items-center">
            <div>
                <h3 class=" text-lg font-semibold">{title}</h3>
                <p class=" text-sm text-white/60">{date}</p>
            </div>
            {#if link !== ""}
                <div>
                    <a href={link} target="_blank">
                        <img class=" h-7" src="arrow.svg" alt="page for wish">
                    </a>
                </div>
            {/if}
        </div>
        <p class=" text-lg">{desc}</p>
    </div>
</div>