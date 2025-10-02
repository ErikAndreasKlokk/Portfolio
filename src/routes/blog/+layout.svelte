<script>
    import SideProfile from "$lib/components/sideProfile.svelte";
</script>

<div class=" max-w-[1200px] w-full breakpoint:max-w-[600px] min-h-screen">
      <main class=" text-white py-20 flex w-full min-h-full px-3 relative breakpoint:flex-col breakpoint:items-center breakpoint:py-10">
            <SideProfile />
            <div class=" flex flex-col items-start w-7/12 h-full px-5 breakpoint:w-fit breakpoint:items-center">
                <div class=" flex w-full flex-col">
                    <slot />
                </div>
            </div>
            <div class=" fixed bottom-5 left-5 text-sm text-white/70 breakpoint:static breakpoint:mt-10">
                <p>Erik Andreas Klokk © 2024</p>
                <p>Contact: eaklokk@gmail.com</p>
            </div>
      </main>
</div>
