<script lang="ts">
    import Photo from "$lib/components/photo.svelte";
    import SideProfile from "$lib/components/sideProfile.svelte";

    import IMG_1426jpg from '$lib/assets/photos/IMG_1426.jpg?enhanced';
    import castleImage from '$lib/assets/photos/castle.jpg?enhanced';
    import IMG_1354jpg from '$lib/assets/photos/IMG_1354.jpg?enhanced';
    import IMG_1404jpg from '$lib/assets/photos/IMG_1404.jpg?enhanced';
    import IMG_1353jpg from '$lib/assets/photos/IMG_1353.jpg?enhanced';
    import IMG_1288jpg from '$lib/assets/photos/IMG_1288.jpg?enhanced';
    import shrinejpg from '$lib/assets/photos/shrine.jpg?enhanced';
    import IMG_1482jpg from '$lib/assets/photos/IMG_1482.jpg?enhanced';
    import IMG_1535jpg from '$lib/assets/photos/IMG_1535.jpg?enhanced';
    import IMG_1526jpg from '$lib/assets/photos/IMG_1526.jpg?enhanced';
    import IMG_1431jpg from '$lib/assets/photos/IMG_1431.jpg?enhanced';
</script>

<main class=" text-white py-20 flex w-full h-full px-3 relative breakpoint:flex-col breakpoint:items-center breakpoint:py-10">
    <SideProfile />
    <div class=" flex flex-col items-start w-7/12  h-full px-5 breakpoint:w-full breakpoint:items-center">
        <div class=" flex w-full items-center flex-col">
            <h2 class=" text-4xl text-yellow-500 mb-6 text-center">Photos</h2>
            <h3 class=" text-2xl mb-4 text-start w-full">Japan collection 2025</h3>
            <div class=" grid grid-cols-2 gap-4 w-full">
                <Photo src={IMG_1426jpg} />
                <Photo src={castleImage} />
                <Photo src={IMG_1354jpg} landscape={true} />
                <Photo src={IMG_1404jpg} />
                <Photo src={IMG_1353jpg} />
                <Photo src={IMG_1288jpg} />
                <Photo src={shrinejpg} />
                <Photo src={IMG_1482jpg} landscape={true} />
                <Photo src={IMG_1535jpg} />
                <Photo src={IMG_1526jpg} />
                <Photo src={IMG_1431jpg} />
            </div>
        </div>
    </div>
    <div class=" fixed bottom-5 left-5 text-sm text-white/70 breakpoint:static breakpoint:mt-10">
        <p>Erik Andreas Klokk © {new Date().getFullYear()}</p>
        <p>Contact: eaklokk@gmail.com</p>
    </div>
</main>