<script lang="ts">
    import { page } from '$app/stores';
    import autoAnimate from '@formkit/auto-animate';
    import { navigating } from '$app/stores';

    let openMenu: boolean = false;
    let menuWidth: string = "0px"

    function URL_blog_adder(url_check: string) {
        if (url_check.includes("/blog/")) {
            return true
        } 
    }

    
    function openMenuFunc() {
        openMenu = !openMenu
        if (menuWidth === "0px") {
            menuWidth = "fit-content"
        } else {
            menuWidth = "0px"
        }
    }
    
    let isOnHome: boolean = false
    let isOnWishlist: boolean = false
    let isOnBlog: boolean = false
    let isOnHomeOffice: boolean = false
    
    
    function URL_color_changer(url_check: string) {
        if (url_check === "/") {
            isOnWishlist = false
            isOnBlog = false
            isOnHomeOffice = false
            openMenu = false
            menuWidth = "0px"
            return isOnHome = true
        }
        if (url_check === "/wishlist") {
            isOnHome = false
            isOnBlog = false
            isOnHomeOffice = false
            openMenu = false
            menuWidth = "0px"
            return isOnWishlist = true
        } 
        if (url_check === "/blog") {
            isOnHome = false
            isOnWishlist = false
            isOnHomeOffice = false
            openMenu = false
            menuWidth = "0px"
            return isOnBlog = true
        }
        if (url_check === "/homeoffice") {
            isOnWishlist = false
            isOnBlog = false
            isOnHome = false
            openMenu = false
            menuWidth = "0px"
            return isOnHomeOffice = true
        }
    }
    
    let isBlogSlug = URL_blog_adder($page.url.pathname)
    
    URL_color_changer($page.url.pathname)
    $: if($navigating) URL_color_changer($page.url.pathname);
    $: if($navigating) isBlogSlug = URL_blog_adder($page.url.pathname);
</script>

<nav class=" w-full h-14 hidden {isBlogSlug ? "justify-between" : "justify-end"} items-center breakpoint:flex px-3 ">
    {#if isBlogSlug} 
        <a class=" text-white text-lg underline" href="/blog">{"<"} blog</a>
    {/if}
    {#if !openMenu}
        <button on:click={() => openMenuFunc()}>
            <img class=" h-7 {openMenu ? "rotate-45" : "rotate-[225deg]"} " src="/arrow.svg" alt="">
        </button>
    {/if}
</nav>
<div use:autoAnimate={{ duration: 50 }} class=" h-full fixed right-0 top-0 overflow-hidden flex justify-end z-50">
    {#if openMenu}
        <div class=" text-white w-72 border-l border-white/60 bg-black pl-5">
            <div class=" w-full h-14 flex items-center">
                {#if openMenu}
                    <button on:click={() => openMenuFunc()}>
                        <img class=" h-7 {openMenu ? "rotate-45" : "rotate-[225deg]"} " src="/arrow.svg" alt="">
                    </button>
                {/if}
            </div>
            <ul class=" ml-7 mt-8 ">
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
    {/if}
</div>
