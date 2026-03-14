<script lang="ts">
    import IMG_1354jpg from '$lib/assets/photos/IMG_1354.jpg?enhanced';
    import Borderbox from "$lib/components/borderbox.svelte";
</script>

<div class=" flex flex-col items-start w-7/12 h-full px-5 breakpoint:w-full breakpoint:items-center">
    <div class=" flex w-full items-center flex-col">
        <h2 class=" text-4xl text-yellow-500 mb-6 text-center">Photos</h2>
        <a href="/photos/japan-2025" class=" w-full h-full">
            <Borderbox widthFull={true} marginY="my-4">
                <div class="relative w-full aspect-video overflow-hidden max-h-screen">
                    <enhanced:img src={IMG_1354jpg} alt="Image of Japanese landscape" class="absolute inset-0 w-full h-full object-cover object-center" draggable="false" />
                    <h1 class="absolute inset-0 flex items-center justify-center text-6xl breakpoint:text-5xl text-white underline underline-offset-8 decoration-pink-300">Japan 2025</h1>
                </div>
            </Borderbox>
        </a>
    </div>
</div>