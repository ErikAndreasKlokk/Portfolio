<script lang="ts">
    import BlogLink from "$lib/components/blog-components/blogLink.svelte";
</script>

<svelte:head>
    <title>Erik Andreas Klokk's Blog</title>
</svelte:head>

<div class="flex flex-col items-start w-7/12 h-full px-5 breakpoint:w-full breakpoint:items-center">
    <div class="flex w-full items-center flex-col">
        <h2 class="text-4xl text-yellow-500 mb-1 text-center">Blog</h2>
        <p class="text-white/40 text-xs tracking-[0.35em] mb-8">POSTS</p>

        <BlogLink
            link="/blog/how-i-set-up-my-homelab"
            num="POST 001"
            title="How i set up my homelab"
            author="Erik Andreas Klokk"
            date="6 May, 2026"
            desc="Much like this personal website, I wanted a homelab to use as a playground so I could test and learn new things. It took some time to gather the motivation to start, as it is a completely new and hard to learn field, but now that I've gotten into it, I'm really happy i did."
        />
        <BlogLink
            link="/blog/what-inspired-my-portfolio"
            num="POST 002"
            title="What inspired my portfolio?"
            author="Erik Andreas Klokk"
            date="01 Jul, 2025"
            desc="I've always thought the idea of a personal website/portfolio was cool, so i decided to make one as a side project. This site is purely for fun and to test out some of my skills, as well as showcasing what i've learned so far."
        />
    </div>
</div>

<!-- <script lang="ts">
    import Image from "$lib/components/blog-components/image.svelte";
    import Info from "$lib/components/blog-components/info.svelte";
    import Paragraph from "$lib/components/blog-components/paragraph.svelte";
    import Title from "$lib/components/blog-components/title.svelte";
    import Undertitle from "$lib/components/blog-components/undertitle.svelte";

</script>
  
<Title title=""/>
<Info author="" createdDate="" lastUpdatedDate=""/>
<Paragraph>

</Paragraph>
<Undertitle title=""/>
<Image src=""/> -->