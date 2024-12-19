<script lang="ts">
    export let marginY: string = "";
    export let marginX: string = "";
    export let widthFull: boolean = false;
</script>

<div class=" relative flex justify-center items-center h-fit {widthFull ? "w-full" : "w-fit"} {marginY} {marginX}">
    <div class=" absolute h-fit {widthFull ? "w-full" : "w-fit"} -z-10">
        <div class="outline-white/60 outline bg-black outline-[2px] absolute w-[calc(100%-4px)] h-[calc(100%+4px)] -top-[2px] left-[2px]"/>
        <div class="outline-white/60 outline bg-black outline-[2px] absolute w-[calc(100%+4px)] h-[calc(100%-4px)] top-[2px] -left-[2px]"/>
        <div class="outline-white/60 outline bg-black outline-[2px] absolute w-full h-full "/>
        <div class=" bg-black absolute w-full h-[calc(100%+4px)] -top-[2px]"/>
        <div class=" bg-black absolute w-[calc(100%+4px)] h-full -left-[2px]"/>
        <slot/>
    </div>
    <slot/>
</div>
