<script lang="ts">
    import { page } from '$app/state';
    import Borderbox from "./borderbox.svelte";
    import locationImg from "$lib/assets/location.svg"
    import mailImg from "$lib/assets/mail.svg"
    import githubImg from "$lib/assets/github.svg"
    import linkedinImg from "$lib/assets/linkedin.svg"
    import steamImg from "$lib/assets/steam.svg"

    let isOnWishlist: boolean = $state(false)
    let isOnBlog: boolean = $state(false)
    let isOnHome: boolean = $state(false)
    let isOnHomeOffice: boolean = $state(false)
    let isOnPhotos: boolean = $state(false)

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
        if (url_check === "/photos") {
            return isOnPhotos = true
        }
    }

    URL_color_changer(page.url.pathname)
</script>

<div class=" flex flex-col {isOnHome ? "w-1/2 " : "w-1/6 "} h-fit sticky px-5 top-20 breakpoint:static breakpoint:mb-12 breakpoint:items-center breakpoint:w-fit">
    {#if isOnHome}
        <h1 class=" font-bold text-6xl mb-12 breakpoint:text-center ">
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
    <ul class=" ml-7 {!isOnHome ? "mt-[328px]" : "mt-12"} block breakpoint:hidden">
        <li class=" relative mb-2">
            <div class=" after:content-[''] after:bg-yellow-500 after:absolute after:block after:w-3 after:h-[6px] after:-left-6 after:top-3 after:border-y-[2px] after:border-white before:content-[''] before:h-[2px] before:bg-white before:top-[14px] before:-left-[26px] before:absolute before:block before:w-4">
                <a href="/" class=" underline text-lg {isOnHome ? "text-yellow-500" : ""}">Home</a>
            </div>
        </li>
        <li class=" relative mb-2">
            <div class=" after:content-[''] after:bg-yellow-500 after:absolute after:block after:w-3 after:h-[6px] after:-left-6 after:top-3 after:border-y-[2px] after:border-white before:content-[''] before:h-[2px] before:bg-white before:top-[14px] before:-left-[26px] before:absolute before:block before:w-4">
                <a href="/blog" class=" underline text-lg {isOnBlog ? "text-yellow-500" : ""}">Blog</a>
            </div>
        </li>
        <li class=" relative mb-2">
            <div class=" after:content-[''] after:bg-yellow-500 after:absolute after:block after:w-3 after:h-[6px] after:-left-6 after:top-3 after:border-y-[2px] after:border-white before:content-[''] before:h-[2px] before:bg-white before:top-[14px] before:-left-[26px] before:absolute before:block before:w-4">
                <a href="/wishlist" class=" underline text-lg {isOnWishlist ? "text-yellow-500" : ""}">Wishlist</a>
            </div>
        </li>
        <li class=" relative mb-2">
            <div class=" after:content-[''] after:bg-yellow-500 after:absolute after:block after:w-3 after:h-[6px] after:-left-6 after:top-3 after:border-y-[2px] after:border-white before:content-[''] before:h-[2px] before:bg-white before:top-[14px] before:-left-[26px] before:absolute before:block before:w-4">
                <a href="/homeoffice" class=" underline text-lg {isOnHomeOffice ? "text-yellow-500" : ""}">Home Office</a>
            </div>
        </li>
        <li class=" relative mb-2">
            <div class=" after:content-[''] after:bg-yellow-500 after:absolute after:block after:w-3 after:h-[6px] after:-left-6 after:top-3 after:border-y-[2px] after:border-white before:content-[''] before:h-[2px] before:bg-white before:top-[14px] before:-left-[26px] before:absolute before:block before:w-4">
                <a href="/photos" class=" underline text-lg {isOnPhotos ? "text-yellow-500" : ""}">Photos</a>
            </div>
        </li>
    </ul>
</div>