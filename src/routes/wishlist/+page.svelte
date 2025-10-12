<script lang="ts">
    import SideProfile from "$lib/components/sideProfile.svelte";
    import Wish from "$lib/components/wish.svelte";
</script>

<main class=" text-white py-20 flex w-full h-full px-3 relative breakpoint:flex-col breakpoint:items-center breakpoint:py-10">
    <SideProfile />
    <div class=" flex flex-col items-start w-7/12  h-full px-5 breakpoint:w-fit breakpoint:items-center">
        
        <div class=" flex w-full items-center flex-col">
            <h2 class=" text-4xl text-yellow-500 mb-6 text-center">Wishlist</h2>
            <Wish isLast={true} title="SM7B Microphone" desc="A shure sm7b microphone" date="Oct 12, 2025"/>
            <!-- <Wish title="" desc="" date="Nov 13, 2024" link=""/> -->
        </div>

    </div>
    <div class=" fixed bottom-5 left-5 text-sm text-white/70 breakpoint:static breakpoint:mt-10">
        <p>Erik Andreas Klokk © 2024</p>
        <p>Contact: eaklokk@gmail.com</p>
    </div>
</main>