<script lang="ts">
    import { page } from '$app/state';
    import autoAnimate from '@formkit/auto-animate';
    import Borderbox from "./borderbox.svelte";
    import locationImg from "$lib/assets/location.svg";
    import mailImg from "$lib/assets/mail.svg";
    import githubImg from "$lib/assets/github.svg";
    import linkedinImg from "$lib/assets/linkedin.svg";
    import steamImg from "$lib/assets/steam.svg";
    import menuImg from "$lib/assets/menu.svg";
    import closeImg from "$lib/assets/close.svg";

    let openMenu = $state(false);

    let isOnHome = $derived(page.url.pathname === "/");
    let isOnWishlist = $derived(page.url.pathname === "/wishlist");
    let isOnBlog = $derived(page.url.pathname.includes("/blog"));
    let isOnHomeOffice = $derived(page.url.pathname === "/homeoffice");
    let isOnPhotos = $derived(page.url.pathname.includes("/photos"));
    let isOnInvestments = $derived(page.url.pathname === "/investments");
    let isBlogSlug = $derived(page.url.pathname.includes("/blog/"));
    let isPhotoSlug = $derived(page.url.pathname.includes("/photos/"));

    $effect(() => {
        page.url.pathname;
        openMenu = false;
    });

    function calculateAge(): number {
        const birthDate = new Date('2006-02-13');
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    const age = calculateAge();
</script>

{#snippet navItem(href: string, label: string, isActive: boolean)}
    <li class=" relative mb-2">
        <div class=" after:content-[''] after:bg-yellow-500 after:absolute after:block after:w-3 after:h-[6px] after:-left-6 after:top-3 after:border-y-[2px] after:border-white before:content-[''] before:h-[2px] before:bg-white before:top-[14px] before:-left-[26px] before:absolute before:block before:w-4">
            <a {href} class=" underline text-lg {isActive ? 'text-yellow-500' : ''}">{label}</a>
        </div>
    </li>
{/snippet}

{#snippet navList()}
    {@render navItem("/", "Home", isOnHome)}
    {@render navItem("/blog", "Blog", isOnBlog)}
    {@render navItem("/wishlist", "Wishlist", isOnWishlist)}
    {@render navItem("/homeoffice", "Home Office", isOnHomeOffice)}
    {@render navItem("/photos", "Photos", isOnPhotos)}
    {@render navItem("/investments", "Investments", isOnInvestments)}
{/snippet}

<!-- Mobile nav bar -->
<nav class=" w-full h-14 hidden {isBlogSlug || isPhotoSlug ? 'justify-between' : 'justify-end'} items-center breakpoint:flex px-3 ">
    {#if isBlogSlug}
        <a class=" text-white text-lg underline" href="/blog">{"<"} blog</a>
    {/if}
    {#if isPhotoSlug}
        <a class=" text-white text-lg underline" href="/photos">{"<"} photos</a>
    {/if}
    {#if !openMenu}
        <button onclick={() => openMenu = true}>
            <img class=" h-7" src={menuImg} alt="menu">
        </button>
    {/if}
</nav>

<!-- Mobile slide-out menu -->
<div use:autoAnimate={{ duration: 50 }} class=" h-full fixed right-0 top-0 overflow-hidden flex justify-end z-50">
    {#if openMenu}
        <div class=" text-white w-72 border-l border-white/60 bg-black pl-5">
            <div class=" w-full h-14 flex items-center">
                <button onclick={() => openMenu = false}>
                    <img class=" h-7 " src={closeImg} alt="close menu">
                </button>
            </div>
            <ul class=" ml-7 mt-8 ">
                {@render navList()}
            </ul>
        </div>
    {/if}
</div>

<!-- Desktop sidebar -->
<div class=" flex flex-col {isOnHome ? 'w-1/2 ' : 'w-1/6 '} h-fit sticky px-5 top-20 breakpoint:static breakpoint:mb-12 breakpoint:items-center breakpoint:w-fit">
    {#if isOnHome}
        <h1 class=" font-bold text-6xl mb-12 mt-12 breakpoint:text-center ">
            <a href="/">ERIK ANDREAS KLOKK</a>
        </h1>
        <Borderbox>
            <div class="  flex flex-col  rounded-md px-3 py-1 w-96 breakpoint:w-full breakpoint:my-1">
                <div class=" flex justify-between ">
                    <p class=" flex text-white/60 text-sm gap-1 items-center">
                        <img class=" h-4" src={locationImg} alt="location">
                        Oslo, Norway
                    </p>
                    <div class=" flex gap-4 py-2">
                        <a href="mailto:eaklokk@gmail.com">
                            <img class=" h-6" src={mailImg} alt="new mail">
                        </a>
                        <a target="_blank" href="https://github.com/ErikAndreasKlokk">
                            <img class=" h-6" src={githubImg} alt="github link">
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/erik-andreas-klokk-5415882a0/">
                            <img class=" h-6" src={linkedinImg} alt="linkedin link">
                        </a>
                        <a target="_blank" href="https://steamcommunity.com/profiles/76561198848256576/">
                            <img class=" h-6" src={steamImg} alt="steam link">
                        </a>
                    </div>
                </div>
                <p class=" text-lg my-1">{age} year old fullstack developer working at Statens Pensjonskasse.</p>
            </div>
        </Borderbox>
    {/if}
    <ul class=" ml-7 {!isOnHome ? 'mt-[328px]' : 'mt-12'} block breakpoint:hidden">
        {@render navList()}
    </ul>
</div>
