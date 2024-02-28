<script>
    import { language } from '../lib/stores/languages'

    let Norsk = ["Hei", "Heisann"]

    let English = ["Hello", "Hello there"]

    let selectedLanguage = Norsk

    language.subscribe(() => {
        if ($language.language === "Norsk") {
            selectedLanguage = Norsk
        }
        if ($language.language === "English") {
            selectedLanguage = English
        }
    })
</script>

<main>
    <p>{$language.language}</p>
</main>