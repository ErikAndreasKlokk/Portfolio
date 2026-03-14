<script lang="ts">
    import Wish from "$lib/components/wish.svelte";
</script>

<div class=" flex flex-col items-start w-7/12 h-full px-5 breakpoint:w-fit breakpoint:items-center">
    <div class=" flex w-full items-center flex-col">
        <h2 class=" text-4xl text-yellow-500 mb-6 text-center">Wishlist</h2>
        <Wish isLast={true} title="SM7B Microphone" desc="A shure sm7b microphone" date="Oct 12, 2025"/>
        <!-- <Wish title="" desc="" date="Nov 13, 2024" link=""/> -->
    </div>
    <p class=" text-transparent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium sit quia modi expedita quaerat, dolores facilis iure quidem praesentium, voluptate earum ex, eius possimus cumque illum. Saepe, nobis in?</p>
</div>