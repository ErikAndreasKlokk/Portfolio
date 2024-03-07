<script>
  import { onMount } from 'svelte';
    import { language } from '../lib/stores/languages'
    import axios from 'axios';

    let Norsk = [
                "Mitt navn er", 
                "Mine vidunderlige", 
                "Prosjekter", 
                "Lær litt om meg ved å skrolle til høyre,", 
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
                    "Learn a little about me by scrolling to the right,", 
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
    <div class=" w-full snap-y snap-mandatory overflow-y-scroll overflow-x-hidden h-screen">
        <section id="forside" class=" p-3 relative w-full h-screen flex items-center justify-center flex-col snap-always snap-start">
            <!-- forside -->
            <p class=" text-2xl font-light">{selectedLanguage[0]}</p>
            <p class=" text-7xl font-bold text-center sm:text-4xl">Erik Andreas Klokk</p>
            <img class=" absolute bottom-24 rotate-90 w-20" src="arrow.svg" alt="arrow">
        </section>
        <section class=" w-full h-screen snap-always snap-start">
            <div class=" w-full relative snap-x snap-mandatory overflow-y-hidden overflow-x-scroll h-screen flex">
                <section id="omsiden" class=" p-16 min-w-full h-screen flex items-center justify-center flex-col snap-always snap-start">
                    <!-- litt om siden -->
                    <p class=" text-4xl text-center sm:text-2xl">{selectedLanguage[3]} <br> {selectedLanguage[4]}</p>
                    <img class=" absolute right-24 w-20 xl:right-1" src="arrow.svg" alt="arrow">
                    <img class=" absolute bottom-24 rotate-90 w-20" src="arrow.svg" alt="arrow">
                </section>
                <section class=" min-w-full h-screen flex items-center justify-center flex-col snap-always snap-start">
                    <div class=" w-full relative snap-y snap-mandatory overflow-y-scroll overflow-x-hidden h-screen scrollbar-hide">
                        <section id="ommeg" class=" p-3 min-w-full h-screen flex items-center justify-center flex-col snap-always snap-start">
                            <!-- om meg -->
                            <p class=" text-7xl font-bold sm:text-4xl">{selectedLanguage[5]}</p>
                            <p class=" w-[50rem] text-2xl font-light mt-5 max-w-full sm:text-lg">{selectedLanguage[6]}{selectedLanguage[7]}{selectedLanguage[8]}{selectedLanguage[9]}{selectedLanguage[10]}</p>
                            <img class=" absolute bottom-24 rotate-90 w-20" src="arrow.svg" alt="">
                        </section>
                        <section id="ommegbilde" class=" p-3 min-w-full h-screen flex items-center justify-center flex-col snap-always snap-start">
                            <!-- om meg bilde -->
                            <img class=" w-[50rem]" src="Erik_The_Thinker._Ferdy.gif" alt="">
                        </section>
                    </div>
                </section>
            </div>
        </section>
        <section id="prosjekter" class=" p-3 min-w-full h-screen flex items-center justify-center flex-col snap-always snap-start">
            <!-- Prosjekter -->
            <p class=" text-2xl font-light">{selectedLanguage[1]}</p>
            <p class=" text-7xl font-bold sm:text-4xl">{selectedLanguage[2]} :</p>
            <div class=" flex-wrap flex justify-center mt-5">
                {#each repos as repo, id}
                    {#if repo.name !== "ErikAndreasKlokk"}
                        <div class=" w-80 h-32 m-4 border border-gray-200 rounded-lg p-3 flex flex-col justify-between hover:scale-[1.15] transition-all">
                            <div class=" flex flex-col">
                                <div class=" flex justify-between w-full">
                                    <div class=" flex">
                                        <a target="_blank" href={repo.html_url}>{repo.name}</a>
                                        {#if repo.homepage !== null}
                                            <a href={repo.homepage} target="_blank" class=" ml-3"><img src="location.svg" alt="page for website"></a>
                                        {/if}
                                    </div>
                                    <div class=" flex">
                                        <img src="star.svg" alt="rating">
                                        <p>{repo.stargazers_count}</p>
                                    </div>
                                </div>
                                <p>{repo.description}</p>
                            </div>
                            <div class=" flex justify-between w-full">
                                <time dateTime={repo.created_at}>
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
        </section>
    </div>
</main>