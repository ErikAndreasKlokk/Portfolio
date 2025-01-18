<script lang="ts">
    import { page } from '$app/stores';
    import Borderbox from "./borderbox.svelte";

    let isOnWishlist: boolean = false
    let isOnBlog: boolean = false
    let isOnHome: boolean = false
    let isOnHomeOffice: boolean = false
    

    function URL_color_changer(url_check: string) {
        if (url_check === "/wishlist") {
            return isOnWishlist = true
        } 
        if (url_check === "/blog") {
            return isOnBlog = true
        }
        if (url_check === "/") {
            return isOnHome = true
        }
        if (url_check === "/homeoffice") {
            return isOnHomeOffice = true
        }
    }

    URL_color_changer($page.url.pathname)
</script>

<div class=" flex flex-col {isOnHome ? "w-1/2 " : "w-1/6 "} h-fit sticky px-5 top-56 breakpoint:static breakpoint:mb-5 breakpoint:items-center breakpoint:w-fit">
    {#if isOnHome}
        <h1 class=" font-bold text-6xl mb-4 breakpoint:text-center ">
            <a href="/">ERIK ANDREAS KLOKK</a>
        </h1>
        <Borderbox> 
            <div class="  flex flex-col  rounded-md px-3 py-1 w-96 breakpoint:w-full breakpoint:my-1">
                <div class=" flex justify-between ">
                    <p class=" flex text-white/60 text-sm gap-1 items-center">
                        <img class=" h-4" src="/location.svg" alt="location">
                        Oslo, Norway
                    </p>
                    <div class=" flex gap-4 py-2">
                        <a href="mailto:eaklokk@gmail.com">
                            <img class=" h-6" src="/mail.svg" alt="new mail">
                        </a>
                        <a target="_blank" href="https://github.com/ErikAndreasKlokk">
                            <img class=" h-6" src="/github.svg" alt="github link">
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/erik-andreas-klokk-5415882a0/">
                            <img class=" h-6" src="/linkedin.svg" alt="linkedin link">
                        </a>
                        <a target="_blank" href="https://steamcommunity.com/profiles/76561198848256576/">
                            <img class=" h-6" src="/steam.svg" alt="steam link">
                        </a>
                    </div>
                </div>
                <p class=" text-lg my-1">18 year old frontend web developer working at Statens Pensjonskasse.</p>
            </div>
        </Borderbox> 
    {/if}
    <ul class=" ml-7 mt-8 absolute top-60 block breakpoint:hidden">
        <li class=" relative mb-2">
            <div class=" after:content-[''] after:bg-yellow-500 after:absolute after:block after:w-3 after:h-[6px] after:-left-6 after:top-2 after:border-y-[2px] after:border-white before:content-[''] before:h-[2px] before:bg-white before:top-[10px] before:-left-[26px] before:absolute before:block before:w-4">
                <a href="/" class=" underline text-lg {isOnHome ? "text-yellow-500" : ""}">Home</a>
            </div>
        </li>
        <li class=" relative mb-2">
            <div class=" after:content-[''] after:bg-yellow-500 after:absolute after:block after:w-3 after:h-[6px] after:-left-6 after:top-2 after:border-y-[2px] after:border-white before:content-[''] before:h-[2px] before:bg-white before:top-[10px] before:-left-[26px] before:absolute before:block before:w-4">
                <a href="/blog" class=" underline text-lg {isOnBlog ? "text-yellow-500" : ""}">Blog</a>
            </div>
        </li>
        <li class=" relative mb-2">
            <div class=" after:content-[''] after:bg-yellow-500 after:absolute after:block after:w-3 after:h-[6px] after:-left-6 after:top-2 after:border-y-[2px] after:border-white before:content-[''] before:h-[2px] before:bg-white before:top-[10px] before:-left-[26px] before:absolute before:block before:w-4">
                <a href="/wishlist" class=" underline text-lg {isOnWishlist ? "text-yellow-500" : ""}">Wishlist</a>
            </div>
        </li>
        <li class=" relative mb-2">
            <div class=" after:content-[''] after:bg-yellow-500 after:absolute after:block after:w-3 after:h-[6px] after:-left-6 after:top-2 after:border-y-[2px] after:border-white before:content-[''] before:h-[2px] before:bg-white before:top-[10px] before:-left-[26px] before:absolute before:block before:w-4">
                <a href="/homeoffice" class=" underline text-lg {isOnHomeOffice ? "text-yellow-500" : ""}">Home Office</a>
            </div>
        </li>
    </ul>
</div>