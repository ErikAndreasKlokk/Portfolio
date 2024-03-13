<script>
  import { onMount } from 'svelte';
    import { language } from '../lib/stores/languages'
    import axios from 'axios';

    let Norsk = [
                "Mitt navn er", 
                "Mine vidunderlige", 
                "Prosjekter", 
                "Lær litt om meg ved å skrolle til høyre, ", 
                "eller skroll ned for å se hva jeg holder på med!", 
                "Litt om meg: ", 
                "Akkurat nå er jeg elev på Elvebakken VGS i Oslo, Norge. ", 
                "Jeg er en IT nerd som er veldig glad i programmering og å løse tech problemer. ", 
                "Jeg elsker å lære nye ting, som diverse programerings språk eller teknologier. ", 
                "På fritiden er jeg en gamer som hovedsakelig spiller FPS spill, men jeg driver også med styrke trening. ",
                "Ta gjerne kontakt med meg; eaklokk[at]gmail.com."
            ]

    let English = [
                    "My name is", 
                    "My wonderful", 
                    "Projects", 
                    "Learn a little about me by scrolling to the right, ", 
                    "or scroll down to see what im working on!", 
                    "A little about me: ", 
                    "Currently i am a student at Elvebakken VGS i Oslo, Norway. ", 
                    "I am an IT nerd who loves programming and solving tech issues. ", 
                    "I love learning new things, like different programming languages or technologies. ", 
                    "In my free time i am a gamer who mainly plays FPS games, but i do also do some strength training. ",
                    "Feel free to contact me; eaklokk[at]gmail.com."
                ]

    let selectedLanguage = Norsk

    language.subscribe(() => {
        if ($language.language === "Norsk") {
            selectedLanguage = Norsk
        }
        if ($language.language === "English") {
            selectedLanguage = English
        }
    })

    let repos = [];

    onMount(() => {
        axios.get('https://api.github.com/users/ErikAndreasKlokk/repos').then(function (response) {
            repos = response.data
            repos = repos.sort(
                (a, b) => b.stargazers_count - a.stargazers_count
            );
            console.log(repos)
        })
        
    })

</script>

<main class=" flex items-center justify-center flex-col scroll-smooth">
    <div class=" w-full snap-y snap-mandatory overflow-y-scroll overflow-x-hidden h-screen scrollbar-hide">
        <section id="forside" class=" relative w-full h-screen flex items-center justify-between flex-col snap-always snap-start">
            <!-- forside !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
            <!-- pil opp div -->
            <div class=" w-16 h-16">

            </div>
            <div class=" flex justify-between w-full items-center">
                <!-- pil venstre div -->
                <div class=" min-w-6 min-h-6">

                </div>
                <!-- content div -->
                <div class=" w-full flex justify-center items-center flex-col max-w-[1000px]">
                    <p class=" text-2xl font-light">{selectedLanguage[0]}</p>
                    <p class=" text-7xl font-bold text-center sm:text-4xl">Erik Andreas Klokk</p>
                </div>
                <!-- pil høyre div -->
                <div class=" min-w-6 min-h-6">

                </div>
            </div>
            <!-- pil ned div -->
            <div class=" flex w-16 h-16 md:h-48">
                <a href="#omsiden" class=" rotate-90 flex justify-center"> <img class=" w-16" src="arrow.svg" alt="arrow"></a>
            </div>
        </section>
        <section class=" w-full h-screen snap-always snap-start">
            <div class=" w-full relative snap-x snap-mandatory overflow-y-hidden overflow-x-scroll h-screen flex scrollbar-hide">
                <section id="omsiden" class=" min-w-full h-screen flex items-center justify-between flex-col snap-always snap-start">
                    <!-- litt om siden !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
                    <!-- pil opp div -->
                    <div class=" w-16 h-16 flex">
                        <a href="#forside" class="rotate-[270deg]"><img class=" w-16" src="arrow.svg" alt="arrow"></a>
                    </div>
                    <div class=" flex justify-between w-full items-center">
                        <!-- pil venstre div -->
                        <div class=" w-16 h-16 flex justify-center items-center">
                            
                        </div>
                        <!-- content div -->
                        <div class=" w-full flex justify-center items-center flex-col max-w-[700px]">
                            <p class=" text-4xl text-center sm:text-2xl">{selectedLanguage[3]}{selectedLanguage[4]}</p>
                        </div>
                        <!-- pil høyre div -->
                        <div class=" min-w-16 min-h-16">
                            <a href="#ommeg" ><img class=" w-16" src="arrow.svg" alt="arrow"></a>
                        </div>
                    </div>
                    <!-- pil ned div -->
                    <div class=" w-16 h-16 md:h-48 flex justify-center items-center">
                        <a href="#prosjekter" class=" rotate-90"><img class=" w-16" src="arrow.svg" alt="arrow"></a>
                    </div>
                </section>
                <section class=" min-w-full h-screen flex items-center justify-center flex-col snap-always snap-start">
                    <div class=" w-full relative snap-y snap-mandatory overflow-y-scroll overflow-x-hidden h-screen scrollbar-hide">
                        <section id="ommeg" class=" min-w-full h-screen flex items-center justify-between flex-col snap-always snap-start">
                            <!-- om meg !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
                            <!-- pil opp div -->
                            <div class=" w-16 h-16">

                            </div>
                            <div class=" flex justify-between w-full items-center">
                                <!-- pil venstre div -->
                                <div class=" w-16 h-16 flex justify-center items-center">
                                    <a href="#omsiden" class=" rotate-180 w-16"><img class=" w-16" src="arrow.svg" alt=""></a>
                                </div>
                                <!-- content div -->
                                <div class=" w-full flex justify-center items-center flex-col max-w-[1000px] ">
                                    <p class=" text-7xl font-bold sm:text-4xl">{selectedLanguage[5]}</p>
                                    <p class="  text-2xl font-light mt-5 sm:text-lg">{selectedLanguage[6]}{selectedLanguage[7]}{selectedLanguage[8]}{selectedLanguage[9]}{selectedLanguage[10]}</p>
                                </div>
                                <!-- pil høyre div -->
                                <div class=" min-w-16 min-h-16">

                                </div>
                            </div>
                            <!-- pil ned div -->
                            <div class=" w-16 h-16 md:h-48 flex justify-center items-center">
                                <a href="#ommegbilde" class=" rotate-90"><img class=" w-16" src="arrow.svg" alt=""></a>
                            </div>
                        </section>
                        <section id="ommegbilde" class=" relative min-w-full h-screen flex items-center justify-between flex-col snap-always snap-start">
                            <!--  om meg bilde !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
                            <!-- pil opp div -->
                            <div class=" w-16 h-16 flex">
                                <a href="#ommeg" class=" rotate-[270deg]"><img class=" w-16 rounded-xl" src="arrow.svg" alt=""></a>
                            </div>
                            <div class=" flex justify-between w-full items-center">
                                <!-- pil venstre div -->
                                <div class=" min-w-6 min-h-6">

                                </div>
                                <!-- content div -->
                                <div class=" w-full flex justify-center items-center flex-col max-w-[1000px]">
                                    <img class=" !aspect-square max-h-[80vh] " src="Erik_The_Thinker._Ferdy.gif" alt="">
                                </div>
                                <!-- pil høyre div -->
                                <div class=" min-w-6 min-h-6">

                                </div>
                            </div>
                            <!-- pil ned div -->
                            <div class=" flex w-16 h-16">
                                
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </section>
        <section id="prosjekter" class=" relative min-w-full h-screen flex items-center justify-between flex-col snap-always snap-start overflow-y-hidden xl:justify-normal">
            <!-- Prosjekter !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
            <!-- pil opp div -->
            <div class=" w-16 h-16 flex">
                <a href="#omsiden" class=" rotate-[270deg]"><img class=" w-16 rounded-xl" src="arrow.svg" alt=""></a>
            </div>
            <div class=" flex justify-between w-full items-center">
                <!-- pil venstre div -->
                <div class=" min-w-6 min-h-6">

                </div>
                <!-- content div -->
                <div class=" w-full flex justify-center items-center flex-col">
                    <p class=" text-2xl font-light">{selectedLanguage[1]}</p>
                    <p class=" text-7xl font-bold sm:text-4xl">{selectedLanguage[2]} :</p>
                    <div class=" flex-wrap flex justify-center mt-5">
                        {#each repos as repo, id}
                            {#if repo.name !== "ErikAndreasKlokk"}
                                <div class=" w-full min-h-32 max-w-72  m-4 border border-gray-200 rounded-lg p-3 flex flex-col justify-between hover:scale-[1.15] transition-all">
                                    <div class=" flex flex-col">
                                        <div class=" flex justify-between w-full">
                                            <div class=" flex">
                                                <a target="_blank" href="{repo.html_url}" class=" font-bold underline hover:decoration-blue-500 ">{repo.name}</a>
                                                {#if repo.homepage !== ""}
                                                    <a href={repo.homepage} target="_blank" class=" ml-3"><img src="location.svg" alt="page for website"></a>
                                                {/if}
                                            </div>
                                            <div class=" flex">
                                                <img src="star.svg" alt="rating">
                                                <p>{repo.stargazers_count}</p>
                                            </div>
                                        </div>
                                        <a href="{repo.html_url}" target="_blank" alt=" description">{repo.description}</a>
                                    </div>
                                    <div class=" flex justify-between w-full">
                                        <time class=" text-sm" dateTime={repo.created_at}>
                                            {new Date(repo.created_at).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                            })}
                                        </time>
                                        <p class=" bg-gray-200 text-gray-800 px-1 rounded-lg font-bold text-xs flex justify-center items-center">{repo.language}</p>
                                    </div>
                                </div>
                            {/if}
                        {/each}
                    </div>
                </div>
                <!-- pil høyre div -->
                <div class=" min-w-6 min-h-6">

                </div>
            </div>
            <!-- pil ned div -->
            <div class=" flex w-16 h-16">
                
            </div>
        </section>
    </div>
</main>