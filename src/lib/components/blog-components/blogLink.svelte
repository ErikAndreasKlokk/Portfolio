<script lang="ts">
    import Borderbox from "../borderbox.svelte";

    interface Props {
        link: string;
        title: string;
        desc: string;
        date: string;
    }

    let {
        link,
        title,
        desc,
        date
    }: Props = $props();
</script>

<a href={link} class=" w-full p-1 my-2">
    <Borderbox widthFull={true}>
        <div class=" w-full h-40 p-3">
            <h2 class=" text-xl mb-3 underline">{title}</h2>
            <p class=" max-h-24 overflow-y-hidden breakpoint:max-h-20">{desc}</p>
            <div class=" w-full absolute bottom-0 bg-gradient-to-t from-black from-10% to-transparent h-36 right-0"></div>
            <p class=" text-xs absolute z-10 bottom-2 right-2 text-white/70">Last updated: <span class=" underline">{date}</span></p>
        </div>
    </Borderbox> 
</a>