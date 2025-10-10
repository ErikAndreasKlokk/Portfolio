<script>
    /** @type {{title: string, date: any, learned: any, desc: any, isLast?: boolean}} */
    let {
        title,
        date,
        learned,
        desc,
        isLast = false
    } = $props();
</script>

<div class=" w-full relative {isLast ? "" : "pb-5"}">
    <div class=" after:content-[''] after:bg-yellow-500 after:absolute after:block after:w-3 after:h-3 after:-left-6 after:top-2 after:border-[2px] after:border-white before:content-[''] before:absolute before:w-[2px] before:bg-white before:block before:h-full before:top-2 before:-left-[19px]">
        <h3 class=" text-lg font-semibold">{title}</h3>
        <div class=" flex justify-between">
            <p class=" text-sm text-white/60">{date}</p>
            <p class=" text-sm text-white/60">{learned}</p>
        </div>
        <p class=" text-lg">{desc}</p>
    </div>
</div>