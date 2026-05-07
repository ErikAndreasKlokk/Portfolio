<script lang="ts">
    import IMG_1354jpg from '$lib/assets/photos/IMG_1354.jpg?enhanced';
    import Borderbox from "$lib/components/borderbox.svelte";
</script>

<div class="flex flex-col items-start w-7/12 h-full px-5 breakpoint:w-full breakpoint:items-center">
    <div class="flex w-full items-center flex-col">
        <h2 class="text-4xl text-yellow-500 mb-1 text-center">Photos</h2>
        <p class="text-white/40 text-xs tracking-[0.35em] mb-8">COLLECTIONS</p>

        <!-- Japan 2025 -->
        <a href="/photos/japan-2025" class="w-full block group">
            <Borderbox widthFull={true} marginY="my-4">
                <div class="w-full">
                    <div class="relative w-full aspect-video overflow-hidden">
                        <enhanced:img
                            src={IMG_1354jpg}
                            alt="Japan 2025"
                            class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            draggable="false"
                        />
                        <!-- Gradient-overlegg -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                        <!-- Tittel-overlegg -->
                        <div class="absolute bottom-0 left-0 p-5">
                            <div class="text-yellow-500 text-xs tracking-[0.4em] mb-1">COLLECTION 001</div>
                            <h1 class="text-5xl text-white leading-none">JAPAN</h1>
                            <span class="text-pink-300 text-2xl">2025</span>
                        </div>
                        <div class="absolute top-4 right-4 text-white/0 group-hover:text-white/60 transition-colors duration-300 text-xs tracking-[0.3em]">
                            VIEW →
                        </div>
                    </div>
                    <!-- Metadata-strip -->
                    <div class="flex items-center flex-wrap gap-x-2 gap-y-1 p-3 border-t border-white/20 text-xs">
                        <span class="text-yellow-500">WHERE</span>
                        <span class="text-white/65">Tokyo · Kyoto · Hiroshima</span>
                        <span class="text-white/20 ml-auto hidden breakpoint:hidden sm:inline">·</span>
                        <span class="ml-auto text-white/35">11 PHOTOS</span>
                        <span class="text-white/20">·</span>
                        <span class="text-white/35">iPhone 13 mini</span>
                    </div>
                </div>
            </Borderbox>
        </a>

        <!-- Japan 2026 - Kommer snart -->
        <a href="/photos/japan-2026" class="w-full block">
            <Borderbox widthFull={true} marginY="my-4">
                <div class="w-full opacity-45">
                    <div class="relative w-full aspect-video overflow-hidden bg-zinc-950 flex items-center justify-center">
                        <!-- Subtil rutemønster-bakgrunn -->
                        <div class="absolute inset-0 opacity-10"
                             style="background-image: repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(255,255,255,0.3) 31px, rgba(255,255,255,0.3) 32px), repeating-linear-gradient(90deg, transparent, transparent 31px, rgba(255,255,255,0.3) 31px, rgba(255,255,255,0.3) 32px);">
                        </div>
                        <div class="text-center relative z-10">
                            <div class="text-yellow-500/50 text-xs tracking-[0.4em] mb-2">COLLECTION 002</div>
                            <h1 class="text-5xl text-white/25 leading-none">JAPAN</h1>
                            <span class="text-pink-300/25 text-2xl">2026</span>
                            <div class="mt-6 border border-white/20 inline-flex px-5 py-1.5">
                                <span class="text-white/40 text-xs tracking-[0.5em]">COMING SOON</span>
                            </div>
                        </div>
                    </div>
                    <!-- Metadata-strip -->
                    <div class="flex items-center p-3 border-t border-white/10 text-xs">
                        <span class="text-white/30 tracking-[0.25em]">IN PREPARATION</span>
                    </div>
                </div>
            </Borderbox>
        </a>
    </div>
</div>
