<script lang="ts">
    import Borderbox from "../borderbox.svelte";

    interface Props {
        link: string;
        title: string;
        desc: string;
        date: string;
        num: string;
        author: string;
    }

    let { link, title, desc, date, num, author }: Props = $props();
</script>

<a href={link} class="w-full block group">
    <Borderbox widthFull={true} marginY="my-4">
        <div class="w-full">
            <!-- Hoveddel -->
            <div class="relative w-full px-6 py-7 bg-zinc-950 overflow-hidden min-h-[9rem]">
                <!-- Subtil rutemønster-bakgrunn -->
                <div class="absolute inset-0 opacity-[0.04]"
                     style="background-image: repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(255,255,255,0.5) 31px, rgba(255,255,255,0.5) 32px), repeating-linear-gradient(90deg, transparent, transparent 31px, rgba(255,255,255,0.5) 31px, rgba(255,255,255,0.5) 32px);">
                </div>
                <!-- Innhold -->
                <div class="relative z-10">
                    <div class="text-yellow-500 text-xs tracking-[0.4em] mb-2">{num}</div>
                    <h2 class="text-2xl text-white leading-tight mb-3 group-hover:text-yellow-500 transition-colors duration-200">{title}</h2>
                    <p class="text-white/50 text-sm leading-relaxed line-clamp-2">{desc}</p>
                </div>
                <!-- READ → fade-in ved hover -->
                <div class="absolute top-4 right-4 text-white/0 group-hover:text-white/50 transition-colors duration-300 text-xs tracking-[0.3em]">
                    READ →
                </div>
            </div>
            <!-- Metadata-strip -->
            <div class="flex items-center flex-wrap gap-x-4 gap-y-1 p-3 border-t border-white/15 text-xs">
                <span class="text-yellow-500">BY</span>
                <span class="text-white/55">{author}</span>
                <span class="ml-auto text-white/35">{date}</span>
            </div>
        </div>
    </Borderbox>
</a>