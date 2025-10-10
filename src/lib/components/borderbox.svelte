<script lang="ts">
    interface Props {
        marginY?: string;
        marginX?: string;
        widthFull?: boolean;
        children?: import('svelte').Snippet;
    }

    let {
        marginY = "",
        marginX = "",
        widthFull = false,
        children
    }: Props = $props();
</script>

<div class=" relative flex justify-center items-center h-fit {widthFull ? "w-full" : "w-fit"} {marginY} {marginX}">
    <div class=" absolute h-fit {widthFull ? "w-full" : "w-fit"} -z-10">
        <div class="outline-white/60 outline bg-black outline-[2px] absolute w-[calc(100%-4px)] h-[calc(100%+4px)] -top-[2px] left-[2px]"></div>
        <div class="outline-white/60 outline bg-black outline-[2px] absolute w-[calc(100%+4px)] h-[calc(100%-4px)] top-[2px] -left-[2px]"></div>
        <div class="outline-white/60 outline bg-black outline-[2px] absolute w-full h-full "></div>
        <div class=" bg-black absolute w-full h-[calc(100%+4px)] -top-[2px]"></div>
        <div class=" bg-black absolute w-[calc(100%+4px)] h-full -left-[2px]"></div>
        {@render children?.()}
    </div>
    {@render children?.()}
</div>
