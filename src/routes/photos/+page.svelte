<script lang="ts">
  import Photo from "$lib/components/photo.svelte";
import SideProfile from "$lib/components/sideProfile.svelte";


</script>

<main class=" text-white py-20 flex w-full h-full px-3 relative breakpoint:flex-col breakpoint:items-center breakpoint:py-10">
    <SideProfile />
    <div class=" flex flex-col items-start w-7/12  h-full px-5 breakpoint:w-full breakpoint:items-center">
        <div class=" flex w-full items-center flex-col">
            <h2 class=" text-4xl text-yellow-500 mb-6 text-center">Photos</h2>
            <h3 class=" text-2xl mb-4 text-start w-full">Japan collection</h3>
            <div class=" grid grid-cols-2 gap-4 w-full">
                <Photo src="IMG_1426.jpg" />
                <Photo src="castle.jpg" />
                <Photo src="IMG_1354.jpg" landscape={true} />
                <Photo src="IMG_1404.jpg" />
                <Photo src="IMG_1353.jpg" />
                <Photo src="IMG_1288.jpg" />
                <Photo src="shrine.jpg" />
                <Photo src="IMG_1482.JPG" landscape={true} />
                <Photo src="IMG_1535.JPG" />
                <Photo src="IMG_1526.jpg" />
                <Photo src="IMG_1431.jpg" />
            </div>
        </div>
    </div>
    <div class=" fixed bottom-5 left-5 text-sm text-white/70 breakpoint:static breakpoint:mt-10">
        <p>Erik Andreas Klokk © 2024</p>
        <p>Contact: eaklokk@gmail.com</p>
    </div>
</main>