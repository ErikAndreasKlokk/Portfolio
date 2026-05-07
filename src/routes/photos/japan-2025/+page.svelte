<script lang="ts">
    import Photo from "$lib/components/photo.svelte";
    import { photoMetadata } from '$lib/assets/photos/metadata';

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

    // Hent kamera, sted og koordinater fra generert EXIF-metadata
    const cam = (file: string) => photoMetadata[file]?.camera;
    const loc = (file: string) => photoMetadata[file]?.location;
    const lat = (file: string) => photoMetadata[file]?.lat;
    const lon = (file: string) => photoMetadata[file]?.lon;
</script>

<div class="flex flex-col items-start w-7/12 h-full px-5 breakpoint:w-full breakpoint:items-center">
    <div class="flex w-full items-center flex-col">

        <!-- Samlingsoverskrift -->
        <div class="w-full mb-6">
            <a href="/photos" class="text-white/40 text-xs tracking-[0.3em] hover:text-yellow-500 transition-colors">← COLLECTIONS</a>
            <div class="mt-4 border-b border-white/15 pb-4">
                <div class="text-yellow-500 text-xs tracking-[0.4em] mb-1">COLLECTION 001</div>
                <div class="flex items-baseline gap-4 flex-wrap">
                    <h2 class="text-4xl text-white leading-none">JAPAN <span class="text-pink-300">2025</span></h2>
                </div>
                <div class="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs">
                    <span><span class="text-yellow-500">WHERE</span>&nbsp;<span class="text-white/60">Tokyo · Kyoto · Hiroshima</span></span>
                    <span><span class="text-yellow-500">PHOTOS</span>&nbsp;<span class="text-white/60">11</span></span>
                    <span><span class="text-yellow-500">CAM</span>&nbsp;<span class="text-white/60">{cam('IMG_1288.jpg')}</span></span>
                </div>
            </div>
        </div>

        <!-- Bildegalleri -->
        <div class="grid grid-cols-2 gap-4 w-full">
            <Photo src={IMG_1288jpg} location={loc('IMG_1288.jpg')} who="Erik Andreas Klokk" camera={cam('IMG_1288.jpg')} lat={lat('IMG_1288.jpg')} lon={lon('IMG_1288.jpg')} />
            <Photo src={IMG_1353jpg} location={loc('IMG_1353.jpg')} who="Erik Andreas Klokk" camera={cam('IMG_1353.jpg')} lat={lat('IMG_1353.jpg')} lon={lon('IMG_1353.jpg')} />
            <Photo src={IMG_1354jpg} landscape={true} location={loc('IMG_1354.jpg')} who="Erik Andreas Klokk" camera={cam('IMG_1354.jpg')} lat={lat('IMG_1354.jpg')} lon={lon('IMG_1354.jpg')} />
            <Photo src={IMG_1404jpg} location={loc('IMG_1404.jpg')} who="Erik Andreas Klokk" camera={cam('IMG_1404.jpg')} lat={lat('IMG_1404.jpg')} lon={lon('IMG_1404.jpg')} />
            <Photo src={IMG_1426jpg} location={loc('IMG_1426.jpg')} who="Erik Andreas Klokk" camera={cam('IMG_1426.jpg')} lat={lat('IMG_1426.jpg')} lon={lon('IMG_1426.jpg')} />
            <Photo src={IMG_1431jpg} location={loc('IMG_1431.jpg')} who="Erik Andreas Klokk" camera={cam('IMG_1431.jpg')} lat={lat('IMG_1431.jpg')} lon={lon('IMG_1431.jpg')} />
            <Photo src={shrinejpg} location={loc('shrine.jpg')} who="Erik Andreas Klokk" camera={cam('shrine.jpg')} lat={lat('shrine.jpg')} lon={lon('shrine.jpg')} />
            <Photo src={IMG_1482jpg} landscape={true} location={loc('IMG_1482.jpg')} who="Erik Andreas Klokk" camera={cam('IMG_1482.jpg')} lat={lat('IMG_1482.jpg')} lon={lon('IMG_1482.jpg')} />
            <Photo src={castleImage} location={loc('castle.jpg')} who="Erik Andreas Klokk" camera={cam('castle.jpg')} lat={lat('castle.jpg')} lon={lon('castle.jpg')} />
            <Photo src={IMG_1526jpg} location={loc('IMG_1526.jpg')} who="Erik Andreas Klokk" camera={cam('IMG_1526.jpg')} lat={lat('IMG_1526.jpg')} lon={lon('IMG_1526.jpg')} />
            <Photo src={IMG_1535jpg} location={loc('IMG_1535.jpg')} who="Erik Andreas Klokk" camera={cam('IMG_1535.jpg')} lat={lat('IMG_1535.jpg')} lon={lon('IMG_1535.jpg')} />
        </div>
    </div>
</div>
